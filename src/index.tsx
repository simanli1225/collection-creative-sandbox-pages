///<reference types="webpack-env" />

<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages";
import DevApp from "./dev/DevApp";
=======
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages'
import DevApp from './dev/DevApp'
// import './styles/index.less'
>>>>>>> dd0a2effb871cfe46aa11965ebbf6d303b85df0b

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
