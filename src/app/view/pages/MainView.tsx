import React from "react";
import styled from "styled-components";
import MemberListView from "./member/Component/MemberListView";
import NotFound from "./member/Component/NotFound";
import SideNav from "./member/Component/SideNav";

export function MainView() {
	return(
		<MainContainer>
			<SideNav />
		</MainContainer>
	);
}

const MainContainer = styled.div`
	display: flex;
  width: 100%;
`;

export default MainView;

