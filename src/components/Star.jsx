import React from "react";

const Star = ({ fill = 0 }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      style={{ marginRight: "2px" }}
    >
      <defs>
        <linearGradient id={`grad-${fill}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${fill}%`} stopColor="#f5a623" />
          <stop offset={`${fill}%`} stopColor="#ddd" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#grad-${fill})`}
        d="M12 .587l3.668 7.568L24 9.748l-6 5.854L19.335 24 
           12 19.897 4.665 24 6 15.602 0 9.748l8.332-1.593z"
      />
    </svg>
  );
};

export default Star;