import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
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

const CategoryBox = ({ title }) => {
  return (
    <CategoryWrapper>
      <TitleWrapper>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faCaretRight} size="lg" />
          <Title>{title}</Title>
        </div>
        <FontAwesomeIcon icon={faEllipsisH} color="#707070" />
      </TitleWrapper>
      <div>PLACE HOLDER FOR REST OF CONTENT</div>
    </CategoryWrapper>
  );
};

export default CategoryBox;
