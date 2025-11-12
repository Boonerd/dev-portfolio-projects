import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.currentTarget,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setStatus('Message sent! We’ll reply within 24 hours.');
      e.currentTarget.reset();
    })
    .catch(() => setStatus('Error. Try again.'));
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input name="user_name" type="text" placeholder="Full Name" required className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)]" />
            <input name="user_email" type="email" placeholder="Email Address" required className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)]" />
            <textarea name="message" placeholder="How can we assist you?" rows={5} required className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)]"></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
              Send Message
              </button>
          </form>
          {status && <p className="mt-4 text-center text-sm">{status}</p>}
          <p className="mt-8 text-xs text-gray-500 text-center">
            By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}