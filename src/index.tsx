import ReactDOM from "react-dom";

import "./styles/index.css";
import { breakWhenInternetExplorer } from "functions";
//import * as serviceWorker from "./service-worker";
import { register } from "./serviceWorkerRegistration";
import { App, AppProvider } from "components";

breakWhenInternetExplorer();

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,

    document.getElementById("root")
);

register();
