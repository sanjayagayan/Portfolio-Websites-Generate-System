const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')

const getUser = asyncHandler(async(req,res)=>{
    const id = req.params.id
    const user = await User.findOne({username:`${id}`})
    res.status(200).json(user)
})

const addUser = asyncHandler(async(req,res)=>{
    if(!req.body.username){
        res.status(400)
        throw new Error('Please Add a UserName Field')
    }
    const user = await User.create({
        username:      req.body.username ,
        fname:         req.body.fname ,
        lname:         req.body.lname ,
        sdesc:         req.body.sdesc ,
        ldesc:         req.body.ldesc ,
        age:           req.body.age ,
        residence:     req.body.residence ,
        freelance:     req.body.freelance ,
        adrs:          req.body.adrs ,
        phone:         req.body.phone ,
        email:         req.body.email ,
        themeid:       req.body.themeid ,
    })

    res.status(200).json(user)
})

module.exports = {
    getUser,
    addUser
}