import styled from 'styled-components'
import { darkTheme, fontSizes, fontWeights, lightTheme, lineHeights, screenSizes } from '../../styles/theme'

export const SidebarWrap = styled.div<{ theme: string }>`
  position: fixed;
  z-index: 2;
  height: 100%;
  background: ${({ theme }) => (theme === 'light' ? `${lightTheme.background}` : `${darkTheme.background}`)};
  border-radius: 0px;
  width: 252px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-right: 10px;
  padding-bottom: 22px;

  @media (max-width: ${screenSizes.L}px) {
    display: none;
  }
`
export const SidebarMain = styled.div<{ mobileView: boolean }>`
  margin-top: ${({ mobileView }) => (mobileView === false ? '88px' : '')};
`
export const SidebarContent = styled.div<{ active?: boolean; theme: string }>`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${({ active, theme }) =>
    active ? (theme === 'light' ? `${lightTheme.activeBackground}` : `${darkTheme.activeBackground}`) : ''};
  border-radius: ${({ active }) => (active ? '0px 8px 8px 0px' : '')};
  cursor: pointer;
`
export const Img = styled.img`
  margin-right: 10px;
`
export const SidebarTitle = styled.div<{ active?: boolean; theme: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${fontWeights.M};
  font-size: ${fontSizes.S};
  line-height: ${lineHeights.S};
  color: ${({ active, theme }) =>
    active
      ? theme === 'light'
        ? `${lightTheme.activeTitle}`
        : `${darkTheme.activeTitle}`
      : theme === 'light'
      ? `${lightTheme.title}`
      : `${darkTheme.title}`};
`
