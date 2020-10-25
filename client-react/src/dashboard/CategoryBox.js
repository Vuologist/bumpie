import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import useOnclickOutside from "react-cool-onclickoutside";
import { device } from "../common/MediaBreakpoints";
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
  justify-content: space-between;
  @media ${device.mobileL} {
    margin-right: 70px;
  }
`;

const CategoryBox = ({ title }) => {
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState(0);
  const [dropdownDisplay, setDropdownDisplay] = useState(false);

  //subcategory array
  const subcategoryRender = [];

  for (var i = 0; i < count; i++) {
    // push the component to array!
    if (count === 1) {
      subcategoryRender.push(<SubCategory key={i} title={title} one />);
    } else {
      subcategoryRender.push(
        <SubCategory key={i} title={"Sub Category " + (i + 1)} />
      );
    }
  }

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
          {subcategoryRender}
        </ContentWrapper>
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
