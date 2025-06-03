import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MessageForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      service_id: import.meta.env.VITE_SERVICE_KEY,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_USER_ID,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'ELLE POWER TRADING & SERVICES',
        message: message,
      },
    };

    try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      if (res.status === 200) {
        setStatus(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Email failed:', error);
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status !== null) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form
      className="w-[90%] h-full sm:w-[70%] md:w-[60%] lg:w-full bg-white rounded-lg px-6 py-10 flex flex-col gap-6 items-center shadow-card"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold text-center text-ctmred">Send Us a Message</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 text-black/70 rounded-md focus:outline-none focus:ring-2 focus:ring-ctmred"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 text-black/70 rounded-md focus:outline-none focus:ring-2 focus:ring-ctmred"
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 text-black/70 rounded-md resize-none h-32 focus:outline-none focus:ring-2 focus:ring-ctmred"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className={`bg-ctmred text-white px-6 py-3 rounded-md font-semibold transition ${
          loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-red-700'
        }`}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status === true && (
        <p className="text-center text-sm text-green-700">Message sent successfully!</p>
      )}
      {status === false && (
        <p className="text-center text-sm text-red-700">Failed to send message. Please try again later.</p>
      )}
    </form>
  );
}

export default MessageForm;
