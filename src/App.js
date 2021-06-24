import React, { useEffect } from "react";
import logo from "./img/logo.png";
import { gsap } from "gsap";

function App() {
  useEffect(() => {
    gsap.to(".logo", {
      duration: 2,
      left: "45%",
      backgroundColor: "yellow",
      borderRadius: "20%",
      border: "2px solid white",
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        style={{
          position: "relative",
          height: "300x",
          width: "100px",
        }}
        className="logo"
        src={logo}
        alt="GreenSock superhero logo"
      />
    </div>
  );
}

export default App;
