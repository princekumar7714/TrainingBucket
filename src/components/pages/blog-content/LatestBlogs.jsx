import { useState, useEffect } from "react";
import blog1 from "../../../assets/blog-img/blog1.webp";
import blog2 from "../../../assets/blog-img/blog2.webp";
import blog3 from "../../../assets/blog-img/blog3.webp";

const blogImages = { blog1, blog2, blog3 };
const API_BASE = "/api";

function BlogSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus({});
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ type: "success", text: data.message || "Subscribed!" });
        setEmail("");
      } else {
        setStatus({ type: "error", text: data.error || "Subscription failed." });
      }
    } catch {
      setStatus({ type: "error", text: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-16 bg-gradient-to-r from-blue-900 to-black rounded-3xl p-8 sm:p-12 text-center text-white">
      <h3 className="text-xl sm:text-2xl font-bold">
        Don't Miss Our Latest Updates 🚀
      </h3>
      <p className="text-gray-300 mt-3 max-w-xl mx-auto">
        Subscribe to get the latest blogs, career tips & IT trends directly in your inbox.
      </p>
      <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-stretch">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full sm:w-96 px-5 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/40"
        />
        <button type="submit" disabled={loading} className="px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-500 shadow-lg transition disabled:opacity-70">
          {loading ? "Subscribing..." : "Subscribe Now"}
        </button>
      </form>
      {status.text && (
        <p className={`mt-3 text-sm ${status.type === "success" ? "text-green-300" : "text-red-300"}`}>{status.text}</p>
      )}
    </div>
  );
}

function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(Array.isArray(data) ? data : []))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  const blogsWithImages = blogs.map((b) => ({
    ...b,
    image: blogImages[b.imageKey] || blog1,
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-10 text-center">
          Latest Blog Posts
        </h2>

        {/* BLOG CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(loading ? [] : blogsWithImages).map((blog) => (
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
        <BlogSubscribe />

      </div>
    </section>
  );
}

export default LatestBlogs;
