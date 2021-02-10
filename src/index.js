import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import Store from "./redux/store";
import App from "./component/App";

ReactDom.render(
<Provider store = {Store}>
<App />
</Provider>, 
document.querySelector("#root"))

