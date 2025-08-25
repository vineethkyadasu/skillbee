import React, { useState } from "react";

interface EnquiryFormProps {
  courseName?: string;
  onClose: () => void;
}

export default function EnquiryForm({ courseName, onClose }: EnquiryFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, phone, courseName }),
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-lg"
          onClick={onClose}
        >
          ×
        </button>
        {submitted ? (
          <div className="text-center py-10">
            <h2 className="text-xl font-bold mb-2">Thank you!</h2>
            <p>We have received your enquiry.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Enquire Now</h2>
            {courseName && <p className="text-center mb-4">Course: {courseName}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}