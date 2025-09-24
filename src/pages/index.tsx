// import React from "react";
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createHashRouter, RouterProvider } from "react-router-dom";

// import routes from "./routes";

// import Layout from "../components/ScrollToTop/Layout";
// import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// // const router = createBrowserRouter(routes)
// const router = createHashRouter(routes);

// const App = () => {
//   // return <>
//   // <RouterProvider router={router} /></>

//   return (
//     <React.Suspense fallback={<div>loading...</div>}>
//       <RouterProvider router={router} />
//     </React.Suspense>
//   );
// };

// export default App;
// src/pages/index.tsx
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createHashRouter(routes);

const App = () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <RouterProvider router={router} />
  </React.Suspense>
);

export default App;
