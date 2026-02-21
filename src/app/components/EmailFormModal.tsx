"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";

interface EmailFormModalProps {
  open: boolean;
  onClose: () => void;
}

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "10px 14px",
  color: "var(--text)",
  width: "100%",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "var(--font-geist-sans)",
};

export default function EmailFormModal({ open, onClose }: EmailFormModalProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const getVal = (i: number) =>
      ((e.target as HTMLFormElement)[i] as HTMLInputElement).value;

    const name    = getVal(0);
    const email   = getVal(1);
    const phone   = getVal(2);
    const message = getVal(3);

    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        localStorage.setItem("visitor_name", name);
        setStatus("sent");
        setTimeout(() => { setStatus("idle"); onClose(); }, 1500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-bright)";
    (e.currentTarget as HTMLElement).style.boxShadow   = "0 0 0 2px rgba(45,212,191,0.1)";
  };
  const blurStyle  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
    (e.currentTarget as HTMLElement).style.boxShadow   = "none";
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: "rgba(6,9,16,0.75)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-[92vw] max-w-md rounded-2xl p-8"
        style={{
          background: "#0c0f1c",
          border: "1px solid var(--border)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(45,212,191,0.08)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="heading text-xl font-semibold mb-0.5">Get in Touch</h2>
            <p className="mono text-[10px] tracking-widest" style={{ color: "var(--text-muted)" }}>
              SEND A MESSAGE
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors cursor-pointer glass glass-hover"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faClose} style={{ width: 14, color: "var(--text-bright)" }} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            style={inputStyle}
            type="text"
            placeholder="Your name"
            name="name"
            required
            onFocus={focusStyle}
            onBlur={blurStyle}
          />
          <input
            style={inputStyle}
            type="email"
            placeholder="Email address"
            name="email"
            required
            onFocus={focusStyle}
            onBlur={blurStyle}
          />
          <input
            style={inputStyle}
            type="text"
            placeholder="Phone (optional)"
            name="phone"
            onFocus={focusStyle}
            onBlur={blurStyle}
          />
          <textarea
            style={{ ...inputStyle, resize: "vertical", minHeight: "110px" } as React.CSSProperties}
            placeholder="Your message"
            name="message"
            required
            rows={4}
            onFocus={focusStyle as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
            onBlur={blurStyle as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
          />

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="mt-3 py-3 rounded-xl mono text-sm tracking-wider font-semibold transition-all duration-300 cursor-pointer disabled:opacity-60"
            style={{
              background: status === "sent" ? "rgba(45,212,191,0.2)" : "var(--teal)",
              color: status === "sent" ? "var(--teal)" : "#060910",
              border: status === "sent" ? "1px solid var(--border-bright)" : "none",
            }}
            onMouseEnter={(e) => {
              if (status === "idle")
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 24px rgba(45,212,191,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
              ? "✓ Sent!"
              : status === "error"
              ? "Try Again"
              : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-center text-xs" style={{ color: "#ff7b72" }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
