"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    // Simulate a form submission (replace with real API call / Formspree / mailto action)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setState("success");
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="form-success__icon" aria-hidden>✓</div>
        <h3>Message received!</h3>
        <p>
          Thank you for reaching out. A member of the Zelha team will get back
          to you within 24 hours.
        </p>
        <button
          type="button"
          className="send-btn"
          onClick={() => setState("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          required
          disabled={state === "submitting"}
          aria-label="First Name"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          required
          disabled={state === "submitting"}
          aria-label="Last Name"
        />
      </div>
      <div>
        <input
          type="email"
          className="form-control"
          placeholder="E-mail"
          required
          disabled={state === "submitting"}
          aria-label="Email address"
        />
        <input
          type="tel"
          className="form-control"
          placeholder="Phone"
          disabled={state === "submitting"}
          aria-label="Phone number"
        />
      </div>
      <textarea
        rows={5}
        placeholder="Message"
        className="form-control"
        required
        disabled={state === "submitting"}
        aria-label="Your message"
      />
      <input
        type="submit"
        className={`send-btn ${state === "submitting" ? "send-btn--loading" : ""}`}
        value={state === "submitting" ? "Sending…" : "Send Message"}
        disabled={state === "submitting"}
      />
    </form>
  );
}
