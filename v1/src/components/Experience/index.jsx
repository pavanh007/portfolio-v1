import { Typography } from "antd";
import { useEffect } from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./exp.scss";


const Experience = () => {
  useEffect(() => {
    try {
      const swiper = new Swiper(".blog-slider", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        mousewheel: {
          invert: false,
        },
        autoHeight: true,
        pagination: {
          el: ".blog-slider__pagination",
          clickable: true,
        },
      });
      return () => {
        swiper.destroy();
      };
    } catch (error) {
      console.error("Swiper initialization error:", error);
    }
  }, []);
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography.Title
          style={{
            fontSize: 120,
            marginTop: 50,
            fontWeight: 800,
            marginLeft: 30,
            background: "-webkit-linear-gradient(#1B1A55, #535C91)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          Experience
        </Typography.Title>
      </div>
      
    </div>
  );
};

export default Experience;
