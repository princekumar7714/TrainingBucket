function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {[
          { title: "Verified Jobs", desc: "100% genuine & trusted employers" },
          { title: "Career Support", desc: "Resume & interview guidance" },
          { title: "Industry Network", desc: "Strong hiring partnerships" },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg text-center"
          >
            <h3 className="font-bold text-lg text-blue-500">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
