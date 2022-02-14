import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "./stores/rootStore";
import App from "./App";
import { Api } from "./network/Api";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={createStore(new Api())}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
