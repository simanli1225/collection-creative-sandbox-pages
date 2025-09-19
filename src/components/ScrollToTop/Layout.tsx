// components/Layout/Layout.tsx
import * as React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}
