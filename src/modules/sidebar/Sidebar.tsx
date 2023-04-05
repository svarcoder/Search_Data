import { useContext } from 'react'
import { DarkModeContext } from '../../logic/context/DarkContext'
import { Img, SidebarContent, SidebarMain, SidebarTitle, SidebarWrap } from './style'
import UserIcon from '../../assets/images/User Icon.svg'
import ProductIcon from '../../assets/images/Product Icon.svg'
import InBoxIcon from '../../assets/images/Inbox Icon.svg'
import SunIcon from '../../assets/images/Sun Icon.svg'
import MoonIcon from '../../assets/images/Moon Icon.svg'

export const SideBarData = [
  {
    id: 0,
    Name: 'Team Members',
    Img: UserIcon,
  },
  {
    id: 1,
    Name: 'Products',
    Img: ProductIcon,
  },
  {
    id: 2,
    Name: 'Inbox',
    Img: InBoxIcon,
  },
]

const Sidebar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <>
      <SidebarWrap theme={darkMode}>
        <SidebarMain mobileView={false}>
          {SideBarData.map((item, i) => (
            <SidebarContent key={item.id} active={i === 0 && true} theme={darkMode}>
              <Img src={item.Img} alt="Sidebar" />
              <SidebarTitle active={i === 0 && true} theme={darkMode}>
                {item.Name}
              </SidebarTitle>
            </SidebarContent>
          ))}
        </SidebarMain>
        <SidebarMain mobileView={false}>
          <SidebarContent onClick={toggleDarkMode} active={darkMode === 'light' ? false : true}>
            <Img src={darkMode === 'light' ? SunIcon : MoonIcon} alt="Sidebar" />
            <SidebarTitle active={darkMode === 'light' ? false : true}>Light Mode</SidebarTitle>
          </SidebarContent>
        </SidebarMain>
      </SidebarWrap>
    </>
  )
}

export default Sidebar
