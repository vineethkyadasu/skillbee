"use client";
import React from "react";

interface WhatsAppButtonProps {
  message: string;
  className?: string;
}

export default function WhatsAppButton({ message, className }: WhatsAppButtonProps) {
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${className}`}
    >
      WhatsApp
    </a>
  );
}