import React, { useState } from "react";

const fakeDoctors = [
  { id: 1, name: "Dr. Anil Gandhi" },
  { id: 2, name: "Dr. Rekha Sharma" },
  { id: 3, name: "Dr. John Doe" },
];

const fakeRooms = [
  { id: 101, room_no: "101" },
  { id: 102, room_no: "102" },
  { id: 103, room_no: "103" },
];

const RoomsMapping = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDoctor || !selectedRoom) {
      alert("Please select both doctor and room!");
      return;
    }

    alert(
      `Doctor ${selectedDoctor} is mapped to Room ${selectedRoom} successfully!`
    );

    // Reset selections
    setSelectedDoctor("");
    setSelectedRoom("");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6">Map Doctor to Room</h1>

        {/* Doctor Dropdown */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select Doctor</label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Doctor --</option>
            {fakeDoctors.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>
        </div>

        {/* Room Dropdown */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Select Room</label>
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Room --</option>
            {fakeRooms.map((room) => (
              <option key={room.id} value={room.room_no}>
                {room.room_no}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Map Doctor
        </button>
      </form>
    </div>
  );
};

export default RoomsMapping;
