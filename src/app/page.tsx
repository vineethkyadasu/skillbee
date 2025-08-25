import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

export default function Home() {
  const featuredCourses = [
  {
    title: "Generative AI (Gen AI)",
    outcomes: [
      "Understand large language models, prompt engineering, and AI content creation.",
      "Apply AI tools for automation, analytics, and innovation."
    ],
    career: "AI Engineer, Machine Learning Specialist", // ✅ Added
    whatsappMessage: "Hi SkillBee, I’m interested in the Generative AI course. Please share more details."
  },
  {
    title: "Power BI + SQL",
    outcomes: [
      "Create interactive dashboards and reports in Power BI.",
      "Write optimized SQL queries for data extraction."
    ],
    career: "Business Analyst, Data Analyst", // ✅ Added
    whatsappMessage: "Hi SkillBee, I’m interested in the Power BI + SQL course. Please share more details."
  },
  {
    title: "AWS Data Engineering",
    outcomes: [
      "Design and manage data pipelines using AWS services.",
      "Implement scalable analytics solutions."
    ],
    career: "Data Engineer, Cloud Engineer", // ✅ Added
    whatsappMessage: "Hi SkillBee, I’m interested in the AWS Data Engineering course. Please share more details."
  }
];

  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section
  className="relative bg-blue-900 text-white text-center py-24 px-4"
  style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
>
  <div className="absolute inset-0 bg-black/50"></div> {/* overlay for better text visibility */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Where Skills Meet Opportunity
    </h1>
    <p className="mb-8 text-lg md:text-xl">
      Gain practical skills and real-world experience with SkillBee programs.
    </p>
    <div className="space-x-4">
      <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded hover:bg-gray-100">
        Enquire Now
      </button>
      <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600">
        Contact via WhatsApp
      </button>
    </div>
  </div>
</section>

        {/* Featured Courses Section */}
<section className="max-w-7xl mx-auto py-20 px-4">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
    Featured Courses
  </h2>
  <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-12">
    Explore our most popular programs designed to boost your skills and career opportunities.
  </p>
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
        <div className="flex items-center justify-center gap-3">
          <img
            src="/student1.jpg"
            alt="Student"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-semibold text-gray-900">Aditi Sharma</h4>
            <p className="text-sm text-gray-600">Digital Marketer at Zomato</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
        <p className="text-gray-700 italic mb-6">
          “The Data Analytics course gave me real skills that I applied in my job. Highly recommend SkillBee for career growth.”
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src="/student2.jpg"
            alt="Student"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-semibold text-gray-900">Rohan Verma</h4>
            <p className="text-sm text-gray-600">Business Analyst at TCS</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
        <p className="text-gray-700 italic mb-6">
          “The certification added great value to my resume. I was able to switch to a better company with SkillBee’s help.”
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src="/student3.jpg"
            alt="Student"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-semibold text-gray-900">Sneha Patel</h4>
            <p className="text-sm text-gray-600">HR Specialist at Infosys</p>
          </div>
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