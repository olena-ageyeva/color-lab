import React, { useState } from "react";
//import './Container.styles.js';
import ContainerStyles from "./Container.styles";

export default function Container() {
  const [bgcolor, setBgcolor] = useState("red");

  return (
    <ContainerStyles bgcolor={bgcolor}>
      <div className="container">
        <button
          onClick={e => {
            bgcolor == "red" ? setBgcolor("green") : setBgcolor("red");
          }}
        >
          Change Color
        </button>
      </div>
    </ContainerStyles>
  );
}
