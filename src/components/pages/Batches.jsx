import React, { useState, useEffect } from "react";
import BatchNavbar from "./Batch-content/BatchNavbar";
import FindMyBatch from "./Batch-content/FindMyBatch.jsx";
import BatchEnrollModal from "../BatchEnrollModal.jsx";

const API_BASE = "/api";

function UpcomingBatches() {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBatch, setSelectedBatch] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/batches`)
      .then((res) => res.json())
      .then((data) => setBatches(Array.isArray(data) ? data : []))
      .catch(() => setBatches([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <BatchNavbar />

      <section className="bg-gradient-to-b from-gray-100 to-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Upcoming Batches
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              Choose the right batch and start your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <p className="col-span-full text-center text-white">Loading batches...</p>
            ) : (
            batches.map((batch, index) => (
              <div
                key={batch.id || index}
                className="
                  bg-white rounded-2xl p-6
                  shadow-lg hover:shadow-2xl
                  transition duration-300
                "
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {batch.course}
                </h3>

                <div className="text-sm text-gray-600 space-y-1">
                  <p><b>Mode:</b> {batch.mode}</p>
                  <p><b>Start:</b> {batch.startDate}</p>
                  <p><b>Duration:</b> {batch.duration}</p>
                  <p><b>Timing:</b> {batch.timing}</p>
                </div>

                <button onClick={() => setSelectedBatch(batch)} className="mt-5 w-full py-2 rounded-xl bg-yellow-400 font-semibold hover:bg-yellow-500 transition">
                  Enroll Now
                </button>
              </div>
            ))
            )}
          </div>
        </div>
      </section>

      <FindMyBatch />
      {selectedBatch && <BatchEnrollModal batch={selectedBatch} onClose={() => setSelectedBatch(null)} />}
    </>
  );
}

export default UpcomingBatches;
