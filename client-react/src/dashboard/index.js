import React from "react";
import styled from "styled-components";
import CategoryBox from "./CategoryBox";
import PentagonBox from "./PentagonBox";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 50px;
  height: 80vh;
  background-color: #c5c5c4;
`;

const PentagonWrapper = styled.div`
  padding: 20px;
`;
const CategoryWrapper = styled.div`
  padding: 20px;
  background-color: #c5c5c4;
`;

const Dashboard = () => {
  return (
    <ContentWrapper>
      <PentagonWrapper>
        <PentagonBox></PentagonBox>
      </PentagonWrapper>
      <CategoryWrapper>
        <CategoryBox title="Category 1"></CategoryBox>
        <CategoryBox title="Category 2"></CategoryBox>
        <CategoryBox title="Category 3"></CategoryBox>
        <CategoryBox title="Category 4"></CategoryBox>
        <CategoryBox title="Category 5"></CategoryBox>
      </CategoryWrapper>
    </ContentWrapper>
  );
};

export default Dashboard;
