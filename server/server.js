import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());

// --- CORS ---
const FRONTEND_ORIGIN = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// --- Rate limiting ---
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Too many requests. Try again later." },
});

// --- Nodemailer ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter at startup
transporter
  .verify()
  .then(() => console.log("✅ SMTP transporter verified"))
  .catch((err) =>
    console.warn("⚠️ SMTP transporter could not be verified:", err.message)
  );

// --- Health Check ---
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Contact API is running 🚀",
    time: new Date().toISOString(),
  });
});

// --- reCAPTCHA verification helper ---
async function verifyRecaptchaToken(token, remoteIp) {
  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) throw new Error("RECAPTCHA_SECRET not set");

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);
  if (remoteIp) params.append("remoteip", remoteIp);

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: params,
  });
  return await res.json();
}

// --- Contact API ---
app.post(
  "/api/contact",
  contactLimiter,
  body("name").trim().isLength({ min: 2 }).escape(),
  body("email").isEmail().normalizeEmail(),
  body("message").trim().isLength({ min: 5 }).escape(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.warn("❌ Validation failed:", errors.array());
        return res
          .status(400)
          .json({ error: "Invalid input", details: errors.array() });
      }

      const { name, email, message, recaptchaToken, startedAt } = req.body;

      // Honeypot check
      if (req.body.website && String(req.body.website).trim() !== "") {
        console.warn("🚫 Spam detected (honeypot filled)");
        return res.status(400).json({ error: "Spam detected" });
      }

      // Time check
      if (startedAt) {
        const elapsed = (Date.now() - Number(startedAt)) / 1000;
        if (elapsed < 3) {
          console.warn(`⚠️ Form submitted too quickly (${elapsed}s)`);
          return res.status(400).json({ error: "Form submitted too quickly" });
        }
      }

      // reCAPTCHA check
      if (!recaptchaToken) {
        console.warn("⚠️ Missing reCAPTCHA token");
        return res.status(400).json({ error: "reCAPTCHA token missing" });
      }

      const recaptcha = await verifyRecaptchaToken(recaptchaToken, req.ip);
      const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || "0.5");

      if (
        !recaptcha.success ||
        recaptcha.action !== "contact" ||
        (recaptcha.score || 0) < minScore
      ) {
        console.warn("❌ reCAPTCHA failed:", recaptcha);
        return res.status(400).json({ error: "reCAPTCHA verification failed" });
      }

      // Send email
      const mailOptions = {
        from: `"Nutzy Website" <${
          process.env.SMTP_FROM || process.env.SMTP_USER
        }>`,
        to: process.env.CONTACT_EMAIL || "info@nutzy.ng",
        subject: `📬 Web Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`📧 Message sent from ${email}`);

      return res.json({ message: "Message sent successfully ✅" });
    } catch (err) {
      console.error("🔥 Contact API error:", err);
      return res.status(500).json({ error: "Failed to send message." });
    }
  }
);

// --- Start server ---
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Contact API running on http://localhost:${PORT}`);
});
