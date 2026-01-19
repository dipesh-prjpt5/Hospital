import { createContext, useContext, useState } from "react";
import {
  departments,
  doctors,
  rooms,
  roomMappings,
  initialTokens,
} from "../data/initialData";

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  const [tokens, setTokens] = useState(initialTokens);
  const [doctorsList, setDoctorsList] = useState(doctors);
  const [roomsList, setRoomsList] = useState(rooms);
  const [roomMap, setRoomMap] = useState(roomMappings);

  const lastToken = tokens[tokens.length - 1];

  /* ---------------- TOKEN GENERATION ---------------- */
  const generateToken = ({ name, mobile }, doctorId) => {
    const doctor = doctors.find((d) => d.id === doctorId);
    if (!doctor) return;

    const department = departments.find(
      (dep) => dep.id === doctor.departmentId,
    );

    const doctorTokens = tokens.filter((t) => t.doctorId === doctorId);

    const nextNumber = doctorTokens.length + 1;

    const newToken = {
      id: Date.now(),
      tokenNo: `${department.code}-${String(nextNumber).padStart(2, "0")}`,
      patientName: name,
      mobile,
      doctorId,
      status: "pending",
      createdAt: new Date(),
    };

    setTokens((prev) => [...prev, newToken]);
  };

  /* ---------------- CALL NEXT TOKEN ---------------- */
  const callNextToken = (doctorId) => {
    setTokens((prev) => {
      const updated = [...prev];

      const current = updated.find(
        (t) => t.doctorId === doctorId && t.status === "current",
      );
      if (current) current.status = "done";

      const next = updated.find(
        (t) => t.doctorId === doctorId && t.status === "pending",
      );
      if (next) next.status = "current";

      return updated;
    });
  };

  const addDoctor = ({ name, email, departmentId }) => {
    const newDoctor = {
      id: Date.now(),
      name,
      email,
      departmentId: Number(departmentId),
    };

    setDoctorsList((prev) => [...prev, newDoctor]);
  };

  const addRoom = (roomNumber) => {
    if (!roomNumber) return;

    const newRoom = {
      id: Date.now(),
      roomNumber,
    };

    setRoomsList((prev) => [...prev, newRoom]);
  };

  const mapRoomToDoctor = (doctorId, roomId) => {
    setRoomMap((prev) => {
      const existing = prev.find((m) => m.doctorId === doctorId);

      if (existing) {
        return prev.map((m) =>
          m.doctorId === doctorId ? { ...m, roomId } : m,
        );
      }

      return [...prev, { doctorId, roomId }];
    });
  };

  return (
    <HospitalContext.Provider
      value={{
        departments,
        doctors: doctorsList,
        rooms: roomsList,
        roomMappings: roomMap,
        tokens,
        lastToken,
        generateToken,
        callNextToken,
        addDoctor,
        addRoom,
        mapRoomToDoctor,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => useContext(HospitalContext);
