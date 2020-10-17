import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubCategory from "./SubCategory";
import {
  faCaretRight,
  faEllipsisH,
  faCaretDown,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
const CategoryWrapper = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 25px;
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
  font-size: 15pt;
`;

const ContentWrapper = styled.div`
  margin-left: 30px !important;
  margin: 10px;
`;

const SubcategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
`;

const SubHeader = styled.div`
  color: #54494b;
  font-family: Roboto;
  font-size: 8pt;
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.hr`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryBox = ({ title }) => {
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState(0);

  const showCategoryContent = () => {
    return (
      <CategoryWrapper>
        <TitleWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>
              <FontAwesomeIcon
                icon={faCaretDown}
                size="lg"
                onClick={() => setDisplay(!display)}
              />
            </span>
            <Title>{title}</Title>
          </div>
          <FontAwesomeIcon icon={faEllipsisH} color="#707070" />
        </TitleWrapper>
        <ContentWrapper>
          <SubcategoryGrid>
            <SubHeader>
              <span>SUB-CATEGORIES</span>
            </SubHeader>
            <SubHeader>
              <div>BEGINNER</div>
              <div>EXPERTISE</div>
            </SubHeader>
            <div></div>
          </SubcategoryGrid>
          <Divider />
          {count <= 5 && Array(count).fill(<SubCategory />)}
        </ContentWrapper>
        <FooterWrapper>
          <SubHeader>{count <= 5 && count} / 5 </SubHeader>
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="#2EC4B6"
            size="2x"
            style={{ marginLeft: "10px" }}
            onClick={() => setCount(count + 1)}
          />
        </FooterWrapper>
      </CategoryWrapper>
    );
  };

  const hideCategoryContent = () => {
    return (
      <CategoryWrapper>
        <TitleWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>
              <FontAwesomeIcon
                icon={faCaretRight}
                size="lg"
                onClick={() => setDisplay(!display)}
              />
            </span>
            <Title>{title}</Title>
          </div>
          <FontAwesomeIcon icon={faEllipsisH} color="#707070" />
        </TitleWrapper>
      </CategoryWrapper>
    );
  };

  return display ? showCategoryContent() : hideCategoryContent();
};

export default CategoryBox;
