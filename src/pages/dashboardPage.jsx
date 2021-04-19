import React from "react";
import Dashboard from "../Components/dashboard/dashboard";
import IvaraNavbar from "../Components/navbar/navbar";

export default function DashboardPage() {
  return (
    <div
      style={{
        backgroundColor: "#a1aaf6",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <IvaraNavbar />
      <Dashboard />
    </div>
  );
}
