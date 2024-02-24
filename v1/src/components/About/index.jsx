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
      <div className="main">
        <img src="src/assets/earth.png" width="1200" height="1200"></img>
        <svg id="rotatingText" viewBox="0 0 200 200" width="70" height="70">
          <defs>
            <path
              id="circle"
              d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            "
            ></path>
          </defs>
          <svg width="200" height="200">
            <text width="200">
              <textPath
                alignmentBaseline="top"
                xlinkHref="#circle"
                className="text"
                spacing="auto"
              ></textPath>
            </text>
          </svg>
        </svg>
      </div>
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
      <div
        className="scrolldown"
        style={{ color: "blue", position: "absolute", bottom: "20px" }}
      >
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
