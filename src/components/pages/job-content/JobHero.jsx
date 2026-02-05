import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function JobHero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-black text-white py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Find Your Dream Job
        </h1>

        <p className="mt-4 text-gray-300 text-sm sm:text-base">
          Explore verified jobs, internships & career opportunities
        </p>

        {/* SEARCH FORM CARD */}
        <div
          className="
            mt-10 max-w-4xl mx-auto
            bg-white/95 text-black
            rounded-3xl shadow-2xl
            p-6 sm:p-8
          "
        >
          <div className="flex flex-col md:flex-row gap-4 items-stretch">

            {/* JOB INPUT */}
            <div className="flex items-center border rounded-xl px-4 py-3 w-full">
              <FaSearch className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* LOCATION INPUT */}
            <div className="flex items-center border rounded-xl px-4 py-3 w-full">
              <FaMapMarkerAlt className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* BUTTON */}
            <button
              className="
                w-full md:w-auto
                px-8 py-3 rounded-xl
                bg-yellow-400 text-black font-bold
                hover:bg-yellow-500
                transition
                shadow-lg
              "
            >
              Search Jobs
            </button>
          </div>

          {/* QUICK TAGS */}
          <div className="mt-5 flex flex-wrap gap-3 justify-center text-sm">
            {["IT Jobs", "Internships", "Freshers", "Remote Jobs"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-yellow-100 cursor-pointer transition"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default JobHero;
