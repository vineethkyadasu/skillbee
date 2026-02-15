"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const featuredCourses = [
    {
      title: "Data Science",
      price: "£999",
      outcomes: [
        "Master statistical analysis, machine learning, and data visualization techniques.",
        "Work with real-world datasets to build predictive models and derive actionable insights.",
      ],
      career: "Data Scientist, ML Engineer, Analytics Lead",
      image: "/courses/ai-ml.jpg",
    },
    {
      title: "Salesforce Admin & Developer",
      price: "£799",
      outcomes: [
        "Administer Salesforce and develop custom applications using Apex and Lightning.",
        "Integrate Salesforce with third-party systems.",
      ],
      career:
        "Covers both configuration and development for a complete Salesforce career path.",
      image: "/courses/salesforce-admin-dev.jpg",
    },
    {
      title: "Azure Data Engineering + Databricks with Spark",
      price: "£599",
      outcomes: [
        "Process big data using Spark in Databricks.",
        "Implement data lakes, pipelines, and analytics in Azure.",
      ],
      career:
        "Highly valued in organizations building cloud-native data platforms.",
      image: "/courses/azure-de-databricks.jpg",
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
              <button
                onClick={() => setShowEnquiry(true)}
                className="bg-white text-blue-900 font-semibold px-6 py-3 rounded hover:bg-gray-100"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </section>

        {/* Modal for Enrollment Form */}
        {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}

        {/* Featured Courses Section - Unified Background */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
              Featured Courses
            </h2>
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-8">
              Explore our most popular programs designed to boost your skills
              and career opportunities.
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
                  price={course.price}
                  image={course.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Course Features Banner */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Empower Yourself with our Training Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-white">
              {/* Row 1 */}
              <div className="flex items-center gap-3">
                <ChevronRight className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-lg font-medium">
                  100% Guaranteed Project Experience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-lg font-medium">
                  Job Oriented Training
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-lg font-medium">
                  Hands-On Practical Experience
                </span>
              </div>
              {/* Row 2 */}
              <div className="flex items-center gap-3">
                <ChevronRight className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-lg font-medium">
                  Instructor Based Virtual Learning
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-lg font-medium">Course Material</span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="text-yellow-400 flex-shrink-0" size={24} />
                <span className="text-lg font-medium">
                  Recruitment Assistance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Guaranteed Project Experience Section */}
        <section
          className="relative py-20 px-6 text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Guaranteed Real-World Project Experience
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              At SkillBee, learning goes beyond theory. Every course includes
              structured, real-world projects designed to mirror challenges
              faced in today&apos;s workplaces. With guidance from experienced
              industry professionals, you&apos;ll apply your knowledge to
              practical scenarios — building the kind of hands-on experience
              employers actually look for.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section - Unified Styling */}
        <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Why Choose <span className="text-blue-900">SkillBee</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
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
                  Our programs are designed with real-world industry needs in
                  mind to help you grow your career.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
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
                  Learn directly from industry experts and experienced trainers
                  who guide you every step.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
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
                  Earn certificates that are valued and recognized by top
                  companies worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Unified Styling with Pattern */}
        <section
          className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6 md:px-12"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              What Our <span className="text-blue-900">Students Say</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <p className="text-gray-700 italic mb-6">
                  &ldquo;SkillBee helped me land my first digital marketing
                  job! The mentors were supportive and the content was very
                  practical.&rdquo;
                </p>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">Aditi Sharma</h4>
                  <p className="text-sm text-gray-600">
                    Digital Marketer at Zomato
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <p className="text-gray-700 italic mb-6">
                  &ldquo;The Data Analytics course gave me real skills that I
                  applied in my job. Highly recommend SkillBee for career
                  growth.&rdquo;
                </p>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">Rohan Verma</h4>
                  <p className="text-sm text-gray-600">
                    Business Analyst at TCS
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <p className="text-gray-700 italic mb-6">
                  &ldquo;The certification added great value to my resume. I
                  was able to switch to a better company with SkillBee&apos;s
                  help.&rdquo;
                </p>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">Sneha Patel</h4>
                  <p className="text-sm text-gray-600">
                    HR Specialist at Infosys
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}