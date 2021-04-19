import React from "react";
import EntranceExam from "../Components/entranceExam/entranceExam";
import IvaraNavbar from "../Components/navbar/navbar";

export default function EntranceExamPage() {
  return (
    <div
      style={{
        backgroundColor: "#a1aaf6",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <IvaraNavbar />
      <EntranceExam />
    </div>
  );
}
