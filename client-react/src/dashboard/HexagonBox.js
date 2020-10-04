import React from "react";
import styled from "styled-components";
const BoxWrapper = styled.div`
  background-color: white;
  padding: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #8fe8df;
  font-family: Quicksand;
  margin-left: 20px;
  font-size: 25pt;
`;

const HexagonBox = ({ title }) => {
  return (
    <BoxWrapper>
      <TitleWrapper>
        <Title>My Stats</Title>
      </TitleWrapper>
      <div>THIS IS PLACE HOLDER CONTENT</div>
    </BoxWrapper>
  );
};

export default HexagonBox;
