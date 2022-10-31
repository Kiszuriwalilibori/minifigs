import ReactDOM from "react-dom";

import "./styles/index.css";
import breakWhenInternetExplorer from "js/breakWhenInternetExplorer";


import {App, AppProvider}  from "Components";


breakWhenInternetExplorer();

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,

  document.getElementById("root")
);





