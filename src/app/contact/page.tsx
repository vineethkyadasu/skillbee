"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 text-center mb-4"
          >
            Get in Touch with <span className="text-blue-900">SkillBee</span>
          </motion.h1>

          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Have questions about our programs? Fill out the form or reach us
            directly — we&apos;d love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 bg-white p-8 rounded-2xl shadow-lg"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-gray-900 h-32 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 mt-2 font-medium">
                  ✅ Message sent successfully!
                </p>
              )}
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center space-y-6"
            >
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Mail size={20} /> Email
                </h2>
                <p className="text-gray-800">info@skillbee.co.uk</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Phone size={20} /> Phone
                </h2>
                <p className="text-gray-800">+44 7915 266698</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;