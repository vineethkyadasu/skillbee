"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/447915266698"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center animate-bounce-slow"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
}
