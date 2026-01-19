export const departments = [
  { id: 1, name: "Orthopedic", code: "ORTHO" },
  { id: 2, name: "Cardiology", code: "CARD" },
  { id: 3, name: "Neurology", code: "NEURO" },
  { id: 4, name: "General Medicine", code: "GEN" },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    email: "amit.sharma@clinic.com",
    departmentId: 1,
  },
  {
    id: 2,
    name: "Dr. Neha Verma",
    email: "neha.verma@clinic.com",
    departmentId: 2,
  },
  {
    id: 3,
    name: "Dr. Raj Malhotra",
    email: "raj.malhotra@clinic.com",
    departmentId: 3,
  },
];

export const rooms = [
  { id: 1, roomNumber: "101" },
  { id: 2, roomNumber: "102" },
];

export const roomMappings = [
  { doctorId: 1, roomId: 1 },
  { doctorId: 2, roomId: 2 },
];

export const initialTokens = [
  {
    id: 1,
    tokenNo: "ORTHO-01",
    patientName: "Ramesh Kumar",
    mobile: "9876543210",
    doctorId: 1,
    status: "current",
    createdAt: new Date(),
  },
  {
    id: 2,
    tokenNo: "ORTHO-02",
    patientName: "Suresh Patel",
    mobile: "9876501234",
    doctorId: 1,
    status: "pending",
    createdAt: new Date(),
  },
];
