import NavBar from "../components/navbar/NavBar";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <main
          className="flex-1 p-6 bg-[#3A4050] overflow-y-auto"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
