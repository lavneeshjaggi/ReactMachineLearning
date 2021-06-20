import React from "react";

import "./spinner.styles.scss";

const Spinner = () => (
  <div className="spinner-overlay">
    <h1 className="heading">Getting The Model Ready For Predictions</h1>
    <div className="spinner-container" />
  </div>
);

export default Spinner;