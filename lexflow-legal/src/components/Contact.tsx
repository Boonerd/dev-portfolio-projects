// src/components/Contact.tsx — FINAL WORKING CODE
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import LawyerIcon from './icons/LawyerIcon';
import { LawyerGender } from '../types';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const payload = {
      name: e.currentTarget.user_name.value,
      email: e.currentTarget.user_email.value,
      message: e.currentTarget.message.value,
    };

    const { error } = await supabase.from('contacts').insert(payload);

    if (error) {
      console.error('Error:', error);
      setStatus('Failed — check console');
    } else {
      setStatus('Message saved! Thank you');
      e.currentTarget.reset();
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-12">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <input name="user_name" placeholder="Full Name" required className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)]" />
          <input name="user_email" type="email" placeholder="Email" required className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)]" />
          <textarea name="message" placeholder="Your message..." rows={5} required className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card)] focus:ring-2 focus:ring-[var(--accent)] resize-none"></textarea>
          <button type="submit" className="w-full bg-[var(--accent)] text-black font-bold py-4 rounded-lg hover:scale-105 transition text-lg">
            Send Message
          </button>
        </form>
        {status && <p className={`mt-6 text-lg font-medium ${status.includes('saved') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>}
        <div className="flex justify-center gap-12 mt-16">
          <LawyerIcon gender={LawyerGender.Female} className="w-40 h-40" />
          <LawyerIcon gender={LawyerGender.Male} className="w-40 h-40" />
        </div>
      </div>
    </section>
  );
}