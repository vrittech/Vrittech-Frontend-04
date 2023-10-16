import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppComponent />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
