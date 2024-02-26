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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "100px",
        }}
      >
        <h1 className="selection_work"
        >
          A small selection of my work
        </h1>
        <h1
          style={{
            fontSize: 18,
            marginBottom: 0,
            marginLeft: 30,
            fontWeight: 200,
            alignSelf: "center",
            padding: 10,
            width: "40vw",
            textAlign: "center",
          }}
          // className="workHeader"
        >
          Working on interesting and challenging projects that will definitely
          help you advance your career.
        </h1>
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
        <div className="card_p">
          <div className="info_p">
            <h1 className="title_p">LMS</h1>
            <p className="description_p">
              Efficiently tracks, manages, and automates loan processes and
              transactions.
            </p>
            <ul className="wrapper_p">
              <li className="icon_p black">
                <span className="tooltip_p">javascript</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">AWS</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">nodejs</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">mongodb</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">redux</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">reactjs</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">python</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">reactjs</span>
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
        <div className="card_p">
          <div className="info_p">
            <h1 className="title_p">E-COM</h1>
            <p className="description_p">
              Online marketplace for buying and selling goods and services
              electronically.
            </p>
            <ul className="wrapper_p">
              <li className="icon_p black">
                <span className="tooltip_p">javascript</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">AWS</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">nodejs</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">mongodb</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">redux</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">reactjs</span>
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
        <div className="card_p">
          <div className="info_p">
            <h1 className="title_p">CHARITY</h1>
            <p className="description_p">
              A payment gateway to enable donors to donate to a charity
              organization.
            </p>
            <ul className="wrapper_p">
              <li className="icon_p black">
                <span className="tooltip_p">javascript</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">AWS</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">nodejs</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">mongodb</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">redux</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">reactjs</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">reactjs</span>
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
        <div className="card_p">
          <div className="info_p">
            <h1 className="title_p">TICKETER</h1>
            <p className="description_p">
              Software for managing, tracking, and resolving customer inquiries
              and issues efficiently.
            </p>
            <ul className="wrapper_p">
              <li className="icon_p black">
                <span className="tooltip_p">javascript</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">AWS</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">nodejs</span>
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
              <li className="icon_p black">
                <span className="tooltip_p">mongodb</span>
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
