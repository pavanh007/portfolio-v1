import { useState, useEffect } from "react";
import "./nav.css";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignSelf: "center",
      }}
    >
      <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="outerLayer">
          <div className="tabs">
            <button className="tabs-tab-one">
              <img
                src="https://i.ibb.co/0n6VN5Q/4092564-profile-about-mobile-ui-user-icon.png"
                alt="4092564-profile-about-mobile-ui-user-icon"
                border="0"
                width={12}
                height={12}
              />
              &nbsp;ABOUT
            </button>
            <button className="tabs-tab-one">
              <img
                src="https://i.ibb.co/d0Hn0PC/3669401-ic-work-icon.png"
                alt="3669401-ic-work-icon"
                border="0"
                width={12}
                height={12}
              />
              &nbsp;WORK
            </button>
            <button className="tabs-tab-one">
              <img
                src="https://i.ibb.co/tmBRWGk/4265047-bulb-creative-idea-lightbulb-startup-icon.png"
                alt="4265047-bulb-creative-idea-lightbulb-startup-icon"
                border="0"
                width={12}
                height={12}
              />
              &nbsp;PROJECT
            </button>
            <button className="tabs-tab-one">
              <img
                src="https://i.ibb.co/pb5MDvs/8665779-link-connection-icon.png"
                alt="8665779-link-connection-icon"
                border="0"
                width={12}
                height={12}
              />
              &nbsp;CONNECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
