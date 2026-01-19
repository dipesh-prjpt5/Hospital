import { useState } from "react";
import { useHospital } from "../context/HospitalContext";

const AddRoom = () => {
  const { addRoom } = useHospital();
  const [roomNumber, setRoomNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roomNumber) return;

    addRoom(roomNumber);
    setRoomNumber("");
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#25262C] rounded-xl p-8 w-full max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Add Room</h1>
          <p className="text-gray-400 text-sm">Create a consultation room</p>
        </div>

        {/* Card */}
        <div className="bg-[#292B31] rounded-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Room Number
              </label>
              <input
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B]"
                placeholder="e.g. 101, OPD-3"
              />
            </div>

            {/* Action */}
            <div className="flex justify-end pt-4 border-t border-[#3A3F4B]">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-2 rounded-lg shadow"
              >
                Add Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
