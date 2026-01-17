import { useState, useEffect } from "react";

const CurruntState = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Current State</h1>
      {doctors.length === 0 ? (
        <p>Loading doctors...</p>
      ) : (
        <div className="space-y-6">
          {doctors.map((doc) => {
            const current = doc.queue[0] || "None";
            const nextTwo = doc.queue.slice(1, 3);

            return (
              <div
                key={doc.id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="font-semibold text-lg">{doc.name}</h2>
                    <p className="text-gray-600">Room: {doc.room_no}</p>
                  </div>
                  <p className="font-bold text-gray-700">
                    Waiting: {doc.queue.length - 1} patient(s)
                  </p>
                </div>

                {/* Patient Boxes */}
                <div className="flex gap-4">
                  {/* Current Patient */}
                  <div className="flex-1 bg-blue-100 p-3 rounded shadow text-center">
                    <p className="text-sm text-gray-500">Being Treated</p>
                    <p className="font-semibold mt-1">{current}</p>
                  </div>

                  {/* Next 2 Patients */}
                  {nextTwo.map((patient, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-yellow-100 p-3 rounded shadow text-center"
                    >
                      <p className="text-sm text-gray-500">Next in Line</p>
                      <p className="font-semibold mt-1">{patient}</p>
                    </div>
                  ))}

                  {/* If no next patients */}
                  {nextTwo.length === 0 && (
                    <div className="flex-1 bg-gray-100 p-3 rounded shadow text-center">
                      <p className="text-sm text-gray-500">Next in Line</p>
                      <p className="font-semibold mt-1">None</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CurruntState;
