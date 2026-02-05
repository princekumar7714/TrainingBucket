import React from "react";
import bg from "../assets/footer-img/i-thum1.jpg";

function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.85)
          ),
          url(${bg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* MAIN CONTENT */}
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-10
          py-12 sm:py-16 lg:py-20
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10 lg:gap-14
        "
      >
        {/* TRENDING COURSES */}
        <div>
          <h2 className="text-yellow-400 font-bold text-xl sm:text-2xl mb-4 sm:mb-5">
            Trending Courses
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-200">
            {[
              "CCNA Certification",
              "CCNP Certification",
              "Python Certification",
              "Java",
              "Machine Learning with Python",
              "RedHat Certification",
              "DevOps Certification",
              "AWS Certification",
              "Data Science",
              "Digital Marketing",
              "Django Certification",
              "Azure Certification",
              "Ethical Hacking",
              "Power BI",
              "Tableau",
              "Alteryx",
            ].map((course, index) => (
              <li
                key={index}
                className="hover:text-yellow-400 transition cursor-pointer"
              >
                • {course}
              </li>
            ))}
          </ul>
        </div>

        {/* TRAINING BUCKET */}
        <div>
          <h2 className="text-yellow-400 font-bold text-xl sm:text-2xl mb-4 sm:mb-5">
            Training Bucket
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-200">
            {[
              "About Us",
              "Corporate Training",
              "Venue",
              "Blog",
              "Campus Champs",
              "Become an Instructor",
              "View Latest Jobs",
              "Book Demo",
              "Request Certificate",
              "Verify Certificate",
              "Fee Payment",
              "Contact Us",
              "Our Mission",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-yellow-400 transition cursor-pointer"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h2 className="text-yellow-400 font-bold text-xl sm:text-2xl mb-4 sm:mb-5">
            Resources
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-200">
            {[
              "Feedback",
              "Support",
              "Career",
              "Sitemap",
              "Disclaimer",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-yellow-400 transition cursor-pointer"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-yellow-400 font-bold text-xl sm:text-2xl mb-4 sm:mb-5">
            Contact Us
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-gray-200">
            <p className="font-semibold text-white">
              📞 +91 9015 887 887
            </p>
            <p className="hover:text-yellow-400 transition cursor-pointer break-all">
              ✉ support@trainingbasket.in
            </p>
            <p className="leading-relaxed">
              Training Bucket is a division of <br />
              <span className="font-semibold text-white">
                Blogic Software Technology Pvt. Ltd.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 py-4 px-4 text-center text-xs sm:text-sm text-gray-300">
        © {new Date().getFullYear()} Training Bucket. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
