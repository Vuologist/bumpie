import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faEllipsisH,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
const CategoryWrapper = styled.div`
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

const ContentWrapper = styled.div`
  margin-left: 30px !important;
  margin: 10px;
`;

const CategoryBox = ({ title }) => {
  const [display, setDisplay] = useState(false);

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
        <ContentWrapper display={display[1] ? true : false}>
          <div style={{ height: "50px" }}>PLACE HOLDER FOR REST OF CONTENT</div>
        </ContentWrapper>
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
