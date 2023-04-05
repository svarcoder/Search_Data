import styled from 'styled-components'
import { darkTheme, fontSizes, fontWeights, lightTheme, lineHeights, screenSizes } from '../../styles/theme'
import CardBackground from '../../assets/images/Pattern.svg'

export const LanddingWrap = styled.div<{ theme: string }>`
  background: ${({ theme }) => (theme === 'light' ? `${lightTheme.background}` : `${darkTheme.background}`)};
`
export const HomeWrap = styled.div<{ theme: string }>`
  margin-top: 78px;
  margin-left: 252px;
  padding: 25px;
  background: ${({ theme }) => (theme === 'light' ? `${lightTheme.bodyBackground}` : `${darkTheme.bodyBackground}`)};
  border-radius: 16px 0px 0px 0px;
  min-height: 100vh;

  @media (max-width: ${screenSizes.L}px) {
    margin-top: 85px;
    margin-left: 0;
    padding: 20px;
    border-radius: 0px;
  }
`
export const MainWrap = styled.div<{ item?: number }>`
  display: grid;
  grid-template-columns: ${({ item }) => (item === 1 ? '' : 'repeat(4, 1fr)')};
  grid-template-rows: ${({ item }) => (item === 1 ? '' : 'repeat(4, 1fr)')};
  grid-gap: 1rem;
  justify-items: ${({ item }) => (item === 1 ? 'center' : '')};

  @media (max-width: ${screenSizes.XL}px) {
    grid-template-columns: ${({ item }) => (item === 1 ? '' : 'repeat(3, 1fr)')};
    grid-template-rows: ${({ item }) => (item === 1 ? '' : 'repeat(3, 1fr)')};
  }
  @media (max-width: ${screenSizes.S}px) {
    grid-template-columns: ${({ item }) => (item === 1 ? '' : 'repeat(2, 1fr)')};
    grid-template-rows: ${({ item }) => (item === 1 ? '' : 'repeat(2, 1fr)')};
  }
  @media (max-width: ${screenSizes.XS}px) {
    grid-template-columns: repeat(1, 100%);
    justify-items: normal;
  }
`

export const MainContent = styled.div<{ theme: string }>`
  background: url(${CardBackground}),
    ${({ theme }) => (theme === 'light' ? `${lightTheme.cardBackground}` : `${darkTheme.cardBackground}`)};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 22px;
  box-shadow: 0px 1px 16px 1px rgba(17, 24, 39, 0.05);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Profile = styled.div`
  background: #2563eb;
  border-radius: 999px;
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProfileBody = styled.div`
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ProfileTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${fontWeights.L};
  font-size: ${fontSizes.L};
  line-height: ${lineHeights.L};
  color: #ffffff;
`
export const ProfileDataTitle = styled.div<{ theme: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${fontWeights.L};
  font-size: ${fontSizes.S};
  line-height: ${lineHeights.S};
  color: ${({ theme }) => (theme === 'light' ? `${lightTheme.cardTitle}` : `${darkTheme.cardTitle}`)};
`
export const ProfileDesignation = styled.div<{ theme: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${fontWeights.M};
  font-size: ${fontSizes.XXS};
  line-height: ${lineHeights.XXS};
  color: ${({ theme }) => (theme === 'light' ? `${lightTheme.cardDesignation}` : `${darkTheme.cardDesignation}`)};
`
