import React from "react";
import styled from "styled-components";

function NotFound() {
  console.log(404);
  return(
    <Container>404페이지</Container>
  )
}

const Container = styled.div`
  font-size: 100px;
`;

export default NotFound;
