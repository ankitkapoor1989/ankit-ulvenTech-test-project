import React from "react";
import "./LoadingSpinner.scss"

const LoadingSpinner = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <div className="loading-text" data-testid="loading">Loading ...</div>
    </div>
  );
};

export default LoadingSpinner;
