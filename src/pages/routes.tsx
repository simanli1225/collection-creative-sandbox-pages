// // router.tsx
// import React from "react";
// import Layout from "../components/ScrollToTop/Layout";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import HomePage from "./home";
// import JeffPage from "./jeffkoons";
// import RickPage from "./rickrubin";
// import BjorkPage from "./bjork";
// import MagnumPage from "./magnum";
// import BrucePage from "./brucegilden";
// import JacobPage from "./jacobAueSobol";
// import OliviaPage from "./oliviaArthur";
// import SabihaPage from "./saibihaCimen";
// import WilliamPage from "./williamKeo";
// import StevePage from "./SteveMccurry";

// const routes = [
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "jeffkoons", element: <JeffPage /> },
//       { path: "rickrubin", element: <RickPage /> },
//       { path: "bjork", element: <BjorkPage /> },
//       { path: "magnum", element: <MagnumPage /> },
//       { path: "bruce-gilden", element: <BrucePage /> },
//       { path: "jacob-aue-sobol", element: <JacobPage /> },
//       { path: "olivia-arthur", element: <OliviaPage /> },
//       { path: "sabiha-cimen", element: <SabihaPage /> },
//       { path: "william-keo", element: <WilliamPage /> },
//       { path: "steve-mccurry", element: <StevePage /> },
//     ],
//   },
// ];

// export default routes;

// src/pages/router.tsx
import React from "react";
import type { RouteObject } from "react-router-dom";
import Layout from "../components/ScrollToTop/Layout";

import HomePage from "./home";
import JeffPage from "./jeffkoons";
import RickPage from "./rickrubin";
import BjorkPage from "./bjork";
import MagnumPage from "./magnum";
import BrucePage from "./brucegilden";
import JacobPage from "./jacobAueSobol";
import OliviaPage from "./oliviaArthur";
import SabihaPage from "./saibihaCimen";
import WilliamPage from "./williamKeo";
import StevePage from "./SteveMccurry";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <div style={{ padding: 24 }}>Something went wrong.</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "jeffkoons", element: <JeffPage /> },
      { path: "rickrubin", element: <RickPage /> },
      { path: "bjork", element: <BjorkPage /> },
      { path: "magnum", element: <MagnumPage /> },
      { path: "bruce-gilden", element: <BrucePage /> },
      { path: "jacob-aue-sobol", element: <JacobPage /> },
      { path: "olivia-arthur", element: <OliviaPage /> },
      { path: "sabiha-cimen", element: <SabihaPage /> },
      { path: "william-keo", element: <WilliamPage /> },
      { path: "steve-mccurry", element: <StevePage /> },
      { path: "*", element: <div style={{ padding: 24 }}>Not Found</div> },
    ],
  },
];

export default routes;
