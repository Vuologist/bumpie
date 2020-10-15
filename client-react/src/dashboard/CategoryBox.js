import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import useOnclickOutside from "react-cool-onclickoutside";
import { device } from "../common/MediaBreakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faEllipsisH,
  faCaretDown,
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

const EllipsisWrapper = styled.div`
  position: relative;
  justify-self: flex-end;
  margin-right: 5px;
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
  @media ${device.mobileL} {
    margin-right: 70px;
  }
`;

const CategoryBox = ({ title }) => {
  const [display, setDisplay] = useState(false);
  const [dropdownDisplay, setDropdownDisplay] = useState(false);

  const ref = useOnclickOutside(() => {
    setDropdownDisplay(false);
  });

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
        </TitleWrapper>
        <ContentWrapper>
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
          <EllipsisWrapper ref={ref}>
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
        </TitleWrapper>
      </CategoryWrapper>
    );
  };

  return display ? showCategoryContent() : hideCategoryContent();
};

export default CategoryBox;
