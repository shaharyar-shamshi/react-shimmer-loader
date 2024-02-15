import React from "react";
import { ShimmerProps } from "../models/Shimmer";
import "../styles/Shimmer.css";

const Shimmer: React.FC<ShimmerProps> = ({
  width,
  height,
  children,
  backgroundColor = "#f6f7f8",
  highlightColor = "#eaeaea",
  animationDuration = 1,
}) => {
  const shimmerStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: backgroundColor,
    backgroundImage: `linear-gradient(to right, ${highlightColor} 8%, ${backgroundColor} 18%, ${highlightColor} 33%)`,
    backgroundSize: `${width * 3}px ${height}px`,
    animation: `shimmer ${animationDuration}s infinite linear`,
  };

  return (
    <div style={{ position: "relative", width, height }}>
      {children}
      <div className="shimmer" style={shimmerStyle} /> {/* Apply CSS class */}
    </div>
  );
};

export default Shimmer;
