import React, { useState } from 'react'
import "./myStyles.css"
import logo from "../Images/chat-box.png"
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { config, endPoint } from './config'
import { toast } from 'react-toastify'


function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({})
    const handleLogin = async () => {
        try {
            console.log(form)
            if (!form.name || !form.password) {
                toast.error('Please Enter all the details')
                return
            }
            const response = await axios.post(`${endPoint}/user/login`, form, config)
            console.log(response)
            localStorage.setItem("userData", JSON.stringify(response?.data));
            toast.success("Login Success")
            navigate('/app/welcome')
        } catch (err) {
            console.log(err)
            if (err.response.data.data == 'Invalid Username or Password') {
                toast.error("Invalid Username or Password")
            } else {
                toast.error("Something went wrong")
            }
        }
    }
    return (
        <div className='login-container'>
            <div className="image-container">
                <img src={logo} alt="Logo" className='login-logo' />
            </div>
            <div className="login-box">
                <p className='login-text'>Login to your Account</p>
                <TextField onClick={(e) => setForm({ ...form, name: e.target.value })} id="standard-basic" label="Enter Username" variant="outlined" />
                <TextField onClick={(e) => setForm({ ...form, password: e.target.value })} id="standard-basic" label="Enter Password" variant="outlined" type='password' />
                <Button onClick={handleLogin} variant='outlined'>Login</Button>
                <p>
                    Don't have an Account ?
                    <span
                        className="hyper"
                        onClick={() => {
                            navigate('/signup');
                        }}
                    >
                        Signup
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login
