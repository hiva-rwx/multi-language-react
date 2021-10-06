import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import { store } from "./redux/index";
import Home from "./components/Home";
import "./style.scss";
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
};

export default App;
