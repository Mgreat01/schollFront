import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import RegisterSchool from "./pages/RegisterSchool";
import Dashboard from "./pages/Dashboard";
import UsersManagement from "./pages/UsersManagement";
import ClassesManagement from "./pages/ClassesManagement";
import StudentsManagement from "./pages/StudentsManagement";
import Profile from "./pages/Profile";
import Forbidden from "./pages/Forbidden";
import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex">
      {user && <Sidebar />}
      <div className="flex-1">
        {user && <Header />}
        <main className="p-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register-school" element={<RegisterSchool />} />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UsersManagement />
                </PrivateRoute>
              }
            />
            <Route
              path="/classes"
              element={
                <PrivateRoute>
                  <ClassesManagement />
                </PrivateRoute>
              }
            />
            <Route
              path="/students"
              element={
                <PrivateRoute>
                  <StudentsManagement />
                </PrivateRoute>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forbidden" element={<Forbidden />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
