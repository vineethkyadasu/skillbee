"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">About SkillBee</h1>
          <p className="text-lg text-gray-200">
            Empowering learners with industry-ready skills to transform their
            careers.
          </p>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">SkillBee</span>, our mission is
            simple – to bridge the gap between learning and real-world
            opportunities. We provide hands-on training, expert mentorship, and
            career support so learners are not just certified, but truly
            job-ready.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We focus on practical, project-driven learning. With the guidance of
            experienced trainers and a curriculum aligned to industry demand, we
            ensure every learner builds confidence and expertise to succeed in
            their chosen field.
          </p>
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow rounded-2xl">
            <h3 className="text-4xl font-bold text-blue-900">5000+</h3>
            <p className="text-gray-600 mt-2">Learners Trained</p>
          </div>
          <div className="p-6 shadow rounded-2xl">
            <h3 className="text-4xl font-bold text-blue-900">50+</h3>
            <p className="text-gray-600 mt-2">Expert Mentors</p>
          </div>
          <div className="p-6 shadow rounded-2xl">
            <h3 className="text-4xl font-bold text-blue-900">100+</h3>
            <p className="text-gray-600 mt-2">Hiring Partners</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to take the next step in your career?
        </h2>
        <p className="text-lg mb-8">
          Explore our wide range of professional training programs today.
        </p>
        <Link
          href="/courses"
          className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Browse Courses
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;