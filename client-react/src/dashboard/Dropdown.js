import React from "react";
import styled from "styled-components";
import { device } from "../common/MediaBreakpoints";
const Card = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  position: absolute;
  left: 50%;
  right: auto;
  width: 130px;
  text-align: center;
  transform: translate(-50%, 0);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
  @media ${device.mobileL} {
    left: 0%;
  }
`;

const ListGroup = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-right: 0;
  border-left: 0;
  list-style-type: none;
  border-radius: 0;
`;

const ListItem = styled.li`
  border-top: 0;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 0px;
  &:hover {
    background-color: #2ec4b6;
  }
`;

const CustomLink = styled.p`
  color: black !important;
  font-size: 10pt;
  margin-bottom: 5px;
`;

const Dropdown = ({ className, onEdit, onSubEdit }) => {
  return (
    <Card className={className}>
      <ListGroup>
        <ListItem>
          <CustomLink onClick={onEdit}>Rename Category</CustomLink>
        </ListItem>
        <ListItem>
          <CustomLink onClick={onSubEdit}>Edit Sub-Categories</CustomLink>
        </ListItem>
      </ListGroup>
    </Card>
  );
};

export default Dropdown;
