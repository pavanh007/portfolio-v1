import "./index.css";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignSelf: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          width: "65vw",
          height: "5vw",
          justifyContent: "space-between",
          alignContent: "center",
          alignSelf: "center",
          position: "fixed",
          padding: 10,
          margin: "auto",
          marginTop: "20px",
          zIndex: 1,
          backdropFilter: blur("8px"),
          borderRadius: "50px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "10px 10px 10px 10px rgba(10, 20, 50, 0.1)",
        }}
        className="navbar"
      >
        <div className="main">
          <img
            src="https://i.ibb.co/bzwDPgv/03e1ce49-9ac5-42ee-97c6-f8bc2b3b44c3-removebg-preview.png"
            width="30"
            height="30"
          ></img>
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
                >
                  P-&nbsp;-&nbsp;-&nbsp;-&nbsp;
                  -A-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;
                  -V-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;
                  -A-&nbsp;-&nbsp;-&nbsp;-&nbsp; -N-&nbsp;-&nbsp;-&nbsp;-&nbsp;
                </textPath>
              </text>
            </svg>
          </svg>
        </div>
        <div className="outerLayer">
          <div data-ui-tablist="navigation" className="tabs">
            <div className="tabs-marker"></div>
            <button className="tabs-tab-one">ABOUT</button>
            <button data-ui-tablist-tab="inventory" className="tabs-tab-one">
              WORK
            </button>
            <button data-ui-tablist-tab="bonuses" className="tabs-tab-one">
              PROJECT
            </button>
            <button data-ui-tablist-tab="history" className="tabs-tab-one">
              CONNECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
