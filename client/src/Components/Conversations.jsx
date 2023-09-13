import React from 'react'
import "./myStyles.css"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Conversations({ conversation }) {
  const lightTheme = useSelector((state) => state.themeKey)
  const navigate = useNavigate()
  return (
    <div className={lightTheme ? 'conversation-container' : 'conversation-container dark'} onClick={() => navigate('/app/chat')} >
      <p className='con-icon' >{conversation.name[0]}</p>
      <p className={`con-title ${lightTheme?'':'dark'}`} >{conversation.name}</p>
      <p className={`con-lastMessage ${lightTheme?'':'dark'}`} >{conversation.lastMessage}</p>
      <p className={`con-timeStamp ${lightTheme?'':'dark'}`} >{conversation.timeStamp}</p>
    </div>
  )
}

export default Conversations
