import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoardLayout from "./dashboard/DashBoardLayout";

// Pages
import Home from "./pages/Home";
import PrintToken from "./pages/PrintToken";
import TokenDetails from "./pages/TokenDetails";
import RoomsMapping from "./pages/RoomsMapping";
import AddDoctor from "./pages/AddDoctor"; // Create these pages
import AddRoom from "./pages/AddRoom";
import CallToken from "./pages/CallToken";
import CurruntState from "./pages/CurruntState";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard Layout */}
        <Route path="/" element={<DashBoardLayout />}>
          <Route index element={<Home />} />
          <Route path="print-token" element={<PrintToken />} />
          <Route path="token-details" element={<TokenDetails />} />
          <Route path="rooms-mapping" element={<RoomsMapping />} />
          <Route path="add-doctor" element={<AddDoctor />} />
          <Route path="add-room" element={<AddRoom />} />
          <Route path="call-token" element={<CallToken />} />
          <Route path="currunt-state" element={<CurruntState />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
