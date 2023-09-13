import React, { useState } from 'react'
import "./myStyles.css"
import logo from "../Images/chat-box.png"
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { config, endPoint } from './config'
function Signup() {
    const [form, setForm] = useState({})

    const navigate = useNavigate()
    const handleSignup = async () => {
        try {
            console.log(form)
            if (!form.name || !form.password || !form.email) {
                toast.error('Please Enter all the details')
                return
            }
            const response = await axios.post(`${endPoint}/user/register`, form, config)
            console.log(response)
            localStorage.setItem("userData", JSON.stringify(response?.data));
            toast.success("Registration Success")
            navigate('/app/welcome')
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong")
        }
    }
    return (
        <div className='login-container'>
            <div className="image-container">
                <img src={logo} alt="Logo" className='login-logo' />
            </div>
            <div className="login-box">
                <p className='login-text'>Create your account</p>
                <TextField onChange={(e) => setForm({ ...form, name: e.target.value })} id="standard-basic" label="Enter name" variant="outlined" />
                <TextField onChange={(e) => setForm({ ...form, email: e.target.value })} id="standard-basic" label="Enter Email Address" variant="outlined" />
                <TextField onChange={(e) => setForm({ ...form, password: e.target.value })} id="standard-basic" label="Enter Password" variant="outlined" type='password' />
                <Button onClick={handleSignup} variant='outlined'>Signup</Button>
                <p>
                    Already have an Account ?
                    <span
                        className="hyper"
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        Log in
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Signup
