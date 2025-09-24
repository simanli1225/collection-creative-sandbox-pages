// // ///<reference types="webpack-env" />

// // import React from "react";
// // import ReactDOM from "react-dom";
// // import App from "./pages";
// // import DevApp from "./dev/DevApp";
// // // import './styles/index.less'

// // if (module.hot) {
// //   // Enable hot module replacement
// //   module.hot.accept();
// // }

// // // Render app independently in devapp
// // const CreativeSandboxStandalone = document.querySelector(
// //   "#sandbox-standalone-devapp"
// // );

// // if (CreativeSandboxStandalone) {
// //   ReactDOM.render(<DevApp />, CreativeSandboxStandalone);
// // }

// // export default App;

// /// <reference types="webpack-env" />

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./pages";
// import DevApp from "./dev/DevApp";

// if (module && module.hot) {
//   module.hot.accept();
// }

// const devMount = document.getElementById("sandbox-standalone-devapp");
// const root = document.getElementById("root");

// if (process.env.NODE_ENV !== "production" && devMount) {
//   ReactDOM.render(<DevApp />, devMount);
// } else {
//   if (!root) throw new Error('Missing <div id="root"></div> in index.html');
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     root
//   );
// }

/// <reference types="webpack-env" />

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./pages";
import DevApp from "./dev/DevApp";

if (typeof module !== "undefined" && (module as any).hot) {
  (module as any).hot.accept();
}

const devMount = document.getElementById("sandbox-standalone-devapp");
const rootEl = document.getElementById("root");

if (process.env.NODE_ENV !== "production" && devMount) {
  ReactDOM.render(<DevApp />, devMount);
} else {
  if (!rootEl) throw new Error('Missing <div id="root"></div> in index.html');
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootEl
  );
}
