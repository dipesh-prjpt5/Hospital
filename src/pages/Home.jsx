import { useState, useEffect } from "react";

const NewToken = () => {
  const [patientName, setPatientName] = useState("");
  const [mobile, setMobile] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [tokenData, setTokenData] = useState(null);

  // Fetch doctors from backend
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patientName || !mobile || !doctorId) {
      alert("Please fill all fields");
      return;
    }

    // For now, generate a token number automatically
    const tokenNumber = Math.floor(Math.random() * 100) + 1;

    const now = new Date();
    const token = {
      patientName,
      mobile,
      doctorId,
      tokenNumber,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };

    setTokenData(token);
    setSubmitted(true);

    // Reset form
    setPatientName("");
    setMobile("");
    setDoctorId("");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">New Token</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Patient Name</label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter patient name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter mobile number"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Select Doctor</label>
            <select
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">Select a doctor</option>
              {doctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#E83D7A] text-white px-4 py-2 rounded hover:bg-[#d6366b] transition"
          >
            Generate Token
          </button>
        </form>
      ) : (
        <div className="bg-green-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-2">Token Generated!</h3>
          <p>
            <strong>Patient:</strong> {tokenData.patientName}
          </p>
          <p>
            <strong>Doctor:</strong>{" "}
            {doctors.find((d) => d.id === tokenData.doctorId)?.name}
          </p>
          <p>
            <strong>Mobile:</strong> {tokenData.mobile}
          </p>
          <p>
            <strong>Token No:</strong> {tokenData.tokenNumber}
          </p>
          <p>
            <strong>Date:</strong> {tokenData.date}
          </p>
          <p>
            <strong>Time:</strong> {tokenData.time}
          </p>

          <button
            className="mt-4 bg-[#E83D7A] text-white px-4 py-2 rounded hover:bg-[#d6366b] transition"
            onClick={() => setSubmitted(false)}
          >
            Generate Another Token
          </button>
        </div>
      )}
    </div>
  );
};

export default NewToken;
