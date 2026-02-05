function BlogCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Stay Updated with Latest Blogs 🚀
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Subscribe to receive expert insights, career tips, and the latest IT trends
          straight to your inbox.
        </p>

        {/* FORM */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-stretch">

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
              shadow-lg
              hover:bg-yellow-500
              hover:scale-105
              transition
            "
          >
            Subscribe Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default BlogCTA;
