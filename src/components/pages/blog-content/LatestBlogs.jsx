import blog1 from "../../../assets/blog-img/blog1.webp";
import blog2 from "../../../assets/blog-img/blog2.webp";
import blog3 from "../../../assets/blog-img/blog3.webp";



function LatestBlogs() {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title: "How IT Certifications Boost Your Career",
      desc: "Discover why IT certifications are essential for career growth and better opportunities.",
    },
    {
      id: 2,
      image: blog2,
      title: "Why Cloud Skills Are in High Demand",
      desc: "Cloud computing is shaping the future of IT. Learn why companies are hiring cloud experts.",
    },
    {
      id: 3,
      image: blog3,
      title: "DevOps Roadmap for Freshers",
      desc: "A beginner-friendly guide to start your DevOps journey with the right skills.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-10 text-center">
          Latest Blog Posts
        </h2>

        {/* BLOG CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* IMAGE */}
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="font-bold text-lg">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {blog.desc}
                </p>

                <button className="mt-4 text-blue-500 font-bold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      {/* CTA / SUBSCRIBE SECTION */}
<div className="mt-16 bg-gradient-to-r from-blue-900 to-black rounded-3xl p-8 sm:p-12 text-center text-white">
  <h3 className="text-xl sm:text-2xl font-bold">
    Don’t Miss Our Latest Updates 🚀
  </h3>

  <p className="text-gray-300 mt-3 max-w-xl mx-auto">
    Subscribe to get the latest blogs, career tips & IT trends directly in your inbox.
  </p>

  {/* FORM */}
  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-stretch">

    {/* INPUT */}
    <input
      type="email"
      placeholder="Enter your email address"
      className="
        w-full sm:w-96
        px-5 py-4
        rounded-xl
        bg-white text-gray-900
        placeholder-gray-400
        border border-gray-300
        shadow-lg
        focus:outline-none
        focus:ring-4 focus:ring-blue-400/40
      "
    />

    {/* BUTTON */}
    <button
      className="
        px-8 py-4
        rounded-xl
        bg-yellow-400 text-black
        font-bold
        hover:bg-yellow-500
        shadow-lg
        transition
      "
    >
      Subscribe Now
    </button>
  </div>
</div>


      </div>
    </section>
  );
}

export default LatestBlogs;
