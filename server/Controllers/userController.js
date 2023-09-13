const express = require('express');
const UserModel = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../Config/generateToken');


const loginController = asyncHandler(async (req, res) => {
    const { name, password } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({ name })
    console.log(user)
    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
            .json({ data: 'Invalid Username or Password' })
        throw new Error("Invalid Username or Password")
    }
})
const registerController = asyncHandler(
    async (req, res) => {

        const { name, email, password } = req.body;
        console.log(name, email, password, 'credentials')
        if (!name || !email || !password) {
            throw new Error("All necessary input fields have been not filled")
        }
        const userexists = await UserModel.findOne({ email })
        if (userexists) {
            throw new Error("User already exists")
        }

        const isUserNameTaken = await UserModel.findOne({ name })
        if (isUserNameTaken) {
            throw new Error("UserName already taken")
        }

        const user = await UserModel.create({ name, email, password })
        console.log(user)
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user?.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error("Registration Error")
        }
    }
)

const fetchAllUsersController = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: '1' } },
                { email: { $regex: req.query.search, $options: '1' } }
            ]
        } : {}
    const users = await UserModel.find(keyword).find({
        _id: { $ne: req.user._id }
    })
    res.send(users)
})


module.exports = {
    loginController,
    registerController,
    fetchAllUsersController
}