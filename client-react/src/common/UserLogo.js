import React from "react";
import "./UserLogo.css";
import styled, { keyframes } from "styled-components";
import { rubberBand, tada } from "react-animations";
import HeaderDropdown from "../common/HeaderDropdown";

const tadaAnimation = keyframes`${tada}`;

const StyledDropdown = styled(HeaderDropdown)``;

const Logo = styled.svg`
  enablebackground: "new 0 0 24 24";
  &:hover {
    animation: 2s ${tadaAnimation};
  }
  &:hover ${StyledDropdown} {
    display: flex;
  }
`;
export const UserLogo = props => {
  return (
    <>
      <Logo
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style={{ enableBackground: "new 0 0 24 24" }}
        height="57"
        className="svg"
      >
        <g>
          <circle className="st0 st3" cx="12.5" cy="12.5" r="9.5" />
        </g>
        <g>
          <path
            className="st1 st4"
            d="M7.5,17.5v-1c0-1.8,0.98-3.47,2.55-4.36l0.52-0.29l-0.38-0.46C9.74,10.84,9.5,10.19,9.5,9.5c0-1.65,1.35-3,3-3
    		s3,1.35,3,3c0,0.69-0.24,1.34-0.69,1.89l-0.38,0.46l0.52,0.29c1.57,0.89,2.55,2.56,2.55,4.36v1H7.5z"
          />
          <path
            className="st2 st5"
            d="M12.5,7C13.88,7,15,8.12,15,9.5c0,0.72-0.31,1.25-0.58,1.57l-0.76,0.92l1.04,0.58c1.42,0.8,2.3,2.3,2.3,3.92
    		V17H8v-0.5c0-1.62,0.88-3.12,2.3-3.92l1.04-0.58l-0.76-0.92C10.31,10.75,10,10.22,10,9.5C10,8.12,11.12,7,12.5,7 M12.5,6
    		C10.57,6,9,7.57,9,9.5c0,0.84,0.31,1.6,0.81,2.21C8.13,12.65,7,14.44,7,16.5V18h11v-1.5c0-2.06-1.13-3.85-2.81-4.79
    		C15.69,11.1,16,10.34,16,9.5C16,7.57,14.43,6,12.5,6L12.5,6z"
          />
        </g>
      </Logo>
      <StyledDropdown />
    </>
  );
};

export default UserLogo;
