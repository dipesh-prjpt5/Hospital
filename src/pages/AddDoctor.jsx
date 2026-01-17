import React, { useState } from "react";

const AddDoctor = ({ addDoctorCallback }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !specialty) {
      alert("Please fill in all fields");
      return;
    }

    const newDoctor = {
      id: Date.now(), // unique id
      name,
      email,
      specialty,
    };

    if (addDoctorCallback) addDoctorCallback(newDoctor);

    // Reset form
    setName("");
    setEmail("");
    setSpecialty("");
    alert("Doctor added successfully!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6">Add New Doctor</h1>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Doctor Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dr. John Doe"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="doctor@example.com"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">Specialty</label>
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            placeholder="Cardiologist"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
