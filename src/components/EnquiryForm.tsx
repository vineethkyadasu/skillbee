"use client";
import React, { useState } from "react";

interface EnquiryFormProps {
  courseName?: string;
  onClose: () => void;
}

export default function EnquiryForm({ courseName, onClose }: EnquiryFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, courseName, message }),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative animate-fadeIn">
        {/* Header */}
        <div className="bg-blue-900 text-white rounded-t-2xl px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Enroll Now</h2>
          <button
            onClick={onClose}
            className="text-white text-xl hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-10">
              <h2 className="text-xl font-bold mb-2">Thank you!</h2>
              <p className="text-gray-700">
                Thank you for enrolling with SkillBee! Our team will contact you shortly with the next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={courseName || ""}
                  readOnly={!!courseName}
                  placeholder="Select a course"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  placeholder="Any additional message..."
                  rows={3}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Submit Enrollment
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}