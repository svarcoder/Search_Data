import styled from 'styled-components'
import { darkTheme, fontSizes, fontWeights, lightTheme, lineHeights, screenSizes } from '../../styles/theme'

export const HeaderWrap = styled.div<{ theme: string }>`
  background: ${({ theme }) => (theme === 'light' ? `${lightTheme.background}` : `${darkTheme.background}`)};
  border-radius: 0px;
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22.5px;
`
export const HeadTitle = styled.div<{ theme: string }>`
  margin-left: 256px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${fontWeights.L};
  font-size: ${fontSizes.M};
  line-height: ${lineHeights.M};
  color: ${({ theme }) => (theme === 'light' ? `${lightTheme.headerTitle}` : `${darkTheme.headerTitle}`)};

  @media (max-width: ${screenSizes.L}px) {
    margin-left: 0;
  }

  @media (max-width: ${screenSizes.XS}px) {
    font-size: ${fontSizes.XXS};
  }
`
export const SearchComp = styled.div`
  position: relative;
`
export const Input = styled.input<{ theme: string }>`
  height: 32px;
  width: 256px;
  background: ${({ theme }) =>
    theme === 'light' ? `${lightTheme.searchBackground}` : `${darkTheme.searchBackground}`};
  border: ${({ theme }) =>
    theme === 'light' ? `1px solid ${lightTheme.headerBorder}` : `1px solid ${darkTheme.headerBorder}`};
  border-radius: 8px;
  padding: 10px;
  :focus {
    border-color: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none;
  }

  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${fontWeights.L};
    font-size: ${fontSizes.XXS};
    line-height: ${lineHeights.XXS};
    color: ${({ theme }) => (theme === 'light' ? `${lightTheme.searchTitle}` : `${darkTheme.searchTitle}`)};
  }

  @media (max-width: ${screenSizes.XS}px) {
    width: 100%;
  }
`
export const Image = styled.img`
  position: absolute;
  top: 20%;
  right: 4%;
`

export const HamSection = styled.div`
  display: flex;
  align-items: center;
`
export const Logo = styled.img`
  display: none;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  @media (max-width: 1024px) {
    display: block;
  }
`

export const StyledMenu = styled.div<{ theme: string }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => (theme === 'light' ? `${lightTheme.background}` : `${darkTheme.background}`)};
  width: 250px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding-right: 10px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    height: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(black, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(white, 0.6);
    border-radius: 5px;
    border: none;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

export const HamMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`
