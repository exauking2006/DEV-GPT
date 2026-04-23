import React from "react";
import AddAdmin from "./AddAdmin";
import MembersList from "./MembersList";
import ReportsBox from "./ReportsBox";
import MaintenanceToggle from "./MaintenanceToggle";

export default function AdminPanel() {
  return (
    <div className="admin-container">
      <h2>Panel Admin</h2>

      <MaintenanceToggle />
      <AddAdmin />
      <MembersList />
      <ReportsBox />
    </div>
  );
}
