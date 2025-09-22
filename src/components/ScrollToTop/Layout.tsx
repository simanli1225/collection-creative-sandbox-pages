// // components/Layout/Layout.tsx
// import * as React from 'react'
// import { Outlet } from 'react-router-dom'
// import ScrollToTop from './ScrollToTop'

// export default function Layout() {
//   return (
//     <>
//       <ScrollToTop />
//       <Outlet />
//     </>
//   )
// }

// components/Layout/Layout.tsx
import * as React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// A tiny error boundary to prevent a blank screen if a child route throws
class Boundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: unknown }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error: unknown) {
    // Capture the error so we can render a friendly fallback
    this.setState({ hasError: true, error });
    // Optional: send to your telemetry here
    // console.error(error)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h3>Oops, something went wrong.</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {String(this.state.error ?? "")}
          </pre>
        </div>
      );
    }
    return this.props.children as any;
  }
}

export default function Layout() {
  return (
    <>
      {/* Render a message for users with JS disabled */}
      <noscript>JavaScript is required to view this site.</noscript>

      {/* Reset scroll position on navigation */}
      <ScrollToTop />

      {/* Load child routes; Suspense shows a lightweight fallback while loading */}
      <React.Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
        <Boundary>
          <Outlet /> {/* Child routes render here */}
        </Boundary>
      </React.Suspense>
    </>
  );
}
