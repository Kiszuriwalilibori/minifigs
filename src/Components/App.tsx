import { lazy } from "react";

import { Switch, Route } from "react-router-dom";

import Paths from "../Routing/Paths";
import Awaiting from "js/awaiting";
import IntroPage from "Pages/Intro_Page";

const Select_Page = lazy(() => import("Pages/Select_Page"));
const Order_Page = lazy(() => import("Pages/Order_Page"));

function App() {
    return (
        <Switch>
            <Route exact path={Paths.intro} component={IntroPage} />
            <Route exact path={Paths.select} component={Awaiting(Select_Page)} />
            <Route exact path={Paths.order} component={Awaiting(Order_Page)} />
        </Switch>
    );
}
export default App;
