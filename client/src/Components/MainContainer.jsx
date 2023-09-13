import React from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authenticateUser } from './authenticateUser'
function MainContainer() {
  const lightTheme = useSelector((state) => state.themeKey)
  const darkStyle = lightTheme ? '' : 'dark-main-container'
  const isValidUser = authenticateUser()
  if (isValidUser) {

    return (
      <div className={`main-container ${darkStyle}`} >
        <Sidebar />
        <Outlet />
        {/* <CreateGroups /> */}
        {/* <Welcome /> */}
        {/* <ChatArea /> */}
        {/* <Users_Groups /> */}
      </div>
    )
  } else {
    return <></>
  }
}

export default MainContainer
