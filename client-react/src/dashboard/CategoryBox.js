import React, { useState, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import Dropdown from "./Dropdown";
import useOnclickOutside from "react-cool-onclickoutside";
import { device } from "../common/MediaBreakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubCategory from "./SubCategory";
import { slideOutUp, slideInDown } from "react-animations";
import { faEllipsisH, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Collapse, { Panel } from "rc-collapse";
import "rc-collapse/assets/index.css";
import DynamicButton from "../common/DynamicButton";

const slideOutUpAnimation = keyframes`${slideOutUp}`;
const slideInDownAnimation = keyframes`${slideInDown}`;

const StyledCollapse = styled(Collapse)`
  &.rc-collapse {
    width: 100%;
    border-radius: 0px;
    border-color: transparent;
    > .rc-collapse-item-active .rc-collapse-header .arrow {
      position: relative;
      top: 2px;
      border-left: 5px solid transparent !important;
      border-right: 5px solid transparent !important;
      border-top: 8px solid #666 !important;
      margin-right: 6px;
    }
    > .rc-collapse-item {
      border: 0px;
      > .rc-collapse-header {
        color: #8fe8df !important;
        background-color: #fff !important;
        > .arrow {
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 8px solid #666;
        }
      }
    }
    .rc-collapse-header:focus {
      border: 0px;
      outline: none;
    }
  }
`;

const outAnimation = css`
  animation: 0.5s ${slideOutUpAnimation};
`;
const slideInAnimation = css`
  animation: 0.5s ${slideInDownAnimation};
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  ${(props) => (props.animate ? slideInAnimation : outAnimation)};
`;

const CollapseWrapper = styled.div`
  margin-bottom: 25px;
`;

const Divider = styled.hr`
  margin-top: 5px;
  margin-bottom: 5px;
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

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EllipsisWrapper = styled.div`
  position: relative;
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  z-index: 200;
  @media ${device.mobileM} {
    justify-self: end;
    margin-right: 10px;
  }
  @media ${device.mobileL} {
    margin-right: 25px;
    justify-self: end;
  }
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
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

const StyledDropdown = styled(Dropdown)`
  display: flex;
  z-index: 1000;
  justify-content: space-between;
  @media ${device.mobileL} {
    margin-right: 70px;
  }
`;

const SaveButton = styled(DynamicButton)`
  background-color: #2ec4b6;
  color: white;
  border-radius: 16px;
  padding: 6px 40px 6px 40px;
  margin-left: 5px;
`;

const CategoryBox = ({ title, onChange, data, one, onTitleChange, key }) => {
  const [animate, setAnimate] = useState(false);
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeKey, setActiveKey] = useState(2);
  const [subEdit, setSubEdit] = useState(false);

  if (data.length === 0) {
    onChange([{ title: "Sub Category " + (data.length + 1), value: 0 }]);
  }

  const addSubCat = () => {
    const renderArr = [...data];
    renderArr.push({
      title: "Sub Category " + (data.length + 1),
      value: 0,
    });
    onChange(renderArr);
  };

  const ref = useOnclickOutside(() => {
    setDropdownDisplay(false);
  });

  const saveClick = () => {
    onTitleChange(inputRef.current.value);
    setIsEditing(false);
    setSubEdit(false);
  };

  const onEdit = (type) => {
    // Open the collapsed panel and animate
    setActiveKey(1);
    setAnimate(true);
    // Show input and hide dropdown after click
    if (type === "Category") {
      setIsEditing(true);
      setSubEdit(false);
    }

    if (type === "Sub") {
      setSubEdit(true);
      setIsEditing(false);
    }
    setDropdownDisplay(false);
  };

  const onSubEdit = (event, i) => {
    const renderArr = [...data];
    renderArr[i].title = event.target.value;
    onChange(renderArr);
  };

  const onCollapse = () => {
    // Toggle the animation
    setAnimate(!animate);

    // Logic for opening and closing panel
    if (activeKey === 1) {
      setActiveKey(2);
    } else {
      setActiveKey(1);
    }
  };

  // Remove sub category
  const onDelete = (key) => {
    // FUCK REFERENCES
    const renderArr = [...data];
    // ACTUALLY REMOVE ANIMATION
    if (renderArr.length > 1) {
      renderArr.splice(key, 1);
    }
    // CALC THE NEW COUNT && SET ANIMATION TO ABSOLUTELY NOTHING THEN RERENDER
    onChange(renderArr);
  };

  const onSliderChange = (i, sliderKey) => {
    const renderArr = [...data];
    // update value with new slider val
    renderArr[i].value = sliderKey;
    onChange(renderArr);
  };

  const inputRef = useRef(null);

  return (
    <CollapseWrapper>
      <EllipsisWrapper>
        <FontAwesomeIcon
          icon={faEllipsisH}
          color="#707070"
          onClick={() => setDropdownDisplay(!dropdownDisplay)}
        />
        {dropdownDisplay && (
          <div ref={ref}>
            <StyledDropdown
              onEdit={() => onEdit("Category")}
              onSubEdit={() => onEdit("Sub")}
            />
          </div>
        )}
      </EllipsisWrapper>
      <StyledCollapse
        defaultActiveKey="1"
        onChange={() => onCollapse()}
        activeKey={activeKey}
      >
        <Panel
          header={
            isEditing ? (
              <StyledInput type="text" placeholder={title} ref={inputRef} />
            ) : (
              <>{title}</>
            )
          }
          style={{
            fontFamily: "Quicksand",
            fontSize: "15pt",
            backgroundColor: "white",
            padding: "15px",
          }}
          disabled={isEditing || subEdit ? true : false}
          key="1"
        >
          <ContentWrapper animate={animate}>
            <SubcategoryGrid>
              <SubHeader>
                <span>SUB-CATEGORIES</span>
              </SubHeader>
              <SubHeader>
                <div>BEGINNER</div>
                <div>EXPERTISE</div>
              </SubHeader>
            </SubcategoryGrid>
            <Divider />
            {data.map((subcat, i) => {
              return (
                <SubCategory
                  key={i}
                  title={subcat.title}
                  onDelete={() => onDelete(i)}
                  value={subcat.value}
                  onAfterChange={(sliderVal) => onSliderChange(i, sliderVal)}
                  one={one}
                  edit={subEdit}
                  onSubEdit={(event) => onSubEdit(event, i)}
                />
              );
            })}
            <FooterWrapper>
              <SubHeader>{data.length} / 5 </SubHeader>
              <FontAwesomeIcon
                icon={faPlusCircle}
                color="#2EC4B6"
                size="2x"
                style={{ marginLeft: "10px" }}
                onClick={() => addSubCat()}
              />
              {(isEditing || subEdit) && (
                <SaveButton text="save" onClick={() => saveClick()} />
              )}
            </FooterWrapper>
          </ContentWrapper>
        </Panel>
      </StyledCollapse>
    </CollapseWrapper>
  );
};

export default CategoryBox;
