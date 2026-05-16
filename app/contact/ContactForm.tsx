"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, message })
      });

      if (!res.ok) throw new Error("Failed to submit");

      setState("success");
    } catch (err) {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="form-success__icon" aria-hidden>
          ✓
        </div>
        <h3>Message received!</h3>
        <p>Thank you for reaching out. A member of the Zelha team will get back to you within 24 hours.</p>
        <button type="button" className="send-btn" onClick={() => setState("idle")}>Send another message</button>
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          required
          disabled={state === "submitting"}
          aria-label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          className="form-control"
          placeholder="Phone"
          disabled={state === "submitting"}
          aria-label="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <textarea
        rows={5}
        placeholder="Message"
        className="form-control"
        required
        disabled={state === "submitting"}
        aria-label="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="submit"
        className={`send-btn ${state === "submitting" ? "send-btn--loading" : ""}`}
        value={state === "submitting" ? "Sending…" : "Send Message"}
        disabled={state === "submitting"}
      />
      {state === "error" ? <p className="form-error">Could not send message — please try again.</p> : null}
    </form>
  );
}
