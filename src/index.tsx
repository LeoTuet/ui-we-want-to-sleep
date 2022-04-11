import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "./stores/rootStore";
import App from "./App";
import { Api } from "./network/Api";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "./i18n";

export const store = createStore(new Api());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
