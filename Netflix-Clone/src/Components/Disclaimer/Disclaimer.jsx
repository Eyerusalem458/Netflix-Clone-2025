import React, { useState } from "react";
import styles from "./Disclaimer.module.css";

function Disclaimer() {
  const [visible, setVisible] = useState(true); // always visible on load

  const handleClose = () => {
    setVisible(false); // hide immediately
  };

  if (!visible) return null; // don't render if hidden

  return (
    <div className={styles.disclaimerContainer}>
      DISCLAIMER: THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT. This is
      NOT the official site of the company or brand. The creator is NOT
      affiliated with the company or brand in any way.
      <button
        onClick={handleClose}
        className={styles.closeButton}
        aria-label="Close disclaimer"
      >
        ✖
      </button>
    </div>
  );
}

export default Disclaimer;
