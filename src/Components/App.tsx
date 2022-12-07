import loadable from "@loadable/component";
import { Switch, Route } from "react-router-dom";

import { Paths } from "../routes/paths";
import IntroPage from "pages/Intro_Page";

const Select_Page = loadable(() => import("pages/Select_Page"));
const Order_Page = loadable(() => import("pages/Order_Page"));

function App() {
    return (
        <Switch>
            <Route exact path={Paths.intro} component={IntroPage} />
            <Route exact path={Paths.select} component={Select_Page} />
            <Route exact path={Paths.order} component={Order_Page} />
        </Switch>
    );
}
export default App;
