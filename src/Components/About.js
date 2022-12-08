import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>

      <img id="im" src={require("../me.jpeg")} width="30%"></img>
      <p>
        I am a junior at Brown University studying Computer Science and
        Contemplative Studies. Previously, I worked as a UX designer at Hatch
      </p>
    </div>
  );
};
export default About;
