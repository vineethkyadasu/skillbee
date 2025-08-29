"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import Link from "next/link";
import Internships from "@/components/Internships";

export default function Home() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const featuredCourses = [
  {
    title: "Generative AI (Gen AI)",
    outcomes: [
      "Understand large language models, prompt engineering, and AI content creation.",
      "Apply AI tools for automation, analytics, and innovation.",
    ],
    career: "AI Engineer, Machine Learning Specialist",
    whatsappMessage:
      "Hi SkillBee, I’m interested in the Generative AI course. Please share more details.",
    image: "/courses/genai.jpg",
  },
  {
    title: "Power BI + SQL",
    outcomes: [
      "Create interactive dashboards and reports in Power BI.",
      "Write optimized SQL queries for data extraction.",
    ],
    career: "Business Analyst, Data Analyst",
    whatsappMessage:
      "Hi SkillBee, I’m interested in the Power BI + SQL course. Please share more details.",
    image: "/courses/powerbi-sql.jpg",
  },
  {
    title: "AWS Data Engineering",
    outcomes: [
      "Design and manage data pipelines using AWS services.",
      "Implement scalable analytics solutions.",
    ],
    career: "Data Engineer, Cloud Engineer",
    whatsappMessage:
      "Hi SkillBee, I’m interested in the AWS Data Engineering course. Please share more details.",
    image: "/courses/aws-de.jpg",
  },
];

  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative bg-blue-900 text-white text-center py-24 px-4"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Where Skills Meet Opportunity
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Gain practical skills and real-world experience with SkillBee
              programs.
            </p>
            <div className="space-x-4">
              {/* Enquire Now */}
              <button
                onClick={() => setShowEnquiry(true)}
                className="bg-white text-blue-900 font-semibold px-6 py-3 rounded hover:bg-gray-100"
              >
                Enquire Now
              </button>

              {/* WhatsApp Chat */}
              <a
                href="https://wa.me/447915266698?text=Hi%20SkillBee!%20I%20would%20like%20to%20know%20more%20about%20your%20programs."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600">
                  Contact via WhatsApp
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Modal for Enquiry Form */}
{showEnquiry && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative animate-fadeIn">
      
      {/* Header */}
      <div className="bg-blue-900 text-white rounded-t-2xl px-6 py-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Enquiry Form</h2>
        <button
          onClick={() => setShowEnquiry(false)}
          className="text-white text-xl hover:text-gray-200"
        >
          ✕
        </button>
      </div>

      {/* Form Content */}
      <div className="p-6">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              placeholder=""
              rows={3}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  </div>
)}


        {/* Featured Courses Section */}
<section className="max-w-7xl mx-auto py-20 px-4">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
    Featured Courses
  </h2>
  <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-8">
    Explore our most popular programs designed to boost your skills and career opportunities.
  </p>

  {/* View All Button */}
  <div className="flex justify-center mb-12">
    <Link
      href="/courses"
      className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
    >
      View All Courses →
    </Link>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {featuredCourses.map((course, index) => (
      <CourseCard
        key={index}
        title={course.title}
        outcomes={course.outcomes}
        career={course.career}
        whatsappMessage={`Hello, I want to know more about ${course.title}`}
      />
    ))}
  </div>
</section>

<Internships />

        {/* Why Choose Us Section */}
<section className="bg-gray-50 py-20 px-6 md:px-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
      Why Choose <span className="text-blue-900">SkillBee</span>?
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-center mb-4">
          <svg
            className="w-12 h-12 text-blue-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 6V4m0 2a8 8 0 100 16 8 8 0 000-16zm0 0v2m0 4h.01" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          Career-Focused Learning
        </h3>
        <p className="text-gray-700 text-base">
          Our programs are designed with real-world industry needs in mind to help you grow your career.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-center mb-4">
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 11c0-1.104.896-2 2-2h4V7h-4a4 4 0 00-4 4v4h-2v4h2v6h4v-6h2l1-4h-3z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-3">
          Expert Mentors
        </h3>
        <p className="text-gray-700 text-base">
          Learn directly from industry experts and experienced trainers who guide you every step.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-center mb-4">
          <svg
            className="w-12 h-12 text-yellow-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.09 6.26H20l-5 3.64L16.18 18 12 14.77 7.82 18 9 11.9l-5-3.64h5.91z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-yellow-600 mb-3">
          Globally Recognized Certification
        </h3>
        <p className="text-gray-700 text-base">
          Earn certificates that are valued and recognized by top companies worldwide.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="bg-white py-20 px-6 md:px-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
      What Our <span className="text-blue-900">Students Say</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
        <p className="text-gray-700 italic mb-6">
          “SkillBee helped me land my first digital marketing job! The mentors were supportive and the content was very practical.”
        </p>
        <div className="text-center">
          <h4 className="font-semibold text-gray-900">Aditi Sharma</h4>
          <p className="text-sm text-gray-600">Digital Marketer at Zomato</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
        <p className="text-gray-700 italic mb-6">
          “The Data Analytics course gave me real skills that I applied in my job. Highly recommend SkillBee for career growth.”
        </p>
        <div className="text-center">
          <h4 className="font-semibold text-gray-900">Rohan Verma</h4>
          <p className="text-sm text-gray-600">Business Analyst at TCS</p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
        <p className="text-gray-700 italic mb-6">
          “The certification added great value to my resume. I was able to switch to a better company with SkillBee’s help.”
        </p>
        <div className="text-center">
          <h4 className="font-semibold text-gray-900">Sneha Patel</h4>
          <p className="text-sm text-gray-600">HR Specialist at Infosys</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/447915266698"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center"
>
  {/* WhatsApp Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M13.601 2.326A7.954 7.954 0 0 0 8.003 0C3.582 0 0 3.582 0 8.003c0 1.412.365 2.796 1.057 4.017L.063 16l4.093-1.072a7.942 7.942 0 0 0 3.847.979h.004c4.421 0 8.003-3.582 8.003-8.003 0-2.137-.832-4.146-2.409-5.578zM8.004 14.5a6.463 6.463 0 0 1-3.293-.896l-.236-.141-2.429.637.647-2.372-.154-.244A6.46 6.46 0 0 1 1.5 8.003c0-3.59 2.914-6.503 6.503-6.503 1.737 0 3.367.676 4.596 1.905a6.449 6.449 0 0 1 1.905 4.596c0 3.589-2.914 6.499-6.5 6.499zm3.555-4.886c-.195-.097-1.152-.568-1.332-.633-.18-.066-.312-.097-.445.097-.133.195-.511.632-.626.762-.115.133-.231.15-.426.05-.195-.097-.824-.304-1.57-.97-.58-.517-.97-1.152-1.086-1.347-.115-.195-.012-.3.086-.396.088-.088.195-.231.293-.347.097-.115.129-.195.195-.324.065-.13.033-.244-.016-.341-.05-.097-.445-1.073-.61-1.468-.16-.383-.323-.331-.445-.338l-.38-.007c-.13 0-.341.05-.52.244-.18.195-.683.668-.683 1.63 0 .962.699 1.89.797 2.02.097.133 1.375 2.098 3.33 2.942.466.201.83.322 1.114.412.467.149.892.128 1.227.078.374-.056 1.152-.47 1.315-.923.162-.454.162-.844.114-.923-.047-.08-.175-.127-.37-.224z" />
  </svg>
</a>
      </main>
      <Footer />
    </>
  );
}