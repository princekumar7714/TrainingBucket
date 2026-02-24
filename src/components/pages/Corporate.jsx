import React, { useState } from "react";
import CorporateEnquiryModal from "../CorporateEnquiryModal.jsx";

function Corporate() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Corporate Training Programs
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Empowering organizations with industry-ready skills to accelerate
          performance, productivity, and growth.
        </p>
        <button onClick={() => setShowEnquiryForm(true)} className="mt-8 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition">
          Request Training Proposal
        </button>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Corporate Training?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Customized training programs as per business goals",
            "Industry-experienced trainers with real-world exposure",
            "Flexible delivery: Online, Onsite & Hybrid",
            "Hands-on projects & practical learning approach",
            "Skill assessment & performance tracking",
            "Industry-recognized certification"
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRAINING SOLUTIONS */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Corporate Training Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <TrainingCard
            title="Technology Training"
            items={[
              "Full Stack (MERN / MEAN)",
              "React & Frontend Development",
              "Node.js, Java, Python",
              "Cloud (AWS, Azure)",
              "DevOps & CI/CD"
            ]}
          />
          <TrainingCard
            title="Data & Analytics"
            items={[
              "Data Analytics",
              "Business Intelligence",
              "Power BI & Tableau",
              "Python for Data Science"
            ]}
          />
          <TrainingCard
            title="Software Testing"
            items={[
              "Manual Testing",
              "Automation Testing",
              "Selenium",
              "API Testing"
            ]}
          />
          <TrainingCard
            title="Professional Skills"
            items={[
              "Agile & Scrum",
              "Project Management",
              "Communication Skills",
              "Leadership Training"
            ]}
          />
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Training Methodology
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "Skill Gap Analysis",
            "Customized Curriculum Design",
            "Instructor-Led Interactive Sessions",
            "Hands-on Labs & Live Projects",
            "Assessments & Feedback",
            "Post-Training Support"
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold">{index + 1}. {step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERY MODES */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">
          Training Delivery Modes
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <ModeCard title="Online Live Training" />
          <ModeCard title="Onsite Corporate Training" />
          <ModeCard title="Hybrid Training Model" />
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Business Benefits
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Faster project delivery",
            "Increased workforce productivity",
            "Reduced hiring & training costs",
            "Improved technology adoption",
            "Job-ready & project-ready teams",
            "Measurable business impact"
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Upskill Your Workforce?
        </h2>
        <p className="mb-8 text-lg">
          Contact us today for a free consultation and customized training plan.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button onClick={() => setShowEnquiryForm(true)} className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition">
            Talk to a Training Expert
          </button>
          <button onClick={() => setShowEnquiryForm(true)} className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-blue-600 transition">
            Schedule Free Demo
          </button>
        </div>
      </section>

      {showEnquiryForm && <CorporateEnquiryModal onClose={() => setShowEnquiryForm(false)} />}
    </div>
  );
}

/* REUSABLE COMPONENTS */

function TrainingCard({ title, items }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function ModeCard({ title }) {
  return (
    <div className="bg-gray-50 px-8 py-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}

export default Corporate;