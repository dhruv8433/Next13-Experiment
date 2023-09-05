"use client";

import React from "react";

const error = ({ error, reset }) => {
  return (
    <div style={{minHeight: "100vh"}}>
      <h1> Error: {error.message}</h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default error;
