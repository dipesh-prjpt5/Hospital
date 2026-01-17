import React, { useState } from "react";

const fakeDoctor = {
  id: 1,
  name: "Dr. Anil Gandhi",
  room_no: 101,
  queue: ["Patient A", "Patient B", "Patient C", "Patient D", "Patient E"],
};

const CallToken = () => {
  const [doctor, setDoctor] = useState(fakeDoctor);

  const treatPatient = () => {
    if (doctor.queue.length === 0) return;
    setDoctor((prev) => ({ ...prev, queue: prev.queue.slice(1) }));
  };

  const skipPatient = () => {
    if (doctor.queue.length === 0) return;
    const [first, ...rest] = doctor.queue;
    setDoctor((prev) => ({ ...prev, queue: [...rest, first] }));
  };

  const announceNext = () => {
    if (doctor.queue.length > 1) {
      alert(`Next patient is ${doctor.queue[1]}`);
    } else {
      alert("No more patients waiting!");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Call Token - {doctor.name}</h1>
      <p className="mb-6 text-gray-700 text-lg">Room: {doctor.room_no}</p>

      {/* Queue Boxes */}
      <div className="flex gap-6 flex-wrap mb-6">
        {doctor.queue.map((patient, idx) => (
          <div
            key={idx}
            className={`p-6 rounded shadow-lg w-48 flex flex-col items-center
              ${idx === 0 ? "bg-blue-300 scale-105" : "bg-yellow-200"}
            `}
          >
            <p className="font-bold text-lg">{patient}</p>
            {idx === 0 && (
              <div className="flex gap-3 flex-col mt-4">
                <button
                  onClick={treatPatient}
                  className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition font-semibold"
                >
                  Treated
                </button>
                <button
                  onClick={skipPatient}
                  className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-700 transition font-semibold"
                >
                  Skip
                </button>
                <button
                  onClick={announceNext}
                  className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition font-semibold"
                >
                  Announce
                </button>
              </div>
            )}
          </div>
        ))}
        {doctor.queue.length === 0 && (
          <p className="text-gray-500 font-semibold text-lg">
            No patients in queue
          </p>
        )}
      </div>
    </div>
  );
};

export default CallToken;
