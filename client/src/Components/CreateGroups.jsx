import React from 'react'
import "./myStyles.css"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'; import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

function CreateGroups() {
  const lightTheme = useSelector((state) => state.themeKey)
  const darkStyle = lightTheme ? '' : 'dark'
  return (
    <div className={`createGroups-container ${darkStyle}`} >
      <input placeholder='Enter Group Name' className={`search-box ${darkStyle}`} ></input>
      <IconButton>
        <DoneOutlineIcon />
      </IconButton>
    </div>
  )
}

export default CreateGroups
