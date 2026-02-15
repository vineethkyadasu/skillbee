"use client";
import React, { useState } from "react";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CoursesPage = () => {
  const [search, setSearch] = useState("");

  const courses = [
    {
      title: "Generative AI (Gen AI)",
      price: "£499",
      outcomes: [
        "Understand large language models, prompt engineering, and AI content creation.",
        "Apply AI tools for automation, analytics, and innovation.",
      ],
      career:
        "Equips learners for cutting-edge AI integration in business workflows, boosting efficiency and creativity.",
      image: "/courses/genai.jpg",
    },
    {
      title: "Power BI + SQL",
      price: "£399",
      outcomes: [
        "Create interactive dashboards and reports in Power BI.",
        "Write optimized SQL queries for data extraction.",
      ],
      career:
        "Key skill set for BI developers, analysts, and data storytellers in virtually every industry.",
      image: "/courses/powerbi-sql.jpg",
    },
    {
      title: "AWS Data Engineering",
      price: "£699",
      outcomes: [
        "Design and manage data pipelines using AWS services like Glue, Redshift, and Athena.",
        "Implement scalable analytics solutions.",
      ],
      career: "Positions learners for roles in cloud data engineering on AWS.",
      image: "/courses/aws-de.jpg",
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
    {
      title: "Informatica PowerCenter",
      price: "£499",
      outcomes: [
        "Master ETL workflows, transformations, and performance tuning.",
        "Build enterprise-level data integration pipelines.",
      ],
      career:
        "Prepares learners for data engineering and analytics roles in large-scale enterprises that use Informatica.",
      image: "/courses/informatica.jpg",
    },
    {
      title: "SAP SuccessFactors",
      price: "£699",
      outcomes: [
        "Gain expertise in SAP's cloud-based HR and talent management system.",
        "Learn configuration, employee lifecycle management, and reporting.",
      ],
      career:
        "Ideal for HRIS specialists and SAP consultants, enabling high-value HR digital transformation projects.",
      image: "/courses/successfactors.jpg",
    },
    {
      title: "Snowflake + DBT + ADF",
      price: "£499",
      outcomes: [
        "Build scalable data warehouses in Snowflake.",
        "Use DBT for transformation and Azure Data Factory for orchestration.",
      ],
      career:
        "In-demand in cloud data engineering, enabling streamlined data pipelines across Azure and Snowflake ecosystems.",
      image: "/courses/snowflake-dbt-adf.jpg",
    },
    {
      title: "AWS + DevOps",
      price: "£499",
      outcomes: [
        "Implement CI/CD pipelines, container orchestration, and infrastructure-as-code in AWS.",
        "Automate deployment workflows.",
      ],
      career: "In demand for cloud engineers and DevOps specialists.",
      image: "/courses/aws-devops.jpg",
    },
    {
      title: "AI & Machine Learning Training",
      price: "£599",
      outcomes: [
        "Build and train predictive models.",
        "Apply supervised, unsupervised, and deep learning techniques.",
      ],
      career:
        "Opens career paths in AI engineering, data science, and analytics.",
      image: "/courses/ai-ml.jpg",
    },
    {
      title: "SAP S/4HANA FICO",
      price: "£499",
      outcomes: [
        "Configure SAP Finance and Controlling modules.",
        "Run reports and manage financial processes in S/4HANA.",
      ],
      career: "Highly valued in finance and ERP consultancy roles.",
      image: "/courses/sap-fico.jpg",
    },
    {
      title: "Salesforce Admin",
      price: "£499",
      outcomes: [
        "Manage Salesforce users, permissions, and workflows.",
        "Create reports and dashboards.",
      ],
      career: "Essential entry point for Salesforce ecosystem careers.",
      image: "/courses/salesforce-admin.jpg",
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
      title: "Cyber Security",
      price: "£499",
      outcomes: [
        "Learn network security, threat detection, and incident response.",
        "Master cybersecurity tools and compliance frameworks.",
      ],
      career:
        "Qualifies learners for security analyst, penetration tester, or SOC roles.",
      image: "/courses/cyber-security.jpg",
    },
    {
      title: "Tableau + SQL",
      price: "£399",
      outcomes: [
        "Build advanced visualizations in Tableau.",
        "Write SQL queries for analytics.",
      ],
      career:
        "In-demand skills for data visualization and BI reporting jobs.",
      image: "/courses/tableau-sql.jpg",
    },
    {
      title: "Python Full Stack Development",
      price: "£399",
      outcomes: [
        "Develop front-end and back-end applications using Python, Django/Flask, and JS frameworks.",
        "Deploy fullstack solutions to production.",
      ],
      career:
        "Versatile skill set for both startup and enterprise development teams.",
      image: "/courses/python-fullstack.jpg",
    },
    {
      title: "Software Testing (Manual + Automation)",
      price: "£599",
      outcomes: [
        "Learn test case design, execution, and defect reporting.",
        "Use automation tools like Selenium, JUnit, and Postman.",
      ],
      career:
        "Essential for QA engineers, ensuring product quality and reliability in IT projects.",
      image: "/courses/software-testing.jpg",
    },
    {
      title: "Data Science",
      price: "£999",
      outcomes: [
        "Master statistical analysis, machine learning, and data visualization techniques.",
        "Work with real-world datasets to build predictive models and derive actionable insights.",
      ],
      career:
        "Opens doors to data scientist, ML engineer, and analytics lead positions across industries.",
      image: "/courses/ai-ml.jpg",
    },
    {
      title: "Data Analysis",
      price: "£599",
      outcomes: [
        "Learn data cleaning, transformation, and exploratory analysis using Python and Excel.",
        "Create impactful reports and dashboards for business decision-making.",
      ],
      career:
        "Ideal for aspiring data analysts, business analysts, and reporting specialists.",
      image: "/courses/powerbi-sql.jpg",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">All Courses</h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Explore our wide range of professional training courses designed to
            advance your career.
          </p>

          {/* Search */}
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
                  price={course.price}
                  image={course.image}
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
      <Footer />
    </div>
  );
};

export default CoursesPage;