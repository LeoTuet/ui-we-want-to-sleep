import "./index.css";
import "./i18n";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Api } from "./network/Api";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "./stores/rootStore";

export const store = createStore(new Api());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
