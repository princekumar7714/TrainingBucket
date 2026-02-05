import React from "react";
import BatchNavbar from "../pages/Batch-content/BatchNavbar";
import upcomingBatches from "../data/batches.js";
import FindMyBatch from "./Batch-content/FindMyBatch.jsx";

function UpcomingBatches() {
  return (
    <>
      <BatchNavbar />

      {/* MAIN SECTION */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Upcoming Batches
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              Choose the right batch and start your learning journey
            </p>
          </div>

          {/* Batch Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingBatches.map((batch, index) => (
              <div
                key={index}
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

                <button className="mt-5 w-full py-2 rounded-xl bg-yellow-400 font-semibold hover:bg-yellow-500 transition">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <FindMyBatch />
    </>
  );
}

export default UpcomingBatches;
