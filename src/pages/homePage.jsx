import React from "react";
import EntranceExamCourse from "../Components/HomeRoute/EntranceExam";
import GlobalStyle from "../Components/HomeRoute/GlobalStyle";
import Home from "../Components/HomeRoute/Home";
import IvaraNavbar from "../Components/navbar/navbar";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#a1aaf6",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <IvaraNavbar />
      <Home />
      <GlobalStyle />
      <EntranceExamCourse />
    </div>
  );
}
