// src/components/Contact.tsx
import React, { useRef, useState } from 'react';
import LawyerIcon from './icons/LawyerIcon';
import { LawyerGender } from '../types';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Sent! We’ll reply in 24h.'), 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="max-w-3xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <input
              name="user_name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)] text-base"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)] text-base"
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              required
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)] text-base"
            ></textarea>
            <button type="submit" className="w-full btn-primary">
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-[var(--accent)] font-medium">{status}</p>
          )}
        </div>

        {/* LAWYERS — BELOW FORM */}
        <div className="flex justify-center gap-8 sm:gap-12 mt-16 flex-wrap">
          <LawyerIcon gender={LawyerGender.Female} className="w-32 h-32 sm:w-40 sm:h-40" />
          <LawyerIcon gender={LawyerGender.Male} className="w-32 h-32 sm:w-40 sm:h-40" />
        </div>

        <p className="text-center mt-6 text-sm text-muted">
          *We’re ready to help. Your case starts here.*
        </p>
      </div>
    </section>
  );
}