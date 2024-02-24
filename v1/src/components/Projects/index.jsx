import { Typography } from "antd";
import "./project.scss";

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
          backgroundColor: "#fff",
        }}
      >
        <div className="card">
          <div className="info">
            <h1 className="title">LMS</h1>
            <p className="description">
              Efficiently tracks, manages, and automates loan processes and
              transactions.
            </p>
            <ul className="wrapper">
              <li className="icon black">
                <span className="tooltip">javascript</span>
                <span>
                  <img
                    src="https://i.ibb.co/NtG7PFt/652581-code-command-develop-javascript-language-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">AWS</span>
                <span>
                  <img
                    src="https://i.ibb.co/54DYyw9/334587-amazon-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                    style={{ borderRadius: 20 }}
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">nodejs</span>
                <span>
                  <img
                    src="https://i.ibb.co/r2PBTn9/1269842-development-install-javascript-js-node-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">mongodb</span>
                <span>
                  <img
                    src="https://i.ibb.co/Y82Hh9J/4691284-mongodb-icon-1.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">redux</span>
                <span>
                  <img
                    src="https://i.ibb.co/B6QNHNG/4691205-redux-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">reactjs</span>
                <span>
                  <img
                    src="https://i.ibb.co/zf6Nt2t/8679420-reactjs-line-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">python</span>
                <span>
                  <img
                    src="https://i.ibb.co/jrm06Rh/4518857-python-icon-1.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">reactjs</span>
                <span>
                  <img
                    src="https://i.ibb.co/6WHQJxc/211664-flash-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h1 className="title">E-COM</h1>
            <p className="description">
              Online marketplace for buying and selling goods and services
              electronically.
            </p>
            <ul className="wrapper">
              <li className="icon black">
                <span className="tooltip">javascript</span>
                <span>
                  <img
                    src="https://i.ibb.co/NtG7PFt/652581-code-command-develop-javascript-language-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">AWS</span>
                <span>
                  <img
                    src="https://i.ibb.co/54DYyw9/334587-amazon-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                    style={{ borderRadius: 20 }}
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">nodejs</span>
                <span>
                  <img
                    src="https://i.ibb.co/r2PBTn9/1269842-development-install-javascript-js-node-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">mongodb</span>
                <span>
                  <img
                    src="https://i.ibb.co/Y82Hh9J/4691284-mongodb-icon-1.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">redux</span>
                <span>
                  <img
                    src="https://i.ibb.co/B6QNHNG/4691205-redux-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">reactjs</span>
                <span>
                  <img
                    src="https://i.ibb.co/zf6Nt2t/8679420-reactjs-line-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h1 className="title">CHARITY</h1>
            <p className="description">
              A payment gateway to enable donors to donate to a charity
              organization.
            </p>
            {/* <div className="badges">
              <button className="blue">
                <img
                  src="https://i.ibb.co/NtG7PFt/652581-code-command-develop-javascript-language-icon.png"
                  alt="Postgre-SQL"
                  height="18"
                  width="18"
                  border="0"
                />
                <span style={{ margin: 4 }}>javascript</span>
              </button>
              <button className="blue">
                <img
                  src="https://i.ibb.co/Y82Hh9J/4691284-mongodb-icon-1.png"
                  alt="Postgre-SQL"
                  height="18"
                  width="18"
                  border="0"
                />
                <span style={{ margin: 4 }}>mongodb</span>
              </button>
              <button className="blue">
                <img
                  src="https://i.ibb.co/B6QNHNG/4691205-redux-icon.png"
                  alt="Postgre-SQL"
                  height="18"
                  width="18"
                  border="0"
                />
                <span style={{ margin: 4 }}>redux</span>
              </button>

              <button className="blue">
                <img
                  src="https://i.ibb.co/54DYyw9/334587-amazon-icon.png"
                  alt="Postgre-SQL"
                  height="18"
                  width="18"
                  border="0"
                />
                <span style={{ margin: 4 }}>aws</span>
              </button>
              <button className="blue">
                <img
                  src="https://i.ibb.co/zf6Nt2t/8679420-reactjs-line-icon.png"
                  alt="Postgre-SQL"
                  height="18"
                  width="18"
                  border="0"
                />
                <span style={{ margin: 4 }}>reactjs</span>
              </button>
              <button className="blue">
                <img
                  src="https://i.ibb.co/34kHWpW/9117976-graphql-fill-icon.png"
                  alt="Postgre-SQL"
                  height="18"
                  width="18"
                  border="0"
                />
                <span style={{ margin: 4 }}>graphql</span>
              </button>
            </div> */}
            <ul className="wrapper">
              <li className="icon black">
                <span className="tooltip">javascript</span>
                <span>
                  <img
                    src="https://i.ibb.co/NtG7PFt/652581-code-command-develop-javascript-language-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">AWS</span>
                <span>
                  <img
                    src="https://i.ibb.co/54DYyw9/334587-amazon-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                    style={{ borderRadius: 20 }}
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">nodejs</span>
                <span>
                  <img
                    src="https://i.ibb.co/r2PBTn9/1269842-development-install-javascript-js-node-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">mongodb</span>
                <span>
                  <img
                    src="https://i.ibb.co/Y82Hh9J/4691284-mongodb-icon-1.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">redux</span>
                <span>
                  <img
                    src="https://i.ibb.co/B6QNHNG/4691205-redux-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">reactjs</span>
                <span>
                  <img
                    src="https://i.ibb.co/zf6Nt2t/8679420-reactjs-line-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">reactjs</span>
                <span>
                  <img
                    src="https://i.ibb.co/34kHWpW/9117976-graphql-fill-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h1 className="title">TICKETER</h1>
            <p className="description">
              Software for managing, tracking, and resolving customer inquiries
              and issues efficiently.
            </p>
            <ul className="wrapper">
              <li className="icon black">
                <span className="tooltip">javascript</span>
                <span>
                  <img
                    src="https://i.ibb.co/NtG7PFt/652581-code-command-develop-javascript-language-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">AWS</span>
                <span>
                  <img
                    src="https://i.ibb.co/54DYyw9/334587-amazon-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                    style={{ borderRadius: 20 }}
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">nodejs</span>
                <span>
                  <img
                    src="https://i.ibb.co/r2PBTn9/1269842-development-install-javascript-js-node-icon.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
              <li className="icon black">
                <span className="tooltip">mongodb</span>
                <span>
                  <img
                    src="https://i.ibb.co/Y82Hh9J/4691284-mongodb-icon-1.png"
                    alt="Postgre-SQL"
                    height="30"
                    width="30"
                    border="0"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
