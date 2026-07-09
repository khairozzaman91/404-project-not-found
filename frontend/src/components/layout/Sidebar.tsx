import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <aside className="flex h-screen w-60 flex-col border-r bg-white">

      {/* Logo */}
      <div className="border-b p-5">
        <h1 className="text-xl font-bold text-slate-800">
          Welcome Dashboard 
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `mb-2 block rounded-lg px-4 py-3 font-medium transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`
          }
        >
          📋 Task Board
        </NavLink>

        <NavLink
          to="/annotate"
          className={({ isActive }) =>
            `block rounded-lg px-4 py-3 font-medium transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`
          }
        >
          🖍 Annotation
        </NavLink>

      </nav>

      {/* Logout */}
      <div className="border-t p-4">
        <button
          onClick={handleLogout}
          className="w-full rounded-lg bg-red-500 px-4 py-3 font-medium text-white transition hover:bg-red-600"
        >
          🚪 Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;