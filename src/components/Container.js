import React, { useState } from "react";
//import './Container.styles.js';
import ContainerStyles from "./Container.styles";

export default function Container() {
  const apiPool = [
    "https://dog.ceo/api/breeds/image/random",
    "https://random.dog/woof.json",
    "https://api.thecatapi.com/v1/images/search"
    //"https://source.unsplash.com/random"
  ];

  function checkURL(url) {
    console.log(url);
    return url.match ? url.match(/\.(jpeg|jpg|gif|png)$/) != null : false;
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function findImage(object) {
    var image;
    for (var key in object) {
      if (checkURL(object[key])) {
        image = object[key];
      } else {
        if (typeof object[key] === "object") {
          for (var item in object[key]) {
            if (checkURL(object[key][item])) {
              image = object[key][item];
            }
          }
        }
      }
    }
    return image;
  }

  function getRandomDog() {
    const api = Math.floor(Math.random() * 3);
    fetch(apiPool[api])
      .then(response => response.json())
      .then(json => setBgimage(findImage(json)));

    console.log(api);
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
