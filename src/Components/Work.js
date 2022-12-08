import React from "react";
import { useState } from "react";
import "./Work.css";

const Work = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="work">
      <h1>My Work</h1>
      <div class="row">
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class="col-8 col-sm-6"
          id="box"
        >
          <img src={require("../kara.png")} width="500" height="250"></img>
          {isHovering && (
            <div>
              <h3>KaraKare</h3>
              <h6>HTML, JavaScript, and Firebase</h6>
            </div>
          )}
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class="col-8 col-sm-6"
          id="box"
        >
          <img src={require("../crypto.png")} width="500" height="250"></img>
          {isHovering && (
            <div>
              <h3>Cryptocurrency Shop</h3>
              <h6>React</h6>
            </div>
          )}
        </div>

        <div class="w-100"></div>

        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class="col-8 col-sm-6"
          id="box"
        >
          <img src={require("../test.png")} width="500" height="250"></img>
          {isHovering && (
            <div>
              <h3>Eye Tracking</h3>
              <h6>JavaScript, HTML, Figma</h6>
            </div>
          )}
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class="col-8 col-sm-6"
          id="box"
        >
          <img src={require("../new.png")} width="500" height="250"></img>
          {isHovering && (
            <div>
              <h3>Fleek</h3>
              <h6>Figma</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
