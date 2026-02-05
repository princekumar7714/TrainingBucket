function BlogCategories() {
  const categories = [
    "AWS & Cloud",
    "DevOps",
    "Data Science",
    "Python",
    "Cyber Security",
    "Career Guidance",
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-2xl font-bold text-blue-500 mb-6">
          Popular Topics
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="px-6 py-2 border rounded-full text-sm cursor-pointer
              hover:bg-blue-500 hover:text-white transition"
            >
              {cat}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogCategories;
