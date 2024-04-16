import React, { useEffect } from 'react';
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
        <h1 className="exp_header_name">Experience</h1>
        <div
          style={{
            display: "flex",
            width: "65vw",
            justifyContent: "space-between",
            margin: "50px",
          }}
        >
          <div className="vlinder_card">
            <img
              src="https://s3.ap-south-1.amazonaws.com/io.vlinder.public/vlinder-logo.png"
              width="100"
              height="100"
              style={{ margin: "10px" }}
            />
            <h1 className="vlinder_card__company">vlinder.io</h1>
            <h3 className="vlinder_card__position">
              Associate Software Engineer
            </h3>
            {/* <i className="vlinder_card__exp">feb-2022 : Mar 2023</i> */}
          </div>
          <div className="codemodulo_card">
            <img
              src="https://www.codemodulo.in/wp-content/uploads/2023/11/Group-1.png"
              width="250"
              height="60"
              style={{ margin: "10px 10px 30px 10px" }}
            />
            <h1 className="codemodulo_card__company">codemodulo.in</h1>
            <h3 className="codemodulo_card__position">
              Associate Software Engineer
            </h3>
            {/* <i className="codemodulo_card__exp">feb-2022 : Mar 2023</i> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
