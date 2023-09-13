import { IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./myStyles.css"
import SendIcon from '@mui/icons-material/Send';
import MessageSelf from './MessageSelf';
import MessageOthers from './MessageOthers';
import { useSelector } from 'react-redux';


function  ChatArea() {
    var props = {name:"Random user",message:'Sample message'}
    const lightTheme = useSelector((state)=>state.themeKey)
    const darkStyle=lightTheme?'':'dark'
    return (
        <div className='chatArea-container'>
            <div className={`chatArea-header ${darkStyle}`}>
                <p className='con-icon' >{props?.name[0]}</p>
                <div className='header-text'>
                    <p className={`con-title ${darkStyle}`} >{props?.name}</p>
                     <p className='con-timeStamp' >{props?.timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon className={darkStyle}/>
                </IconButton>
            </div>
            <div className={`message-container ${darkStyle}`}>
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
            </div>
            <div className={`text-input-area ${darkStyle}`} >
                <input placeholder='Type a Message' className={`search-box ${darkStyle}`} />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea
