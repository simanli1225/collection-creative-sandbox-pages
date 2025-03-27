import React, { createContext, useContext, useState } from 'react'

// Define context structure
interface LanguagePickerContextProps {
  isLanguagePickerOpen: boolean; // Whether LanguagePicker is open
  toggleLanguagePicker: () => void; // Function to toggle LanguagePicker
  footerZIndex: number; // Current z-index for Footer
}

// Create context
const LanguagePickerContext = createContext<
LanguagePickerContextProps | undefined
>(undefined)

export const LanguagePickerProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLanguagePickerOpen, setIsLanguagePickerOpen] = useState(false)
  const [footerZIndex, setFooterZIndex] = useState(99)

  const toggleLanguagePicker = () => {
    const newState = !isLanguagePickerOpen
    setIsLanguagePickerOpen(newState)
    setFooterZIndex(newState ? 9999 : 99) // Update z-index dynamically
  }

  return (
    <LanguagePickerContext.Provider
      value={{
        isLanguagePickerOpen,
        toggleLanguagePicker,
        footerZIndex,
      }}
    >
      {children}
    </LanguagePickerContext.Provider>
  )
}

// Custom hook to use the context
export const useLanguagePicker = () => {
  const context = useContext(LanguagePickerContext)
  if (!context) {
    throw new Error(
      'useLanguagePicker must be used within a LanguagePickerProvider'
    )
  }
  return context
}
