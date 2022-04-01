import React from "react";
import styled from "styled-components";
import GroupSelectView from "./GroupSelectView";
import Header from "./Header";
import MemberListView from "./MemberListView";


function MemberMainView() {
  return(
    <MainContainer>
       <Header />
       <Bottom>
        <GroupSelectView />
        <MemberListView />
       </Bottom>
     </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
`;
export default MemberMainView;
