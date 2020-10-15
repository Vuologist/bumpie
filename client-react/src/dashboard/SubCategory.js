import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const SubcategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
`;
const SubcategoryTitle = styled.p`
  font-size: 12pt;
  margin-bottom: 0px;
  margin-top: -6px;
`;
const GridDiv = styled.div`
  margin-top: 15px;
  &:last-child {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
`;
const Divider = styled.hr`
  margin-top: 20px;
  margi-bottom: 20px;
`;

const SubCategory = ({ title }) => {
  return (
    <>
      <SubcategoryWrapper>
        <GridDiv>
          <SubcategoryTitle>{title}</SubcategoryTitle>
        </GridDiv>
        <GridDiv>
          <Slider
            railStyle={{
              height: 2,
            }}
            handleStyle={{
              height: 28,
              width: 28,
              marginLeft: -14,
              marginTop: -14,
              backgroundColor: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              border: 0,
            }}
            trackStyle={{
              backgroundColor: "#707070",
            }}
          />
        </GridDiv>
        <GridDiv>
          <FontAwesomeIcon icon={faMinusCircle} size="lg" color="#2EC4B6" />
        </GridDiv>
      </SubcategoryWrapper>
      <Divider />
    </>
  );
};

export default SubCategory;
