import React, { useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import Slider from "rc-slider";
//import { slideOutUp, slideInDown } from "react-animations";
import "rc-slider/assets/index.css";

const SubcategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
`;
const SubcategoryTitle = styled.p`
  color: ${(props) => (props.one ? "#a6a6a6" : "black")};
  font-size: 12pt;
  margin-bottom: 0px;
  margin-top: -6px;
`;
const GridDiv = styled.div`
  margin-top: ${(props) => (props.edit ? "5px" : "15px")};
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

const StyledInput = styled.input`
  display: block;
  height: 34px;
  padding: 6px 12px;
  font-size: 15pt;
  line-height: 1.42857143;
  color: #2ec4b6;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 7px;
  z-index: 200;
`;

const SubCategory = ({
  title,
  one,
  onDelete,
  onAfterChange,
  edit,
  onSubEdit,
  value,
  i,
}) => {
  const inputRef = useRef(null);
  return (
    <>
      <SubcategoryWrapper>
        <GridDiv edit={edit}>
          {edit ? (
            <StyledInput
              type="text"
              placeholder={title}
              onChange={() => onSubEdit(inputRef.current.value, i)}
              ref={inputRef}
            />
          ) : (
            <SubcategoryTitle one={one}>{title}</SubcategoryTitle>
          )}
        </GridDiv>
        <GridDiv>
          <Slider
            railStyle={{
              height: 2,
            }}
            handleStyle={{
              height: 28,
              width: 28,
              marginLeft: 0,
              marginTop: -14,
              backgroundColor: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              border: 0,
            }}
            trackStyle={{
              backgroundColor: "#707070",
            }}
            onAfterChange={onAfterChange}
            defaultValue={value}
          />
        </GridDiv>
        <GridDiv>
          <FontAwesomeIcon
            icon={faMinusCircle}
            size="lg"
            color="#2EC4B6"
            onClick={onDelete}
          />
        </GridDiv>
      </SubcategoryWrapper>
      <Divider />
    </>
  );
};

export default SubCategory;
