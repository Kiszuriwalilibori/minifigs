import ReactDOM from "react-dom";

import "./styles/index.css";
import breakWhenInternetExplorer from "functions/breakWhenInternetExplorer";

import { App, AppProvider } from "components";

breakWhenInternetExplorer();

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,

    document.getElementById("root")
);
