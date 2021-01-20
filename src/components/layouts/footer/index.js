import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 64px;
  line-height: 64px;
  vertical-align: middle;
  margin-top: 100px;
  position: fixed;
  bottom: 0;
  color: black;

  font-size: 18px;

  width: 100%;
  background-color: #fff;
  font-size: 16px;
  border-top: 1px solid #d2d2d2;
`;

const Title = styled.div`
  padding-right: 15px;
`;

const OutSideAnchor = styled.a`
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  padding-right: 15px;
`;

const openInNewTab = (url) => {
  let win = window.open(url, "_blank");
  win.focus();
};

const Footer = () => {
  return (
    <Container>
      <Title>Mattress Shop Page - 2020</Title>
      <OutSideAnchor onClick={() => openInNewTab("https:/github.com/dsmurl")}>
        MyGitHub
      </OutSideAnchor>
    </Container>
  );
};

export default Footer;
