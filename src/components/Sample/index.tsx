import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: #333;
  font-size: 3.2rem;
  font-weight: normal;
`;

const Page = styled.article`
  background: white;
  padding: 3em;
  margin: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const Columns = styled.section`
  display: flex;
  justify-content: space-between;
  margin: -1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 1.6em;
`;

export default () => (
  <Page>
    <H1 data-test-id="page-heading">Howdy, stranger!</H1>
    <Columns>
      <Col>
        <Paragraph>Your application configuration is output below:</Paragraph>
        <pre>{JSON.stringify(window.__maiar.config, null, 2)}</pre>
      </Col>
      <Col>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          illo accusamus obcaecati rerum a quo corporis laboriosam neque odit.
          Fugiat esse possimus sint! Nostrum ullam ex animi fugit ipsum quos
          doloribus consectetur repudiandae sunt fugiat omnis alias facere fuga,
          ab eos maxime illum laborum laboriosam corrupti cupiditate!
        </Paragraph>
      </Col>
    </Columns>
  </Page>
);
