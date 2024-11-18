import React from "react";
import "./card.css";

const Card = ({title, value, color, iconColor}) => {
  const cardStyle = {
    width: "290px",
    height: "100%",
    background: color,
    overflow: "scroll",
    borderRadius: "10px",
    display: "flex",
    color: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    backdropFilter: "blur(4px)",
    overflow: "hidden",
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.7)",

    // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    // boxShadow:
    //   "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    // boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
    // boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  };
  return (
    <div style={cardStyle} className="card">
      {/* <div className="overlay"></div> */}
      <p className="value">{value}</p>
      <i
        class="fa-solid fa-virus-covid "
        style={{position: "absolute", color: iconColor}}
      ></i>
      <p className="title">{title}</p>
    </div>
  );
};

export default Card;
