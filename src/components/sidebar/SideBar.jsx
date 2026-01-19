import { NavLink } from "react-router-dom";

const linkBase =
  "block w-full px-4 py-2 rounded-md transition-colors duration-200";

const SideBar = () => {
  return (
    <aside className="w-[210px] bg-[#212327] text-white p-3">
      <ul className="space-y-1">
        <NavLink
          to="/dashboard/new-patient"
          end
          className={({ isActive }) =>
            `${linkBase} ${
              isActive ? "bg-[#2A2C30] text-white" : "hover:bg-[#2A2C30]"
            }`
          }
        >
          New Patient
        </NavLink>

        <NavLink
          to="/dashboard/print-token"
          end
          className={({ isActive }) =>
            `${linkBase} ${
              isActive ? "bg-[#2A2C30] text-white" : "hover:bg-[#2A2C30]"
            }`
          }
        >
          Print Token
        </NavLink>

        <NavLink
          to="/dashboard/status"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive ? "bg-[#2A2C30] text-white" : "hover:bg-[#2A2C30]"
            }`
          }
        >
          Current Status
        </NavLink>

        <NavLink
          to="/dashboard/doctor-call"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive ? "bg-[#2A2C30] text-white" : "hover:bg-[#2A2C30]"
            }`
          }
        >
          Doctor Call
        </NavLink>

        <NavLink
          to="/dashboard/add-doctor"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive ? "bg-[#2A2C30] text-white" : "hover:bg-[#2A2C30]"
            }`
          }
        >
          Add Doctor
        </NavLink>

        <NavLink
          to="/dashboard/add-room"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive ? "bg-[#2A2C30] text-white" : "hover:bg-[#2A2C30]"
            }`
          }
        >
          Add Room
        </NavLink>

        <NavLink
          to="/dashboard/room-mapping"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive ? "bg-[#2A2C30] text-white" : "hover:bg-[#2A2C30]"
            }`
          }
        >
          Room Mapping
        </NavLink>
      </ul>
    </aside>
  );
};

export default SideBar;
