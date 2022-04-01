import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MemberMainView from "./view/pages/member/Component/MemberMainView";
import NotFound from "./view/pages/member/Component/NotFound";
import SideNav from "./view/pages/member/Component/SideNav";

const App: React.FC = () => {
	// tslint:disable-next-line: indent
  return(
		// 리액트는 단일페이지(spa)이기때문에 라우터가 필요하다
		// 리액트는 주소가 없는데 라우트의 path가 주소처럼 보이게 눈속임을 하는것

		//BrowserRouter는 spa의 장점인 브라우저가 깜빡이지 않고 페이지 이동을 시키는 것
		<BrowserRouter>
			{/* <Wrapper> */}
				{/* 메인페이지를 따로 가지고 있지 않기때문에 사이드바는 모든페이지에서 동일한 부분이라고 판다 */}
				{/* 사이드바를 제외한 오른쪽페이지에서 이동한 페이지를 랜더링 */}
				{/* 메인페이지는 로고를 눌렀을 때 나와야 할거고, 내부구성원과 미팅룸 뿐만 아니라 다른 페이지들도 나와야하기에 */}
				{/* <SideNav /> */}
				{/* switch는 쉽게 말해서 switch가 가지고 있는 route를 원하는 경로로 이동했을 때 */}
				{/* 해당 페이지를 갈아끼워주는 역할 */}
				<Switch>
					<Route path={"/"} render={() => <SideNav />} />
					{/* 스위치 이하들을 children으로 받아올 컴포넌트가 존재 */}
						<Switch>
							<Route path={"/memberlist"} render={() => <MemberMainView />} />
							<Route path={"/meetingroom"} render={() => <NotFound />}/>
						</Switch>
				</Switch>
		</BrowserRouter>
	);
};

export default App;