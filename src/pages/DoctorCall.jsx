import { useState } from "react";
import { useHospital } from "../context/HospitalContext";

const DoctorCall = () => {
  const { doctors, tokens, callNextToken } = useHospital();
  const [doctorId, setDoctorId] = useState("");

  const doctorTokens = tokens.filter((t) => t.doctorId === Number(doctorId));

  const currentToken = doctorTokens.find((t) => t.status === "current");

  const nextToken = doctorTokens.find((t) => t.status === "pending");

  return (
    <div className="flex justify-center">
      <div className="bg-[#25262C] rounded-xl p-8 w-full max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Doctor Call</h1>
          <p className="text-gray-400 text-sm">
            Call and manage patient tokens
          </p>
        </div>

        {/* Doctor Select */}
        <div className="mb-6 max-w-md">
          <label className="block text-sm text-gray-400 mb-1">
            Select Doctor
          </label>
          <select
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B]"
          >
            <option value="">Select doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name}
              </option>
            ))}
          </select>
        </div>

        {!doctorId && (
          <div className="text-gray-400">
            Please select a doctor to continue
          </div>
        )}

        {doctorId && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Token */}
            <div className="bg-[#292B31] rounded-xl p-6">
              <h3 className="text-sm text-gray-400 mb-2">Current Patient</h3>

              {currentToken ? (
                <>
                  <p className="text-3xl font-bold text-green-400">
                    {currentToken.tokenNo}
                  </p>
                  <p className="text-gray-300 mt-1">
                    {currentToken.patientName}
                  </p>
                </>
              ) : (
                <p className="text-gray-500">No patient being examined</p>
              )}
            </div>

            {/* Next Token */}
            <div className="bg-[#292B31] rounded-xl p-6">
              <h3 className="text-sm text-gray-400 mb-2">Next Patient</h3>

              {nextToken ? (
                <>
                  <p className="text-3xl font-bold text-yellow-400">
                    {nextToken.tokenNo}
                  </p>
                  <p className="text-gray-300 mt-1">{nextToken.patientName}</p>

                  <button
                    onClick={() => callNextToken(Number(doctorId))}
                    className="mt-6 w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded-lg shadow"
                  >
                    Call Next Patient
                  </button>
                </>
              ) : (
                <p className="text-gray-500">No pending patients</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCall;
