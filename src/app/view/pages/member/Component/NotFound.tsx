import React from "react";
import styled from "styled-components";

const NotFound = ({ children }: any) => {
  return <Container>{children}404페이지</Container>;
};

const Container = styled.div`
  font-size: 100px;
`;

export default NotFound;
