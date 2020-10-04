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
  display: ${(props) => (props.display ? "block" : "none")};
`;

const IconWrapper = styled.span`
  display: ${(props) => (props.display ? "block" : "none")};
`;

const CategoryBox = ({ title }) => {
  const [display, setDisplay] = useState([true, false]);

  const toggleCategory = (index) => {
    setDisplay(
      display.map((x, i) => {
        if (index !== i) {
          x = true;
        } else {
          x = false;
        }
        return x;
      })
    );
  };

  return (
    <CategoryWrapper>
      <TitleWrapper>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconWrapper display={display[0] ? true : false}>
            <FontAwesomeIcon
              icon={faCaretRight}
              size="lg"
              onClick={() => toggleCategory(0)}
            />
          </IconWrapper>
          <IconWrapper display={display[1] ? true : false}>
            <FontAwesomeIcon
              icon={faCaretDown}
              size="lg"
              onClick={() => toggleCategory(1)}
            />
          </IconWrapper>
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

export default CategoryBox;
