import React from "react";
import styled from "styled-components";

const NotFound = ({ children }: any) => {
  return <Container>{children}안돼 돌아가</Container>;
};

const Container = styled.div`
  font-size: 100px;
`;

export default NotFound;
