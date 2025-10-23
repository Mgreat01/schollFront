import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 border-b">
      <div className="text-xl font-semibold">Tableau de bord</div>
      <div className="flex items-center gap-4">
        <div className="text-sm">{user?.name} — <span className="text-xs text-gray-500">{user?.role}</span></div>
        <button className="px-3 py-1 border rounded" onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
