import loadable from "@loadable/component";
import { Routes, Route } from "react-router-dom";

import { Paths } from "../routes/paths";
import IntroPage from "pages/Intro_Page";

const SelectPage = loadable(() => import("pages/Select_Page"));
const OrderPage = loadable(() => import("pages/Order_Page"));
const NoPage = loadable(() => import("pages/No_Page"));

function App() {
    return (
        <Routes>
            <Route path={Paths.intro} element={<IntroPage />} />
            <Route path={Paths.select} element={<SelectPage />} />
            <Route path={Paths.order} element={<OrderPage />} />
            <Route path={Paths.nopage} element={<NoPage />} />
        </Routes>
    );
}
export default App;
