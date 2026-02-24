import { useState } from "react";

const API_BASE = "/api";

function FindMyBatch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e?.preventDefault();
    setLoading(true);
    setResults(null);
    try {
      const url = query.trim()
        ? `${API_BASE}/batches/search?q=${encodeURIComponent(query.trim())}`
        : `${API_BASE}/batches`;
      const res = await fetch(url);
      const data = await res.json();
      setResults(Array.isArray(data) ? data : []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Can't Find Your Batch?
        </h2>

        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Search by course name or contact our support team
        </p>

        <form onSubmit={handleSearch} className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search your course..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-96 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition disabled:opacity-70"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {results && (
          <div className="mt-8 text-left max-w-2xl mx-auto">
            {results.length === 0 ? (
              <p className="text-gray-500">No batches found. Try another search or call us.</p>
            ) : (
              <ul className="space-y-3">
                {results.map((batch) => (
                  <li key={batch.id || batch.course} className="bg-gray-50 p-4 rounded-xl">
                    <span className="font-semibold">{batch.course}</span>
                    <span className="text-gray-600 text-sm block mt-1">
                      {batch.mode} · {batch.startDate} · {batch.duration}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <p className="mt-4 text-sm text-gray-500">
          Or call us at <b>+91 9015 887 887</b>
        </p>
      </div>
    </section>
  );
}

export default FindMyBatch;
