import { NavLink } from "react-router-dom";

const linkBase =
  "block w-full px-4 py-2 rounded-md transition-colors duration-200";

const SideBar = () => {
  return (
    <aside className="w-[210px] bg-[#363C48] text-white p-3">
      <ul className="space-y-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700"
            }`
          }
        >
          New Token
        </NavLink>

        <NavLink
          to="/print-token"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700"
            }`
          }
        >
          Print Token
        </NavLink>

        <NavLink
          to="/currunt-state"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700"
            }`
          }
        >
          Currunt State
        </NavLink>

        <NavLink
          to="/call-token"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700"
            }`
          }
        >
          Call Token
        </NavLink>

        <NavLink
          to="/add-doctor"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700"
            }`
          }
        >
          Add Doctor
        </NavLink>

        <NavLink
          to="/add-room"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700"
            }`
          }
        >
          Add Room
        </NavLink>

        <NavLink
          to="/rooms-mapping"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700"
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
