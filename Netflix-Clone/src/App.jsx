import React from "react";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="app">
      {/* DISCLAIMER */}
      <div
        style={{
          backgroundColor: "#ffeb3b",
          color: "#000",
          fontWeight: "bold",
          textAlign: "center",
          padding: "10px",
          fontSize: "16px",
        }}
      >
        DISCLAIMER: THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT. This
        is NOT the official site of the company or brand identified on the page.
        The creator of this page is NOT affiliated with the company or brand in
        any way. This page is a personal project made in connection with an
        educational exercise.
      </div>
      <Home />
    </div>
  );
}

export default App;
