import React from 'react'
import "./myStyles.css"
import logo from "../Images/chat-box.png"
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion'
import { authenticateUser } from './authenticateUser';


function Groups() {
    const lightTheme = useSelector((state) => state.themeKey)
    const darkStyle = lightTheme ? '' : 'dark'
    authenticateUser()
    return (
        <AnimatePresence>
            <motion.div
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{ opacity: 1, scale: 1 }}
                // exit={{ opacity: 0, scale: 0 }}
                // transition={{
                //     ease: 'anticipate',
                //     duration: '0.3'
                // }}
                className={`list-container`}>
                <div className={`ug-header ${darkStyle}`}>
                    <img src={logo} style={{ height: '2rem', width: '2rem' }} />
                    <p className={`ug-title ${darkStyle}`}>Available Groups</p>
                </div>
                <div className={`sb-search ${darkStyle}`}>
                    <IconButton >
                        <SearchIcon />
                    </IconButton>
                    <input placeholder='Search' className={`search-box ${darkStyle}`} />
                </div>
                <div className={`ug-list`}>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                            return (
                                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={`list-tem ${darkStyle}`}>
                                    <p className="con-icon">T</p>
                                    <p className={`con-title ${darkStyle}`}>Test User</p>
                                </motion.div>
                            )
                        })
                    }

                </div>
            </motion.div>
        </AnimatePresence>

    )
}

export default Groups
