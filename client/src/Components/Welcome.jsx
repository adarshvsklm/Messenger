import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()
  const lightTheme = useSelector((state) => state.themeKey)
  return (
    <div className={`welcome-container ${lightTheme ? '' : 'dark'}`}>
      <b>Hi , 👋</b>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  )
}

export default Welcome
