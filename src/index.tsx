///<reference types="webpack-env" />

import React from "react";
import ReactDOM from "react-dom";
import App from "./pages";
import DevApp from "./dev/DevApp";

if (module.hot) {
  // Enable hot module replacement
  module.hot.accept();
}

// Render app independently in devapp
const CreativeSandboxStandalone = document.querySelector(
  "#sandbox-standalone-devapp"
);

if (CreativeSandboxStandalone) {
  ReactDOM.render(<DevApp />, CreativeSandboxStandalone);
}

export default App;
