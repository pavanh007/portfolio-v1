import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; 
import styles from "./experience.module.scss";

const Experience = () => {

 useEffect(() => {
   const swiper = new Swiper(".swiper", {
     effect: "cards",
     grabCursor: true,
     initialSlide: 1,
     speed: 500,
     loop: true,
     rotate: true,
     mousewheel: {
       invert: false,
     },
   });
 }, []);
  
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
      <h1
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
      </h1>
      {/* <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
            width: "90%",
            marginTop: "5%",
            alignSelf: "center",
          }}
        >
          <div className="card_exp">
            <header className="card_header_exp">
              <p>Feb-2023 : present</p>
              <span className="title_exp">Software Engineer</span>
            </header>
            <div className="card_author_exp">
              <a className="author-avatar" href="#">
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
              <svg className="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">
                <div className="author-name-prefix">Codemodulo.io</div> Banglore,
                India
              </div>
            </div>
            <div className="tags_exp">
              <a href="#">python</a>
              <a href="#">aws</a>
              <a href="#">js</a>
              <a href="#">mongodb</a>
            </div>
          </div>
          <div className="card_exp">
            <header className="card_header_exp">
              <p>Feb-2022 : Feb-2023</p>
              <span className="title_exp">Associate Software Engineer</span>
            </header>
            <div className="card_author_exp">
              <a className="author-avatar" href="#">
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
              <svg className="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">
                <div className="author-name-prefix">Vlinder.io</div> Banglore, India
              </div>
            </div>
            <div className="tags_exp">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">js</a>
              <a href="#">loopback-4</a>
            </div>
          </div>
          <div className="card_exp">
            <header className="card_header_exp">
              <p>Dec-2021 : Feb-2022</p>
              <span className="title_exp">Project Intern</span>
            </header>
            <div className="card_author_exp">
              <a className="author-avatar" href="#">
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
              <svg className="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div className="author-name">
                <div className="author-name-prefix">Azure Skynet Pvt. Ltd</div>{" "}
                Banglore, India
              </div>
            </div>
            <div className="tags_exp">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">js</a>
              <a href="#">nodejs</a>
            </div>
          </div>
        </div> */}
      {/* <section>
        <div className={styles.swiper}>
          <div>
            <div className={styles.swiper_slide}>
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b6f5eb64-887c-43b1-aaba-d52a4c59a379"
                alt=""
              />
              <div className={styles.overlay}>
                <span>8.5</span>
                <h2>The Queen's Gambit</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img
                className="img-position"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e906353b-fde0-4518-9a03-16545c1161bd"
                alt=""
              />
              <div className="overlay">
                <span>9.5</span>
                <h2>Breaking Bad</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fc21e481-e28a-41a8-9db3-3b62c1ddc17e"
                alt=""
              />
              <div className="overlay">
                <span>8.1</span>
                <h2>Wednesday</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6b6ad966-79e1-4d3c-8f92-566d0fee8082"
                alt=""
              />
              <div className="overlay">
                <span>8.7</span>
                <h2>Stranger Things</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2ad44f5d-2215-4416-9c9b-2bae3be51a67"
                alt=""
              />
              <div className="overlay">
                <span>8.6</span>
                <h2>Anne with an E</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/aa8fe914-741f-4bf4-ad4a-24f19d1f4178"
                alt=""
              />
              <div className="overlay">
                <span>8.9</span>
                <h2>Friends</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img
                className="img-position"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d5f10b4f-7d34-45bd-bb5f-5f1530c2ac1c"
                alt=""
              />
              <div className="overlay">
                <span>8.6</span>
                <h2>The Crown</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7cbac263-7c55-4428-908e-31018dc1bce3"
                alt=""
              />
              <div className="overlay">
                <span>8.7</span>
                <h2>House M.D.</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2929f534-3bc3-4cbd-b84c-80df863d5a38"
                alt=""
              />
              <div className="overlay">
                <span>9.2</span>
                <h2>Game of Thrones</h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Experience;
