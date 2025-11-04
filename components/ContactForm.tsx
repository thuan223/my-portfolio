"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .send(
        "service_drxijoj",
        "template_nxlm09g",
        formData,
        "FYN1DstuXxK8seKOH"
      )
      .then(
        () => setStatus("✅ Message sent successfully!"),
        () => setStatus("❌ Failed to send message.")
      );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        onChange={handleChange}
        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-400 text-base"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-400 text-base"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        onChange={handleChange}
        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-400 text-base"
      ></textarea>
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-lg font-medium"
      >
        Send Message ✈️
      </button>
      {status && <p className="text-center text-sm text-gray-400">{status}</p>}
    </form>
  );
}
