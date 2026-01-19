import { Routes, Route } from "react-router-dom";
import DashBoardLayout from "./layout/DashBoardLayout";

import CurrentStatus from "./pages/CurrentStatus";
import DoctorCall from "./pages/DoctorCall";
import AddDoctor from "./pages/AddDoctor";
import AddRoom from "./pages/AddRoom";
import RoomMapping from "./pages/RoomsMapping";
import NewPatient from "./pages/NewPatient";
import PrintToken from "./pages/PrintToken";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoardLayout />}>
        <Route path="new-patient" element={<NewPatient />} />
        <Route path="print-token" element={<PrintToken />} />
        <Route path="status" element={<CurrentStatus />} />
        <Route path="doctor-call" element={<DoctorCall />} />
        <Route path="add-doctor" element={<AddDoctor />} />
        <Route path="add-room" element={<AddRoom />} />
        <Route path="room-mapping" element={<RoomMapping />} />
      </Route>
    </Routes>
  );
}

export default App;
