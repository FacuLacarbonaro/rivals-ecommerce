import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./Main.jsx";
import Basket from "./Components/Basket/Basket";
import store, { persistor } from "./redux/store";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
