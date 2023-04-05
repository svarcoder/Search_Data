import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import {
  HomeWrap,
  LanddingWrap,
  MainContent,
  MainWrap,
  Profile,
  ProfileBody,
  ProfileDataTitle,
  ProfileDesignation,
  ProfileTitle,
} from './style'
import Data from '../../assets/data/MOCK_DATA.json'
import { useContext, useState } from 'react'
import { DarkModeContext } from '../../logic/context/DarkContext'

type DataProps = {
  _id: number
  first_name: string
  last_name: string
  department: string
}

const Home = () => {
  const { darkMode } = useContext(DarkModeContext)
  const [query, setQuery] = useState<string>('')

  const FilterData = Data.filter((item: DataProps) => {
    if (query === '') {
      return Data
    } else if (item?.first_name.toLowerCase().includes(query.toLowerCase())) {
      return Data
    }
  })

  return (
    <LanddingWrap theme={darkMode}>
      <Header setQuery={setQuery} />
      <Sidebar />
      <HomeWrap theme={darkMode}>
        <MainWrap item={FilterData.length}>
          {FilterData.map((item) => (
            <MainContent key={item._id} theme={darkMode}>
              <Profile>
                <ProfileTitle>{`${item.first_name.charAt(0)}${item.last_name.charAt(0)}`}</ProfileTitle>
              </Profile>
              <ProfileBody>
                <ProfileDataTitle theme={darkMode}>{`${item.first_name} ${item.last_name}`}</ProfileDataTitle>
                <ProfileDesignation theme={darkMode}>{item.department}</ProfileDesignation>
              </ProfileBody>
            </MainContent>
          ))}
        </MainWrap>
      </HomeWrap>
    </LanddingWrap>
  )
}

export default Home
