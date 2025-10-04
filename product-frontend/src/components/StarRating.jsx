import React from "react";
import Star from "./Star";

const StarRating = ({ score }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      stars.push(<Star key={i} fill={100} />);
    } else if (score + 1 > i) {
      const fraction = Math.round((score - (i - 1)) * 100); // 1–99
      stars.push(<Star key={i} fill={fraction} />);
    } else {
      stars.push(<Star key={i} fill={0} />);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center"}}>
      <div style={{ display: "flex", alignItems: "center" }}>{stars}</div>
      <span style={{ marginLeft: "5px", marginTop: "3px", lineHeight: "1"}}>
        {score.toFixed(1)}/5
      </span>
    </div>
  );
};

export default StarRating;