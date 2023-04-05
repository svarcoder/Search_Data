import { HamMenu, Logo, StyledMenu } from './style'
import CloseIcon from '../../assets/images/close.png'
import { Img, SidebarContent, SidebarMain, SidebarTitle } from '../sidebar/style'
import { SideBarData } from '../sidebar/Sidebar'
import SunIcon from '../../assets/images/Sun Icon.svg'
import MoonIcon from '../../assets/images/Moon Icon.svg'
import CloseIconBlack from '../../assets/images/Cross Black.png'

type MenuProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: string
  toggleDarkMode: () => void
}

const Menu = ({ show, setShow, darkMode, toggleDarkMode }: MenuProps) => {
  return (
    <StyledMenu theme={darkMode}>
      <HamMenu onClick={() => setShow(!show)}>
        <Logo src={darkMode === 'light' ? CloseIconBlack : CloseIcon} alt="Ham" />
      </HamMenu>
      <SidebarMain mobileView={true}>
        {SideBarData.map((item, i) => (
          <SidebarContent key={item.id} active={i === 0 && true} theme={darkMode}>
            <Img src={item.Img} alt="Sidebar" />
            <SidebarTitle active={i === 0 && true} theme={darkMode}>
              {item.Name}
            </SidebarTitle>
          </SidebarContent>
        ))}
      </SidebarMain>
      <SidebarMain mobileView={true}>
        <SidebarContent onClick={toggleDarkMode} active={darkMode === 'light' ? false : true}>
          <Img src={darkMode === 'light' ? SunIcon : MoonIcon} alt="Sidebar" />
          <SidebarTitle active={darkMode === 'light' ? false : true}>Light Mode</SidebarTitle>
        </SidebarContent>
      </SidebarMain>
    </StyledMenu>
  )
}
export default Menu
