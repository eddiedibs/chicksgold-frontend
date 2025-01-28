import React from "react";

const CardCartIcon = ({ width = "24", height = "24", color = "currentColor", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 14.865"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.811 9.926a.753.753 0 0 1-.753.753H2.489l1.974-2.734L2.608 1.5h-2A.755.755 0 1 1 .606 0h3.14l.481 1.671h11.584l-3.318 6.418H6.075l.042.144-.676.937h8.617a.755.755 0 0 1 .753.755zM5.252 11.76A1.55 1.55 0 1 0 6.8 13.308a1.55 1.55 0 0 0-1.548-1.548zm7.256 0a1.55 1.55 0 1 0 1.548 1.548 1.55 1.55 0 0 0-1.548-1.548z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CardCartIcon;