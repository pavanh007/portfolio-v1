import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./contactMe.css";


const Contact = () => {
  const canvasRef = useRef(null);

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
        height: "90vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
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
          margin: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "45%",
            height: "28vh",
            borderRadius: "20px",
            backgroundColor: "rgb(0, 0, 0, 0.07)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>get in touch with me!</h2>

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
              width: "60%",
            }}
          >
            <h5>+91 7892419604</h5>
            <h5>pavanhdsce@gmail.com</h5>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "50%",
            height: "28vh",
            backgroundColor: "rgb(0, 0, 0, 0.07)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5>+91 7892419604</h5>
          <h5>pavanhdsce@gmail.com</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
