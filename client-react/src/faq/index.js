import React from "react";
import styled from "styled-components";

import Layout from "../common/layout";

const Q = styled.h3`
  font-family: "Quicksand";
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  background-color: #8fe8df;
  border-left-style: solid;
  border-left-color: black;
  border-left-width: 5px;
  margin-top: 40px;
  padding-left: 5px;
`;

const A = styled.p`
  font-family: "Quicksand";
  font-size: 20px;
  font-weight: bold;
  border-left-style: solid;
  border-left-color: #8fe8df;
  border-left-width: 5px;
  padding-left: 5px;
`;

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const FAQitem = () => (
  <div style={{ marginBottom: 10 }}>
    <Q>Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Q>
    <A>
      A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
      elit, porttitor vel erat eget, dignissim dignissim nisl. Cras quis
      vulputate sapien. Sed rhoncus risus at quam efficitur, vel elementum.
    </A>
  </div>
);

const FAQ = () => (
  <Layout>
    <Wrapper>
      <h1 style={{ fontFamily: "Quicksand", fontWeight: "bold", fontSize: 30 }}>
        Frequently Asked Questions
      </h1>
      <FAQitem />
      <FAQitem />
      <FAQitem />
      <FAQitem />
      <FAQitem />
    </Wrapper>
  </Layout>
);

export default FAQ;
