function FindMyBatch() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Can’t Find Your Batch?
        </h2>

        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Search by course name or contact our support team
        </p>

        {/* Search Box */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search your course..."
            className="
              w-full sm:w-96 px-4 py-3
              border rounded-xl focus:outline-none
              focus:ring-2 focus:ring-yellow-400
            "
          />

          <button
            className="
              px-6 py-3 rounded-xl
              bg-black text-white font-semibold
              hover:bg-gray-800 transition
            "
          >
            Search
          </button>
        </div>

        {/* Help Text */}
        <p className="mt-4 text-sm text-gray-500">
          Or call us at <b>+91 9015 887 887</b>
        </p>
      </div>
    </section>
  );
}

export default FindMyBatch;
