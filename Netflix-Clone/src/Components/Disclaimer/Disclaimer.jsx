import React, { useState } from "react";

function Disclaimer() {
  const [visible, setVisible] = useState(true); // always visible at start

  const handleClose = () => {
    setVisible(false); // hide immediately when clicked
  };

  if (!visible) return null; // hide component when not visible

  return (
    <div
      style={{
        backgroundColor: "#ffeb3b",
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
        padding: "10px 40px 10px 10px",
        fontSize: "16px",
        position: "relative",
      }}
    >
      DISCLAIMER: THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT. This is
      NOT the official site of the company or brand. The creator is NOT
      affiliated with the company or brand in any way.
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          right: "10px",
          top: "5px",
          background: "transparent",
          border: "none",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
        }}
        aria-label="Close disclaimer"
      >
        ✖
      </button>
    </div>
  );
}

export default Disclaimer;
