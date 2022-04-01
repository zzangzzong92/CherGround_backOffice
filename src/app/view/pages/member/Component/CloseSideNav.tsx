import React from "react";
import styled from "styled-components";

function CloseSideNav() {
  return(
    <CloseSideNavContainer>
      <ArrowButtonBox></ArrowButtonBox>
      <BusinessButtonBox></BusinessButtonBox>
      <UserButtonBox></UserButtonBox>
      <EtcButtonBox></EtcButtonBox>
      <BackOfficeButtonBox></BackOfficeButtonBox>
    </CloseSideNavContainer>
  )
}

const CloseSideNavContainer = styled.div`
  width: 56px;
  height: 1060px;
  display: flex;
  flex-direction: column;
  background-color: #F3F5F9;
`;

const ArrowButtonBox = styled.div`
  height: 63px;
  border-bottom: 1px solid rgba(51, 56, 64, 0.12);
`;

const BusinessButtonBox = styled.div`
  height: 200px;
`;
const UserButtonBox = styled.div`
  height: 268px;
`;
const EtcButtonBox = styled.div`
  height: 222px;
`;
const BackOfficeButtonBox = styled.div`
  height: 130px;
`;

export default CloseSideNav;