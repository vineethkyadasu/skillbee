"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    "Hi SkillBee, I’d like to know more about your programs."
  )}`;

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Get in Touch with SkillBee</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Fill out the form below or reach out via WhatsApp for quick support.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800"
            >
              Send Message
            </button>
            {submitted && <p className="text-green-600 mt-2">Message sent successfully!</p>}
          </form>

          {/* Contact Info & WhatsApp */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p>info@skillbee.co.uk</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p>+447915266698</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;