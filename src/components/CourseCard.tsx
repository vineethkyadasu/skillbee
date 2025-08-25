"use client";
import React, { useState } from "react";
import { CheckCircle } from "lucide-react"; 
import EnquiryForm from "./EnquiryForm";
import WhatsAppButton from "./WhatsAppButton";

interface CourseCardProps {
  title: string;
  outcomes: string[];
  career?: string; // ✅ optional now
  whatsappMessage?: string; // ✅ optional now
}

export default function CourseCard({ title, outcomes, whatsappMessage, career }: CourseCardProps) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6 flex flex-col justify-between h-full border border-gray-100">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>

        {/* Outcomes */}
        <ul className="space-y-2 mb-4 text-sm text-gray-700">
          {outcomes.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Career (render only if provided) */}
        {career && (
          <p className="text-sm text-gray-800 mb-6">
            <span className="font-medium text-gray-900">Career Path:</span> {career}
          </p>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <button
            onClick={() => setOpenForm(true)}
            className="flex-1 bg-blue-900 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Enquire Now
          </button>
          {whatsappMessage && <WhatsAppButton message={whatsappMessage} />}
        </div>
      </div>

      {openForm && <EnquiryForm courseName={title} onClose={() => setOpenForm(false)} />}
    </>
  );
}