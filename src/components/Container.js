import React, { useState } from "react";
//import './Container.styles.js';
import ContainerStyles from "./Container.styles";

export default function Container() {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [bgcolor, setBgcolor] = useState(getRandomColor);

  return (
    <ContainerStyles bgcolor={bgcolor}>
      <div className="container">
        <button
          onClick={e => {
            setBgcolor(getRandomColor);
          }}
        >
          Change Color
        </button>
      </div>
    </ContainerStyles>
  );
}
