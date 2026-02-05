const industries = [
  "IT & Software",
  "Networking",
  "Cloud Computing",
  "Data Science",
  "Cyber Security",
  "Digital Marketing",
  "Finance",
  "EdTech",
];

function Industries() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-2xl sm:text-3xl font-bold text-blue-500">
          Industries We Serve
        </h2>

        <p className="text-center mt-3 text-gray-600">
          Partnered with leading organizations across industries
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl shadow-md
                py-6 text-center font-semibold
                hover:shadow-xl transition
              "
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
