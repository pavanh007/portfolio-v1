import React from "react";
import "./experience.scss";

const Experience = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "90vh",
        width: "100%",
        display: "flex",
        padding: "50px",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <h1 className="exp_header_name">Professional Expertise</h1>
        <div
          style={{
            display: "flex",
            width: "65vw",
            justifyContent: "space-between",
            margin: "50px",
          }}
        >
          <div className="experience_card">
            <img
              src="https://s3.ap-south-1.amazonaws.com/io.vlinder.public/vlinder-logo.png"
              width="100"
              height="100"
              style={{ margin: "10px" }}
              alt="Vlinder.io Logo"
            />
            <h1 className="experience_card__company">vlinder.io</h1>
            <h3 className="experience_card__position">
              Associate Software Engineer
            </h3>
          </div>
          <div className="experience_card">
            <img
              src="https://www.codemodulo.in/wp-content/uploads/2023/11/Group-1.png"
              width="250"
              height="60"
              style={{ margin: "10px 10px 30px 10px" }}
              alt="CodeModulo Logo"
            />
            <h1 className="experience_card__company">codemodulo.in</h1>
            <h3 className="experience_card__position">Software Engineer</h3>
          </div>
          <div className="experience_card">
            <img
              src="https://s3.ap-south-1.amazonaws.com/io.vlinder.public/vlinder-logo.png"
              width="100"
              height="100"
              style={{ margin: "10px" }}
              alt="MetaZ.digit Logo"
            />
            <h1 className="experience_card__company">MetaZ.digit</h1>
            <h3 className="experience_card__position">Software Engineer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
