import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./contactMe.css";


const Contact = () => {
  const canvasRef = useRef(null);
  const btnRef = useRef(null);
  const btnRef_resume = useRef(null);

const handleMouseMove = (e) => {
  const rect = btnRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  btnRef.current.style.setProperty("--x", x + "px");
  btnRef.current.style.setProperty("--y", y + "px");
};

  const handleMouseMoveResume = (e) => {
    const rect = btnRef_resume.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef_resume.current.style.setProperty("--x", x + "px");
    btnRef_resume.current.style.setProperty("--y", y + "px");
  };
  useEffect(() => {
    const c = canvasRef.current;
    const $ = c.getContext('2d');

    const col = (x, y, r, g, b) => {
      $.fillStyle = `rgb(${r},${g},${b})`;
      $.fillRect(x, y, 1, 1);
    };

    const R = (x, y, t) => Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    const G = (x, y, t) => Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
    const B = (x, y, t) => Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));

    let t = 0;
    const fps = 60;
    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t += 0.05 / 1;

      setTimeout(() => {
        window.requestAnimationFrame(run);
      }, 1000 / fps);
    };

    run();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        paddingTop: 30,
        backgroundColor: "#fff",
      }}
    >
      <div className="hero-wrapper">
        <div className="intrest_in_box">
          <h1 className="intrest_in">Interested in working together?</h1>
        </div>
        <div className="hero">
          <canvas ref={canvasRef} width="33" height="30"></canvas>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          flexDirection: "row",
          height: "30vh",
          width: "64vw",
          margin: 0,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "48%",
            height: "28vh",
            borderRadius: "15px",
            marginTop: "20px",
            backgroundColor: "white",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundColor: "rgb(0, 0, 0, 0.04)",
          }}
          className="lineUp mouse-cursor-gradient-tracking"
          onMouseMove={handleMouseMove}
          ref={btnRef}
        >
          <h2
            style={{
              fontWeight: 400,
              color: "transparent",
              fontSize: "34px",
              marginBottom: 40,
              backgroundColor: "black",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >
            get in touch with me
          </h2>

          <div className="social_links">
            <a href="#">
              <FaInstagram className="fab" />
            </a>
            <a href="#">
              <FaTwitter className="fab" />
            </a>
            <a href="#">
              <FaGithub className="fab" />
            </a>
            <a href="#">
              <FaLinkedinIn className="fab" />
            </a>
          </div>
          <div
            style={{
              width: "50%",
              paddingTop: 30,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h5
              style={{
                fontWeight: 100,
                display: "inline-block",
                justifyContent: "space-between",
                paddingBottom: 10,
              }}
            >
              <img
                src="https://i.ibb.co/0t41n38/9026933-phone-thin-icon.png"
                height="15"
                width="15"
                border="0"
                style={{ verticalAlign: "middle" }}
              />
              <span
                style={{
                  verticalAlign: "middle",
                  marginLeft: "20px",
                  color: "#000",
                }}
              >
                +91 7892419604
              </span>
            </h5>
            <h5
              style={{
                fontWeight: 100,
                display: "inline-block",
                justifyContent: "space-between",
              }}
            >
              <img
                src="https://i.ibb.co/NTt9pCz/3586360-email-envelope-mail-send-icon.png"
                height="15"
                width="15"
                border="0"
                style={{ verticalAlign: "middle" }}
              />
              <span
                style={{
                  verticalAlign: "middle",
                  marginLeft: "20px",
                  color: "#000",
                }}
              >
                pavanhdsce@gmail.com
              </span>
            </h5>
          </div>
          <div
            style={{
              position: "absolute",
              left: "var(--x)",
              top: "var(--y)",
              width: "0",
              height: "0",
              background:
                "radial-gradient(circle closest-side, #00ff00, transparent)",
              transform: "translate(-50%, -50%)",
              transition: "width 0.2s ease, height 0.2s ease",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            width: "50%",
            height: "28vh",
            marginTop: "20px",
            backgroundColor: "rgb(0, 0, 0, 0.04)",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className=" lineUp mouse-cursor-gradient-tracking_resume"
          onMouseMove={handleMouseMoveResume}
          ref={btnRef_resume}
        >
          <h2
            style={{
              fontWeight: 400,
              fontSize: "34px",
              color: "transparent",
              marginBottom: 40,
              marginTop: -30,
              backgroundColor: "black",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >
            You can hire me
          </h2>
          <button className="continue-application">
            <div>
              <div className="pencil"></div>
              <div className="folder">
                <div className="top">
                  <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                  </svg>
                </div>
                <div className="paper"></div>
              </div>
            </div>
            DOWNLOAD CV
          </button>
        </div>
      </div>
      <div
        style={{
          color: "rgb(0, 0, 0, 0.5)",
          height: "20px",
          display: "flex",
          marginTop: "5%",
          paddingLeft: "10px",
          justifyContent: "center",
          alignSelf: "center",
          width: "63%",
          justifyContent: "space-between",
        }}
      >
        <span>&#9400; 2024 pavan. All rights reserved.</span>
        <div
          style={{
            width: "150px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>privacy</span>
          <span>legal notice</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
