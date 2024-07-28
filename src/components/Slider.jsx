import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  left: ${(props) => props.dir === "left" && "10px"};
  right: ${(props) => props.dir === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;
const Slider = () => {
  return (
    <Container>
      <Arrow dir="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow dir="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
