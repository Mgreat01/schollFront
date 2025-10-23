import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { canCreateUser } from "../utils/roleCheck";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <div className="mb-6">
        <div className="text-lg font-bold">SchoolSaaS</div>
        <div className="text-sm text-gray-500">{user?.email}</div>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className="p-2 rounded hover:bg-gray-100">Dashboard</NavLink>
        {(user?.role === "admin" || canCreateUser(user)) && (
          <NavLink to="/users" className="p-2 rounded hover:bg-gray-100">Utilisateurs</NavLink>
        )}
        <NavLink to="/classes" className="p-2 rounded hover:bg-gray-100">Classes</NavLink>
        <NavLink to="/students" className="p-2 rounded hover:bg-gray-100">Élèves</NavLink>
        <NavLink to="/profile" className="p-2 rounded hover:bg-gray-100">Profil</NavLink>
      </nav>
    </aside>
  );
}
