import { useState } from "react";
import { useHospital } from "../context/HospitalContext";

const RoomMapping = () => {
  const { doctors, rooms, roomMappings, mapRoomToDoctor } = useHospital();

  const [doctorId, setDoctorId] = useState("");
  const [roomId, setRoomId] = useState("");

  const existingMapping = roomMappings.find(
    (m) => m.doctorId === Number(doctorId),
  );

  const handleSave = () => {
    if (!doctorId || !roomId) return;
    mapRoomToDoctor(Number(doctorId), Number(roomId));
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#25262C] rounded-xl p-8 w-full max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Room Mapping</h1>
          <p className="text-gray-400 text-sm">
            Assign consultation rooms to doctors
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#292B31] rounded-xl p-6 shadow-lg space-y-6">
          {/* Select Doctor */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Doctor</label>
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

          {/* Select Room */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Room</label>
            <select
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B]"
            >
              <option value="">Select room</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  Room {room.roomNumber}
                </option>
              ))}
            </select>
          </div>

          {/* Existing Mapping */}
          {doctorId && existingMapping && (
            <div className="text-sm text-gray-400">
              Currently assigned to room{" "}
              <span className="text-white font-medium">
                {rooms.find((r) => r.id === existingMapping.roomId)?.roomNumber}
              </span>
            </div>
          )}

          {/* Action */}
          <div className="flex justify-end pt-4 border-t border-[#3A3F4B]">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-2 rounded-lg shadow"
            >
              Save Mapping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomMapping;
