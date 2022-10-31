import { lazy } from "react";

import { Switch, Route } from "react-router-dom";

import Paths from "../Routing/Paths";
import Awaiting from "js/awaiting";
import IntroPage from "Pages/Intro_Page";

const select = lazy(() => import("Pages/Select_Page"));
const order = lazy(() => import("Pages/Order_Page"));


function App() {
  return (
      <Switch>
        <Route exact path={Paths.intro} component={IntroPage} />
        <Route exact path={Paths.select} component={Awaiting(select)} />
        <Route exact path={Paths.order} component={Awaiting(order)} />
      </Switch>)
   
}
export default App;
