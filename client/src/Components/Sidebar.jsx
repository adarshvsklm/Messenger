import React, { useState } from 'react'
import "./myStyles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import Conversations from './Conversations';
import { useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';


function Sidebar() {
    // const [lightTheme, setLightTheme] = useState(true)
    const lightTheme = useSelector((state)=>state.themeKey)
     const navigate = useNavigate()
     const dispatch =useDispatch()
    const [conversations, setConversations] = useState([
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
        {
            name: 'Test1',
            lastMessage: 'Last message',
            timeStamp: 'today'
        },
    ])
    return (
        <div className='side-bar-container'>
            <div className={ (lightTheme) ?"sb-header":'sb-header dark'}>
                <div className='other-icons'>
                    <IconButton onClick={() => navigate('/app/chat')}>
                        <AccountCircleIcon className={lightTheme?'icon':'icon dark'}/>
                    </IconButton>
                    <IconButton onClick={() => navigate('/app/users')}>
                        <PersonAddIcon className={lightTheme?'icon':'icon dark'}/>
                    </IconButton>
                    <IconButton onClick={() => navigate('/app/groups')}>
                        <GroupAddIcon className={lightTheme?'icon':'icon dark'}/>
                    </IconButton>
                    <IconButton onClick={() => navigate('/app/create-group')}>
                        <AddCircleIcon className={lightTheme?'icon':'icon dark'}/>
                    </IconButton>
                    <IconButton onClick={()=>{dispatch(toggleTheme())}}>
                        {lightTheme ?
                            <NightlightIcon />
                            : <LightModeIcon className={lightTheme?'icon':'icon dark'}/>
                        }
                    </IconButton>
                </div>
            </div>
            <div className={`sb-search ${lightTheme?'':'dark'}`}>
                <IconButton >
                    <SearchIcon />
                </IconButton>
                <input placeholder='Search' className={`search-box ${lightTheme?'':'dark'}`} />
            </div>
            <div className={`sb-conversations ${lightTheme?'':'dark'}`}>
                {conversations.map((conversation) => {
                    return <Conversations conversation={conversation} key={conversation.name} />
                })}
            </div>

        </div>
    )
}

export default Sidebar
