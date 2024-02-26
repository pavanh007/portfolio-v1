import { Typography } from "antd";
import "./exp.css";


const Experience = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      
        <Typography.Title
          style={{
            fontSize: 120,
            marginTop: 50,
            fontWeight: 800,
            marginLeft: 30,
            alignSelf: "center",
            background: "-webkit-linear-gradient(#1B1A55, #535C91)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          Experience
        </Typography.Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
            width: "90%",
            marginTop: "5%",
            alignSelf: "center",
          }}
        >
          <div class="card_exp">
            <header class="card_header_exp">
              <p>Feb-2023 : present</p>
              <span class="title_exp">Software Engineer</span>
            </header>
            <div class="card_author_exp">
              <a class="author-avatar" href="#">
                <span>
                  <img
                    src="https://i.ibb.co/NWd1RJP/image.png"
                    height={40}
                    width={40}
                    style={{ borderRadius: 20 }}
                    alt="image"
                    border="0"
                  />
                </span>
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div class="author-name">
                <div class="author-name-prefix">Codemodulo.io</div> Banglore,
                India
              </div>
            </div>
            <div class="tags_exp">
              <a href="#">python</a>
              <a href="#">aws</a>
              <a href="#">js</a>
              <a href="#">mongodb</a>
            </div>
          </div>
          <div class="card_exp">
            <header class="card_header_exp">
              <p>Feb-2022 : Feb-2023</p>
              <span class="title_exp">Associate Software Engineer</span>
            </header>
            <div class="card_author_exp">
              <a class="author-avatar" href="#">
                <span>
                  <img
                    src="https://i.ibb.co/9VyVHYC/image.png"
                    height={40}
                    width={40}
                    style={{ borderRadius: 20 }}
                    alt="image"
                    border="0"
                  />
                </span>
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div class="author-name">
                <div class="author-name-prefix">Vlinder.io</div> Banglore, India
              </div>
            </div>
            <div class="tags_exp">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">js</a>
              <a href="#">loopback-4</a>
            </div>
          </div>
          <div class="card_exp">
            <header class="card_header_exp">
              <p>Dec-2021 : Feb-2022</p>
              <span class="title_exp">Project Intern</span>
            </header>
            <div class="card_author_exp">
              <a class="author-avatar" href="#">
                <span>
                  <img
                    src="https://i.ibb.co/j3V9z6D/image.png"
                    height={40}
                    width={40}
                    style={{ borderRadius: 20 }}
                    alt="image"
                    border="0"
                  />
                </span>
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div class="author-name">
                <div class="author-name-prefix">Azure Skynet Pvt. Ltd</div>{" "}
                Banglore, India
              </div>
            </div>
            <div class="tags_exp">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">js</a>
              <a href="#">nodejs</a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Experience;
