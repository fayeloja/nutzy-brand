// server.js
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // or axios
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());

// CORS - restrict to your front-end origin in production
const FRONTEND_ORIGIN = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Rate limiter for contact endpoint
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: { error: "Too many requests from this IP, please try again later." },
});

// Nodemailer transporter (example using SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// verify transporter once at startup (optional)
transporter
  .verify()
  .then(() => {
    console.log("SMTP transporter verified");
  })
  .catch((err) => {
    console.warn(
      "Warning: SMTP transporter could not be verified",
      err.message
    );
  });

// Helper: verify recaptcha v3 token with Google
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

  const data = await res.json();
  return data; // data.score, data.success, data.action, ...
}

app.post(
  "/api/contact",
  contactLimiter,
  // validation
  body("name").trim().isLength({ min: 2 }).escape(),
  body("email").isEmail().normalizeEmail(),
  body("message").trim().isLength({ min: 5 }).escape(),
  async (req, res) => {
    // validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ error: "Invalid input", details: errors.array() });
    }

    // basic fields
    const { name, email, message, recaptchaToken, startedAt } = req.body;

    // honeypot + time-check server side
    // If there is a 'website' field (honeypot) or it's present in body, reject
    if (req.body.website && String(req.body.website).trim() !== "") {
      return res.status(400).json({ error: "Spam detected" });
    }

    // time check: ensure at least 3 seconds
    if (startedAt) {
      const elapsed = (Date.now() - Number(startedAt)) / 1000;
      if (elapsed < 3)
        return res.status(400).json({ error: "Form submitted too quickly" });
    }

    // recaptcha verification
    try {
      if (!recaptchaToken)
        return res.status(400).json({ error: "reCAPTCHA token missing" });
      const ip = req.ip;
      const recaptcha = await verifyRecaptchaToken(recaptchaToken, ip);

      // Expect success, action 'contact', and a reasonable score (>=0.5)
      const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || "0.5");
      if (
        !recaptcha.success ||
        recaptcha.action !== "contact" ||
        (recaptcha.score || 0) < minScore
      ) {
        console.warn("reCAPTCHA verification failed:", recaptcha);
        return res.status(400).json({ error: "reCAPTCHA verification failed" });
      }
    } catch (err) {
      console.error("reCAPTCHA error:", err);
      return res.status(500).json({ error: "reCAPTCHA verification failed" });
    }

    // send email via nodemailer
    try {
      const mailOptions = {
        from: `"Nutzy Website" <${
          process.env.SMTP_FROM || process.env.SMTP_USER
        }>`,
        to: process.env.CONTACT_EMAIL || "info@nutzy.ng",
        subject: `Website contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, "<br/>")}</p>`,
      };

      await transporter.sendMail(mailOptions);

      return res.json({ message: "Message sent successfully." });
    } catch (err) {
      console.error("Error sending email:", err);
      return res.status(500).json({ error: "Failed to send message." });
    }
  }
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Contact API running on port ${PORT}`);
});
