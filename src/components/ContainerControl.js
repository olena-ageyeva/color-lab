import React, { useState } from "react";
import Container from "./Container";
import ContainerStyles from "./Container.styles";

export default function ContainerControl() {
  const [containers, setContainers] = useState([]);

  const addContainer = e => {
    setContainers([...containers, <Container />]);
  };

  const removeContainer = e => {
    setContainers([...containers.slice(0, containers.length - 1)]);
  };

  return (
    <ContainerStyles>
      <button class="control_button" onClick={addContainer}>
        Add Container
      </button>
      <button class="control_button" onClick={removeContainer}>
        Remove Container
      </button>
      <div className="control">
        <header className="control-header">{containers}</header>
      </div>
    </ContainerStyles>
  );
}
