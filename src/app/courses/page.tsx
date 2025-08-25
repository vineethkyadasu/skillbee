"use client";
import React, { useState } from "react";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";  // ✅ import Navbar
import Footer from "@/components/Footer";  // ✅ import Footer

const CoursesPage = () => {
  const [search, setSearch] = useState("");

  const courses = [
    { title: "Informatica PowerCenter", outcomes: ["Master ETL workflows, transformations, and performance tuning.","Build enterprise-level data integration pipelines."], career: "Prepares learners for data engineering and analytics roles in large-scale enterprises that use Informatica." },
    { title: "SAP SuccessFactors", outcomes: ["Gain expertise in SAP’s cloud-based HR and talent management system.","Learn configuration, employee lifecycle management, and reporting."], career: "Ideal for HRIS specialists and SAP consultants, enabling high-value HR digital transformation projects." },
    { title: "Generative AI (Gen AI)", outcomes: ["Understand large language models, prompt engineering, and AI content creation.","Apply AI tools for automation, analytics, and innovation."], career: "Equips learners for cutting-edge AI integration in business workflows, boosting efficiency and creativity." },
    { title: "Snowflake + DBT + ADF", outcomes: ["Build scalable data warehouses in Snowflake.","Use DBT for transformation and Azure Data Factory for orchestration."], career: "In-demand in cloud data engineering, enabling streamlined data pipelines across Azure and Snowflake ecosystems." },
    { title: "Power BI + SQL", outcomes: ["Create interactive dashboards and reports in Power BI.","Write optimized SQL queries for data extraction."], career: "Key skill set for BI developers, analysts, and data storytellers in virtually every industry." },
    { title: "Azure Data Engineering + Databricks with Spark", outcomes: ["Process big data using Spark in Databricks.","Implement data lakes, pipelines, and analytics in Azure."], career: "Highly valued in organizations building cloud-native data platforms." },
    { title: "AWS Data Engineering", outcomes: ["Design and manage data pipelines using AWS services like Glue, Redshift, and Athena.","Implement scalable analytics solutions."], career: "Positions learners for roles in cloud data engineering on AWS." },
    { title: "AWS + DevOps", outcomes: ["Implement CI/CD pipelines, container orchestration, and infrastructure-as-code in AWS.","Automate deployment workflows."], career: "In demand for cloud engineers and DevOps specialists." },
    { title: "AI & Machine Learning Training", outcomes: ["Build and train predictive models.","Apply supervised, unsupervised, and deep learning techniques."], career: "Opens career paths in AI engineering, data science, and analytics." },
    { title: "SAP S/4HANA FICO", outcomes: ["Configure SAP Finance and Controlling modules.","Run reports and manage financial processes in S/4HANA."], career: "Highly valued in finance and ERP consultancy roles." },
    { title: "Salesforce Admin", outcomes: ["Manage Salesforce users, permissions, and workflows.","Create reports and dashboards."], career: "Essential entry point for Salesforce ecosystem careers." },
    { title: "Salesforce Admin & Developer", outcomes: ["Administer Salesforce and develop custom applications using Apex and Lightning.","Integrate Salesforce with third-party systems."], career: "Covers both configuration and development for a complete Salesforce career path." },
    { title: "Cyber Security", outcomes: ["Learn network security, threat detection, and incident response.","Master cybersecurity tools and compliance frameworks."], career: "Qualifies learners for security analyst, penetration tester, or SOC roles." },
    { title: "Tableau + SQL", outcomes: ["Build advanced visualizations in Tableau.","Write SQL queries for analytics."], career: "In-demand skills for data visualization and BI reporting jobs." },
    { title: "Python Fullstack", outcomes: ["Develop front-end and back-end applications using Python, Django/Flask, and JS frameworks.","Deploy fullstack solutions to production."], career: "Versatile skill set for both startup and enterprise development teams." },
    { title: "Software Testing (Manual + Automation)", outcomes: ["Learn test case design, execution, and defect reporting.","Use automation tools like Selenium, JUnit, and Postman."], career: "Essential for QA engineers, ensuring product quality and reliability in IT projects." },
  ];

  // 🔍 Filter courses based on search
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">All Courses</h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Explore our wide range of professional training courses designed to
            advance your career.
          </p>

          {/* 🔍 Search Bar */}
          <div className="flex justify-center mb-12">
            <input
              type="text"
              placeholder="Search for courses (e.g., AI, Salesforce)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <CourseCard
                  key={idx}
                  title={course.title}
                  outcomes={course.outcomes}
                  career={course.career}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No courses found. Try another keyword.
              </p>
            )}
          </div>
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default CoursesPage;