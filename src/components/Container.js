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

  function getRandomDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(json => setBgimage(json.message));
  }

  const [bgcolor, setBgcolor] = useState(getRandomColor);
  const [bgimage, setBgimage] = useState(getRandomDog);

  return (
    <ContainerStyles bgcolor={bgcolor} bgimage={bgimage}>
      <div className="container">
        <button
          onClick={e => {
            setBgcolor(getRandomDog);
          }}
        >
          Change Color
        </button>
      </div>
    </ContainerStyles>
  );
}
