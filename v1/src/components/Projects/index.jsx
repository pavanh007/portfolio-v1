import { Typography } from "antd";
import "./index.scss";

const Project = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography.Title
          style={{
            fontSize: 120,
            marginBottom: 30,
            marginTop: 50,
            fontWeight: 800,
            marginLeft: 30,

            background: "-webkit-linear-gradient(#1B1A55, #535C91)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
          className="hover-underline-animation"
        >
          projects
        </Typography.Title>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "90vw",
          alignSelf: "center",
          height: "60vh",
          margin: "auto",
          backgroundColor: "#fff"
        }}
      >
        <div className="card a100">
          <div className="card__content">
            <div className="card__content-inner">
              <div className="card__title">Card Title</div>
              <div className="card__description">Lorem ipsum doler amet...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
