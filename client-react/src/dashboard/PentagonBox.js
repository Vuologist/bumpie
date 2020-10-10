import React from "react";
import styled from "styled-components";
const BoxWrapper = styled.div`
  background-color: white;
  padding: 15px;
`;

const TitleWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #8fe8df;
  font-family: Quicksand;
  margin-left: 20px;
  font-size: 15pt;
  text-align: center;
`;

const PentagonBox = ({ title }) => {
  return (
    <BoxWrapper>
      <TitleWrapper>
        <Title>My Stats</Title>
      </TitleWrapper>
      <div>THIS IS PLACE HOLDER CONTENT</div>
    </BoxWrapper>
  );
};

export default PentagonBox;
