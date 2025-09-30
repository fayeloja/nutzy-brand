// src/components/ContactForm.jsx
import { useState, useEffect } from "react";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // Vite env

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const [startedAt] = useState(Date.now()); // used for simple time-check honeypot

  // load the recaptcha script on mount if not already loaded
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      console.warn("RECAPTCHA_SITE_KEY not set in env.");
      return;
    }
    const src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    // honeypot: if website field filled, likely a bot
    if (form.website && form.website.trim() !== "") {
      setStatus({ ok: false, msg: "Spam detected." });
      setSending(false);
      return;
    }

    // time check: ensure user spent at least 3 seconds filling the form
    const elapsed = (Date.now() - startedAt) / 1000;
    if (elapsed < 3) {
      setStatus({
        ok: false,
        msg: "Form filled too quickly. Please try again.",
      });
      setSending(false);
      return;
    }

    try {
      // ensure grecaptcha available
      if (!window.grecaptcha) {
        setStatus({
          ok: false,
          msg: "reCAPTCHA not loaded. Try refreshing the page.",
        });
        setSending(false);
        return;
      }

      // get recaptcha v3 token (action "contact")
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "contact",
      });

      // post to backend
      const API_URL = "http://localhost:4000/api/contact";
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // if you rely on cookies; optional
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          recaptchaToken: token,
          // server will also validate honeypot/time if provided
          startedAt,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({
          ok: true,
          msg: data.message || "Message sent. Thank you!",
        });
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        setStatus({ ok: false, msg: data.error || "Something went wrong." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex text-center justify-center items-center mx-auto px-24 mb-20 lazyload text-primary">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow"
      >
        <h3 className="text-3xl font-bold mb-4">SEND MESSAGE</h3>

        <label className="block mb-2">
          <span className="text-sm font-medium">Name</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border px-3 py-2"
          />
        </label>

        <label className="block mb-2">
          <span className="text-sm font-medium">Email</span>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border px-3 py-2"
          />
        </label>

        <label className="block mb-2">
          <span className="text-sm font-medium">Message</span>
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="mt-1 block w-full rounded-md border px-3 py-2"
          />
        </label>

        {/* Honeypot field: hidden from users via CSS */}
        <div style={{ display: "none" }} aria-hidden="true">
          <label>
            <input
              name="website" // common honeypot name
              value={form.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-4 bg-accent-red w-full text-white px-6 py-2 rounded hover:bg-hover-accent-red transition duration-500"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`mt-4 ${status.ok ? "text-green-600" : "text-red-600"}`}
          >
            {status.msg}
          </p>
        )}
      </form>
    </div>
  );
}
export default ContactForm;
