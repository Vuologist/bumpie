import React from "react";
import styled from "styled-components";

import AvatarPenguin from "../assets/AvatarPenguin.png";

import Layout from "../common/layout";

const Img = styled.img`
  height: 200px;
  width: 200px;
`;
const Container = styled.div`
  padding-top: 15vh;
  display: flex;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
`;

const NameBlock = ({ avatar, name, description }) => (
  <Wrapper>
    <Img src={AvatarPenguin} alt="Penguin" />
    <h2
      style={{
        fontFamily: "Quicksand",
        fontWeight: "bold",
        fontSize: 55,
        paddingTop: 20,
      }}
    >
      {name}
    </h2>
    <p
      style={{
        padding: "40px 0px 0px 60px",
        fontFamily: "Quicksand",
        fontSize: 35,
        width: "70%",
      }}
    >
      {description}
    </p>
  </Wrapper>
);

const AboutUsPage = () => (
  <Layout>
    <Container>
      <NameBlock
        name="Anthony Vu"
        description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."'
      />
      <NameBlock
        name="Peggy Zhou"
        description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit."'
      />
    </Container>
  </Layout>
);

export default AboutUsPage;
