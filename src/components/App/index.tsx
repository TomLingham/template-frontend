import React from "react";
import styled from "styled-components";
import ResetStyles from "../Reset";

const H1 = styled.h1`
  display: block;
  color: #777;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default () => (
  <Container>
    <ResetStyles />
    <H1>Hello, World!</H1>
  </Container>
);
