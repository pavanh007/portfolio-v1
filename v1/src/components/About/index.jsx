import React, { useEffect, useState } from "react";
import Globe from "./Globe";

import "./about.css";

const About = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="gradient_bg"></div>

        <div
          style={{
            backgroundColor: "transparent",
            height: "100vh",
            width: "50vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              margin: "auto",
              alignContent: "center",
              justifyContent: "center",
              alignSelf: "center",
              flexWrap: "wrap",
              padding: "20px",
            }}
          >
            <h2 className="greet_name">Hello stranger! 👋,My name is</h2>
            <h1 className="my_name">Pavan</h1>

            <p
              className="reveal"
              style={{
                overflowWrap: "break-word",
                wordWrap: "break-word",
                fontWeight: 200,
              }}
            >
              I'm a full stack developer from India 🇮🇳. I believe we design can
              be more diverse and inspiring. With the mission to present the
              possibilities of web design.
            </p>
            <div id="container">
              <span>I CAN</span>
              <div id="flip">
                <div>
                  <div className="develop">&nbsp;DEVELOP&nbsp;</div>
                </div>
                <div>
                  <div className="design">DESIGN</div>
                </div>
                <div>
                  <div className="deploy">DEPLOY</div>
                </div>
              </div>
              <span>AWESOME!</span>
            </div>
          </div>
        </div>
        <Globe />
      </div>
      <div className="scrolldown">
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
