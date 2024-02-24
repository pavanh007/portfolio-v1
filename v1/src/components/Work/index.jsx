import { Typography } from "antd"
import "./index.scss"

const Work = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div style={{ display: "flex" }}>
        <Typography.Title
          style={{
            fontSize: 110,
            marginBottom: 0,
            marginLeft: 30,
            fontWeight: 800,
            width: 1200,
          }}
          className="workHeader"
        >
          Turning ideas into real life products is my calling.
        </Typography.Title>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          marginTop: 100,
        }}
      >
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/3Cgxd2f/4691518-css3-icon.png"
                  alt="CSS3"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/Rv93ZyQ/367627-html-html5-icon.png"
                  alt="Html-5"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>

            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/0JNqNJr/9035061-logo-javascript-icon.png"
                  alt="Java-Script"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/2nZvc2t/4691213-python-icon.png"
                  alt="Python"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/zf6Nt2t/8679420-reactjs-line-icon.png"
                  alt="React"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/B6QNHNG/4691205-redux-icon.png"
                  alt="Redux"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/ZN2jvZn/9057389-serverless-icon.png"
                  alt="serverless"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/t8JCFyP/9074220-typescript-icon.png"
                  alt="Type-Script"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/4PgC740/8546827-aws-icon.png"
                  alt="Amazon-Web-Services"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>

            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/sv7gyK8/8666171-docker-icon.png"
                  alt="Docker"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/bLPLt7x/9041208-git-icon.png"
                  alt="Git"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/M62Y2Ln/211904-social-github-icon.png"
                  alt="GitHub"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>

            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/RjjfWzb/8666335-linux-icon.png"
                  alt="Linux"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/2FhmJ32/4691284-mongodb-icon.png"
                  alt="MongoDB"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/5rMLswC/9035101-logo-nodejs-icon.png"
                  alt="Node-Js"
                  height="100"
                  width="100"
                  border="0"
                />
              </a>
            </div>
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/pZyxn0k/11120626-fi-brands-postgre-icon.png"
                  alt="Postgre-SQL"
                  height="60"
                  width="60"
                  border="0"
                />
              </a>
            </div>
        
            <div className="slide">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/34kHWpW/9117976-graphql-fill-icon.png"
                  alt="Postgre-SQL"
                  height="60"
                  width="60"
                  border="0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

