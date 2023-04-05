import './App.css'
import { ThemeProvider } from 'styled-components'
import { getTheme, Themes } from '../../styles/theme'
import { GlobalStyle } from '../../styles/globalStyle'
import Home from '../home/Home'
import { DarkModeProvider } from '../../logic/context/DarkContext'

export const App = () => {
  const currentTheme = { ...getTheme(Themes.LIGHT), selected: Themes.LIGHT }

  return (
    <DarkModeProvider>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </DarkModeProvider>
  )
}
