import { HamSection, HeadTitle, HeaderWrap, Image, Input, Logo, SearchComp } from './style'
import { DarkModeContext } from '../../logic/context/DarkContext'
import { useContext, useState } from 'react'
import Search from '../../assets/images/Search Icon.svg'
import HamIcon from '../../assets/images/ham.png'
import HamIconBlack from '../../assets/images/Ham Black.png'
import Menu from './Burger'

type HeaderProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ setQuery }: HeaderProps) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <HeaderWrap theme={darkMode}>
        <HamSection onClick={() => setShow(!show)}>
          <Logo src={darkMode === 'light' ? HamIconBlack : HamIcon} alt="Hamburger" />
          <HeadTitle theme={darkMode}>Team Members</HeadTitle>
        </HamSection>

        <SearchComp>
          <Input theme={darkMode} placeholder="Search..." onChange={(event) => setQuery(event.target.value)} />
          <Image src={Search} alt="Search" />
        </SearchComp>
        {show && <Menu show={show} setShow={setShow} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
      </HeaderWrap>
    </>
  )
}

export default Header
