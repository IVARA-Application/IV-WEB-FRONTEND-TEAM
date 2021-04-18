import React from "react";
import Faq from "../Components/faq/faq";
import IvaraNavbar from "../Components/navbar/navbar";

export default function FaqPage() {
  return (
    <div
      style={{
        backgroundColor: "#a1aaf6",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <IvaraNavbar />
      <Faq />
    </div>
  );
}
