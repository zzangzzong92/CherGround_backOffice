import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MemberMainView from "./view/pages/member/Component/MemberMainView";
import NotFound from "./view/pages/member/Component/NotFound";
import SideNav from "./view/pages/member/Component/SideNav";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} render={() => <MemberMainView />} />
        <Route path={"/meetingroom"} render={() => <NotFound />} />
      </Switch>

      {/* <Switch>
        <Route path={"/memberlist"} render={() => <MemberMainView />} />
        <Route exact path={"/meetingroom"} render={() => <NotFound />} />
      </Switch> */}
    </BrowserRouter>
  );
};

export default App;
