import React, { useEffect, useState } from 'react'
import "./myStyles.css"
import logo from "../Images/chat-box.png"
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { endPoint } from './config';
import RefreshIcon from '@mui/icons-material/Refresh';

function Users() {
    const [refresh, setRefresh] = useState(true)
    const [users, setUsers] = useState([])
    const userData = JSON.parse(localStorage.getItem("userData"));
    useEffect(() => {
        console.log("Users refreshed");
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        };
        axios.get(`${endPoint}/user/fetchUsers`, config).then((data) => {
            console.log("UData refreshed in Users panel ", data.data);
            setUsers(data.data);
            // setRefresh(!refresh);
        });
    }, [refresh]);
    const lightTheme = useSelector((state) => state.themeKey)
    const darkStyle = lightTheme ? '' : 'dark'
    return (
        <div className='list-container'>
            <div className={`ug-header ${darkStyle}`}>
                <img src={logo} style={{ height: '2rem', width: '2rem' }} />
                <p className={`ug-title ${darkStyle}`}>Online Users</p>
                <IconButton onClick={() => setRefresh(!refresh)} className={lightTheme?'':'dark'} style={{alignSelf:'end'}}>
                    <RefreshIcon />
                </IconButton>
            </div>
            <div className={`sb-search ${darkStyle}`}>
                <IconButton >
                    <SearchIcon />
                </IconButton>
                <input placeholder='Search' className={`search-box ${darkStyle}`} />
            </div>
            <div className="ug-list">
                {users &&
                    users.map((user) => {
                        return (
                            <div className={`list-tem ${darkStyle}`}>
                                <p className="con-icon">{user?.name[0]}</p>
                                <p className={`con-title ${darkStyle}`}>{user?.name}</p>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Users
