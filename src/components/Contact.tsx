"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { SectionTitle } from "./SectionTitle";

type FormStatus = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export function Contact() {
  const { portfolio } = usePortfolio();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setFeedback(
        "Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local",
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string).trim();
    const email = (data.get("email") as string).trim();
    const message = (data.get("message") as string).trim();

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
          from_name: "K Prabhu Portfolio",
          replyto: email,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setStatus("error");
        setFeedback(
          result.message ??
            "Could not send your message. Please email me directly.",
        );
        return;
      }

      setStatus("sent");
      setFeedback("Thanks! Your message was sent to my inbox.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(
        `Something went wrong. Please email me at ${portfolio.email}.`,
      );
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="contact-title"
          subtitle="Say hello"
          title="Get in Touch"
        />
        <motion.form
          onSubmit={handleSubmit}
          className="mx-auto max-w-xl space-y-4 rounded-2xl border border-white/10 bg-surface-elevated/50 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-zinc-400">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              disabled={status === "sending"}
              className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white outline-none transition focus:border-accent disabled:opacity-60"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-zinc-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={status === "sending"}
              className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white outline-none transition focus:border-accent disabled:opacity-60"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm text-zinc-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={status === "sending"}
              className="w-full resize-none rounded-lg border border-white/10 bg-surface px-4 py-3 text-white outline-none transition focus:border-accent disabled:opacity-60"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-accent py-3 font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
          {feedback && (
            <p
              className={`text-center text-sm ${
                status === "sent" ? "text-accent" : "text-red-400"
              }`}
            >
              {feedback}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
