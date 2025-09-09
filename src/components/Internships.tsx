"use client";
import Image from "next/image";

const Internships = () => {
  return (
    <section className="bg-gray-50 py-20 px-6" id="internships">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Internship Opportunities
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Gain valuable real-world experience with SkillBee internships. Apply
            now and take the first step towards your career growth.
          </p>

          <a
            href="https://forms.gle/E2iUcxUDsj7vXtN86"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
        </div>

        {/* Right QR Code */}
        <div className="flex justify-center">
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <Image
              src="/internship-qr.png"
              alt="Internship Application QR Code"
              width={200}
              height={200}
            />
            <p className="text-gray-600 text-sm mt-3">
              Scan to Apply via QR Code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;