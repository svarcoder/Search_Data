import React, { createContext, useMemo, useState } from 'react'

interface AppContextType {
  darkMode: string
  toggleDarkMode: () => void
}

/**
 * Represents create context with toggle function and value.
 * @DarkModeContext
 */
const DarkModeContext = createContext<AppContextType>({
  darkMode: 'light',
  toggleDarkMode: () => undefined,
})

/**
 * Represents create provider for getting value.
 * @DarkModeProvider
 */
const DarkModeProvider: React.FC = (props) => {
  const [darkMode, setDarkMode] = useState<string>('light')

  const toggleDarkMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark')
    } else {
      setDarkMode('light')
    }
  }

  const ContextValue = useMemo(() => ({ darkMode, toggleDarkMode }), [darkMode])

  return (
    <>
      <DarkModeContext.Provider value={ContextValue}>{props.children}</DarkModeContext.Provider>
    </>
  )
}

export { DarkModeProvider, DarkModeContext }
