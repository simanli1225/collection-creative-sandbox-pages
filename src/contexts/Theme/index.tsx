import React, { createContext, useContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const ThemeContext = createContext( Theme.DARK )
ThemeContext.displayName = 'ThemeContext'

export function useTheme() {
  return useContext( ThemeContext )
}

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme,
  children: React.ReactNode,
}) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
