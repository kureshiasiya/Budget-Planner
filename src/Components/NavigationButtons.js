// src/components/NavigationButtons.js

import React from "react";
import "./NavigationButtons.css";

const NavigationButtons = ({ step, handleBack, handleNext }) => {
  return (
    <div className="navigation-buttons">
      {step > 1 && <button onClick={handleBack}>Back</button>}
      {step < 4 && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default NavigationButtons;
