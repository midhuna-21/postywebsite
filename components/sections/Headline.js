"use client";

import React, { useState } from "react";

export default function Headline({title}) {
  const [hover, setHover] = useState(false);

  return (
    <h2
      style={{
     fontSize: "clamp(1.4rem, 2vw, 1.7rem)",
        fontWeight: 800,
        lineHeight: 1.15,
        background: "linear-gradient(135deg, #1f2937 0%, #4b5563 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "1.5rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "inline-block",
        position: "relative",
        // filter: hover
        //   ? "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))"
        //   : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {title}
      <span
        style={{
          position: "absolute",
          bottom: "-8px",
          left: 0,
          width: hover ? "120px" : "60px",
          height: "3px",
          background: "linear-gradient(90deg, #f59e0b, #d97706)",
          borderRadius: "2px",
          transition: "width 0.3s ease",
          display: "block",
        }}
      ></span>
    </h2>
  );
}
