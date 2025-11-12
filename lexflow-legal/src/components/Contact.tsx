import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    if (!form.current) {
      setStatus('Error: Form not found.');
      return;
    }

    emailjs
      .sendForm(
        'service_qfe63rh',           // YOUR SERVICE ID
        'template_wzv07p8',          // YOUR TEMPLATE ID
        form.current,
        '9c0uXDrYtZyNx-AKE'          // YOUR PUBLIC KEY
      )
      .then(() => {
        setStatus('Sent! We’ll reply in 24h.');
        form.current?.reset();
      })
      .catch((err) => {
        console.error('EmailJS Error:', err); // ← SEE IN DEV TOOLS
        setStatus('Error. Check console.');
      });
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <input name="user_name" type="text" placeholder="Full Name" required className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)] text-base" />
            <input name="user_email" type="email" placeholder="Email" required className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)] text-base" />
            <textarea name="message" placeholder="Your message..." rows={5} required className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)] text-base"></textarea>
            <button type="submit" className="w-full btn-primary">
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-sm text-[var(--accent)] font-medium">{status}</p>}
        </div>
      </div>
    </section>
  );
}