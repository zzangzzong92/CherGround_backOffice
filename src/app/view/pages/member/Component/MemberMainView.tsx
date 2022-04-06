import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GroupSelectView from "./GroupSelectView";
import Header from "./Header";
import MemberListView from "./MemberListView";

function MemberMainView({ children }: any) {
  return (
    <MainContainer>
      {children}
      <Header />
      <Bottom>
        <GroupSelectView />
        <MemberListView />
      </Bottom>
    </MainContainer>
  );
}

export default MemberMainView;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
`;
