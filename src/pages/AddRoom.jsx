import React, { useState } from "react";

const AddRoom = ({ addRoomCallback }) => {
  const [roomNumber, setRoomNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomNumber) {
      alert("Please enter a room number");
      return;
    }

    const newRoom = {
      id: Date.now(), // unique id
      room_no: roomNumber,
    };

    if (addRoomCallback) addRoomCallback(newRoom);

    setRoomNumber("");
    alert("Room added successfully!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6">Add Room</h1>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">Room Number</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            placeholder="101"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
