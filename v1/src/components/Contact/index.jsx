// import { useEffect } from "react";
import "./index.css";

const Contact = () => {
  
  return (
    <div
      style={{
        backgroundColor: "orange",
        height: "100vh",
        width: "100vw",
        // zIndex: 1,
        // position: "relative",
      }}
    >
      <div className="hero-wrapper">
        <div className="hero">
          <canvas id="canv" width="32" height="20"></canvas>
          <h1 className="title">
            Turning ideas into real life products is my calling.
          </h1>
        </div>
        <div className="hero hero-behind">
          <span className="title" aria-hidden="true">
            Turning ideas into real life products is my calling.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
