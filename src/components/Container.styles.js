import styled from "styled-components";

const ContainerStyles = styled.div`
  .container {
    width: 300px;
    height: 200px;
    background: ${props=>props.bgcolor};
    margin: 10px;
    vertical-align: middle;
  }

  button {
    margin: 50px;
    padding: 5px 10px;
  }
`;

export default ContainerStyles;
