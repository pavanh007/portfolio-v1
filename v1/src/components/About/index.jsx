import "./index.css";
const About = () => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>Hello stranger! 👋, My name is </span>
      <div className="nameHeader">
        <p>PAVAN</p>
        <p>PAVAN</p>
      </div>
      <div className="reveal">FULL STACK DEVELOPER</div>
      <div id="container">
        <span>I CAN</span>
        <div id="flip">
          <div>
            <div>DESIGN</div>
          </div>
          <div>
            <div>DEVELOPMENT</div>
          </div>
          <div>
            <div>DEPLOY</div>
          </div>
        </div>
        <span>AWESOME!</span>
      </div>
        <div className="scrolldown" style={{ color: "blue", position: "absolute",bottom: "20px"  }}>
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
    </div>
  );
};

export default About;
