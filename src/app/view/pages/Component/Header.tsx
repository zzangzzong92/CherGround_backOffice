import React from "react";
import styled from "styled-components";

function Header() {
  return(
    <HeaderContainer>
      <SelectGroup>내부구성원</SelectGroup>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: block;
  height: 63px;
  margin: 20px 0 0 2px;
  color: rgba(44, 50, 61, 0.87);
`;

const SelectGroup = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 32px;
`;
export default Header;
