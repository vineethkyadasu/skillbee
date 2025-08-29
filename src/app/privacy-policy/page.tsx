"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-12">
          SkillBee (a trading name of{" "}
          <span className="font-semibold">
            CRYSTAL GLOBAL SERVICES LTD.
          </span>
          , registered in England & Wales, Company No. 16244546) is committed to
          protecting your privacy. This policy explains how we collect, use, and
          safeguard your personal data in compliance with the UK GDPR and Data
          Protection Act 2018.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Personal details you provide (Name, Email, Phone, CV, etc.)</li>
              <li>Usage data such as cookies and analytics</li>
              <li>Direct communications like enquiries or support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To process internship or course applications</li>
              <li>To respond to enquiries and support requests</li>
              <li>To send updates about our services (if opted in)</li>
              <li>To improve our website and offerings via analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. Legal Basis for Processing
            </h2>
            <p className="text-gray-700">We process your data under:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Consent</strong> – when you’ve given clear permission
              </li>
              <li>
                <strong>Legitimate Interests</strong> – to respond to your
                enquiries and deliver services
              </li>
              <li>
                <strong>Legal Obligations</strong> – to comply with UK laws
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. Data Retention
            </h2>
            <p className="text-gray-700">
              We only retain your personal data as long as necessary:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>CVs and internship applications: typically stored for 6 months</li>
              <li>Longer storage may occur when legally required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. How We Share Your Data
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                We <strong>never sell</strong> your personal data
              </li>
              <li>
                We may share with trusted service providers (hosting, email,
                analytics)
              </li>
              <li>All partners comply with GDPR standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              6. How We Protect Your Data
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Secure servers and encryption</li>
              <li>Restricted access and monitoring</li>
              <li>Regular checks to prevent unauthorised access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Right to access, rectify, or erase your data</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent anytime</li>
              <li>
                Right to lodge a complaint with the ICO (
                <Link
                  href="https://ico.org.uk"
                  className="text-blue-500 hover:underline"
                >
                  www.ico.org.uk
                </Link>
                )
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              8. Cookies
            </h2>
            <p className="text-gray-700">
              Our website uses cookies to improve your browsing experience and
              analyse traffic. You can disable cookies in your browser, but some
              features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              9. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <p className="text-gray-800 mt-2">
              📧{" "}
              <Link
                href="mailto:info@skillbee.co.uk"
                className="text-blue-500 hover:underline"
              >
                info@skillbee.co.uk
              </Link>
              <br />
              📍 CRYSTAL GLOBAL SERVICES LTD., England & Wales, Company No.
              16244546
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}