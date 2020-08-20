import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "./navbar";

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const ContentWrapper = styled.div`
  margin: 0px auto;
  width: 90%;
  padding-bottom: 100px;
  flex: 1;
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #ffd217;
  justify-content: center;
  display: flex;
  align-items: center;
  color: #ff4d4d;
`;

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer>© {new Date().getFullYear()} BUMPIE. All Rights Reserved.</Footer>
    </PageContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
