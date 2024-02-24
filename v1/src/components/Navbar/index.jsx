
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
          <div data-ui-tablist="navigation" className="tabs">
            <button className="tabs-tab-one">ABOUT</button>
            <button className="tabs-tab-one">WORK</button>
            <button className="tabs-tab-one">PROJECT</button>
            <button className="tabs-tab-one">CONNECT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
