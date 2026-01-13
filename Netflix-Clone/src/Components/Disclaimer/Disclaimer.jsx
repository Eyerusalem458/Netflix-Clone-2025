import React, { useState } from "react";

function Disclaimer() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        backgroundColor: "#ffeb3b",
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
        padding: "15px 60px 15px 15px",
        fontSize: "16px",
        position: "relative",
        zIndex: 1000, // make sure it's above other elements
      }}
    >
      DISCLAIMER: THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT. This is
      NOT the official site of the company or brand. The creator is NOT
      affiliated with the company or brand in any way.
      {/* Close button */}
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "50%",
          right: "15px",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
          zIndex: 1001, // above parent
        }}
      >
        ✖
      </button>
    </div>
  );
}

export default Disclaimer;
