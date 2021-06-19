import React from "react";

import "./spinner.styles.scss";

const Spinner = () => (
  <div className="spinner-overlay">
    <h1 className="heading">The model is getting trained</h1>
    <div className="spinner-container" />
  </div>
);

export default Spinner;