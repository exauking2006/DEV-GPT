import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import useAuth from "../hooks/useAuth";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";
import Admin from "../pages/Admin";
import Rules from "../pages/Rules";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  return children;
};

const RulesGuard = ({ children }) => {
  const accepted = localStorage.getItem("rulesAccepted");

  if (!accepted) return <Navigate to="/rules" />;
  return children;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/rules" element={<Rules />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <RulesGuard>
                <Home />
              </RulesGuard>
            </PrivateRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <RulesGuard>
                <Chat />
              </RulesGuard>
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <RulesGuard>
                <Profile />
              </RulesGuard>
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <RulesGuard>
                <Admin />
              </RulesGuard>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
