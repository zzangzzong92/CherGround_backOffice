import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./view/pages/loginNsignup/SignIn";
import SignUp from "./view/pages/loginNsignup/SignUp";
import MeetingRoomMain from "./view/pages/meetingroom/MeetingRoomMain";
import CloseSideNav from "./view/pages/member/Component/CloseSideNav";
import MemberMainView from "./view/pages/member/Component/MemberMainView";
import NotFound from "./view/pages/member/Component/NotFound";
import SideNav from "./view/pages/member/Component/SideNav";
import UserMainView from "./view/pages/member/Component/UserMainView";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/signin"} render={() => <SignIn />} />
          <Route path={"/signup"} render={() => <SignUp />} />

          <Route exact path="/" render={() => <UserMainView />} />
          <Route path="/group/:id" render={() => <MemberMainView />} />
          <Route path={"/meetingroom"} render={() => <MeetingRoomMain />} />

          <Route component={NotFound} />
        </Switch>

        {/* <Switch>
          <Route path={"/"} render={() => <SideNav />}
            <Switch>
              <Route path={"/memberlist"} render={() => <MemberMainView />} />
              <Route exact path={"/meetingroom"} render={() => <NotFound />} />
            </Switch>
          </Route>
        </Switch> */}
      </BrowserRouter>
    </>
  );
};

export default App;
