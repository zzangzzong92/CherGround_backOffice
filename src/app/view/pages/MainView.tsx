import React from "react";
import styled from "styled-components";
import MeetingRoomMain from "./meetingroom/MeetingRoomMain";
import MemberMainView from "./member/Component/MemberMainView";
import SideNav from "./member/Component/SideNav";

function MainView() {
  return (
    <MainContainer>
      <SideNav />
      <MemberMainView />
      <MeetingRoomMain />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

export default MainView;
