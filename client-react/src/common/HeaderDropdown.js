import React from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { useHistory, Link } from "react-router-dom";
import { device } from "../common/MediaBreakpoints";
import { useAppContext } from "../libs/contextLib";
import DynamicButton from "../common/DynamicButton";

const Card = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  z-index: 300 !important;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  position: absolute;
  left: 50%;
  right: auto;
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
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CustomLink = styled(Link)`
  color: black !important;
`;

const HeaderDropdown = ({ className }) => {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();

  const handleLogout = async () => {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/sign-in");
  };

  return (
    <Card className={className}>
      <ListGroup>
        <ListItem>
          <CustomLink to="/notification-settings">
            Notification Settings
          </CustomLink>
        </ListItem>
        <ListItem>
          <CustomLink to="/user-settings">User Settings</CustomLink>
        </ListItem>
        <ListItem>
          <DynamicButton text="Log Out" type="button" onClick={handleLogout} />
        </ListItem>
      </ListGroup>
    </Card>
  );
};

export default HeaderDropdown;
