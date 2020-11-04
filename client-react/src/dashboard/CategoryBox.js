import React, { useState } from "react";
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

const StyledDropdown = styled(Dropdown)`
  display: flex;
  z-index: 1000;
  justify-content: space-between;
  @media ${device.mobileL} {
    margin-right: 70px;
  }
`;

const CategoryBox = ({ title }) => {
  const [display, setDisplay] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [count, setCount] = useState(1);
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  //subcategory array
  const subcategoryRender = [];

  for (var i = 0; i < count; i++) {
    // push the component to array!
    if (i === count) {
      subcategoryRender.push(
        <SubCategory
          id="test"
          key={i}
          title={"Sub Category " + (i + 1)}
          animation
        />
      );
    } else {
      subcategoryRender.push(
        <SubCategory key={i} title={"Sub Category " + (i + 1)} />
      );
    }
  }

  const ref = useOnclickOutside(() => {
    setDropdownDisplay(false);
  });

  const timeoutAnimation = () => {
    if (display) {
      setAnimate(false);
      setDisplay(false);
    } else {
      setDisplay(true);
      setAnimate(true);
    }
  };

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
            <StyledDropdown />
          </div>
        )}
      </EllipsisWrapper>
      <StyledCollapse defaultActiveKey="1" onChange={timeoutAnimation}>
        <Panel
          header={title}
          style={{
            fontFamily: "Quicksand",
            fontSize: "15pt",
            backgroundColor: "white",
            padding: "15px",
          }}
        >
          {display && (
            <>
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
                {subcategoryRender}
                <FooterWrapper>
                  <SubHeader>{count} / 5 </SubHeader>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    color="#2EC4B6"
                    size="2x"
                    style={{ marginLeft: "10px" }}
                    onClick={() => setCount(count < 5 ? count + 1 : 5)}
                  />
                </FooterWrapper>
              </ContentWrapper>
            </>
          )}
        </Panel>
      </StyledCollapse>
    </CollapseWrapper>
  );
};

export default CategoryBox;
