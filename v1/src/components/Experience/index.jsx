import { Typography} from "antd"
import "./index.css";
const Experience = () => {
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
      <div className="outerDiv">
        <div className="container">
          <div className="card">
            <div className="content">
              <h2>01</h2>
              <h3>Codemodulo Technologies</h3>
              <p>Software Engineer</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="content">
              <h2>01</h2>
              <h3>Vlinder Labs Pvt, Ltd</h3>
              <p>Associate Software Engineer</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="content">
              <h2>01</h2>
              <h3>Azure Skynet Solutions</h3>
              <p>Intern</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
