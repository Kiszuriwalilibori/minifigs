import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { breakWhenInternetExplorer } from "functions";
//import * as serviceWorker from "./service-worker";
import { register } from "./serviceWorkerRegistration";
import { App, AppProvider } from "components";

breakWhenInternetExplorer();

// ReactDOM.render(
//     <AppProvider>
//         <App />
//     </AppProvider>,

//     document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
    <AppProvider>
        <App />
    </AppProvider>
);

register();
