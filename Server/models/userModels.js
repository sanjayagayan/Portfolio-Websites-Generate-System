const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:      { type: String, required: true } ,
    fname:         { type: String, required: true } ,
    lname:         { type: String, required: true } ,
    sdesc:         { type: String, required: true } ,
    ldesc:         { type: String, required: true } ,
    age:           { type: Number, required: true } ,
    residence:     { type: String, required: true } ,
    freelance:     { type: Boolean, required: true } ,
    adrs:          { type: String, required: true } ,
    phone:         { type: String, required: true } ,
    email:         { type: String, required: true } ,
    services:      [{ name: String, desc: String }],
    themeid:       { type: Number,  required: true },
    // experience:    [{ pos: String, company: String,  sdate: Date, edate: Date, desc:String}],
    // skills:        [{ name: String, percentage: Number }],
    // portfolio:     [{ url: String, title: String, desc:String }],
    
},
{
    timestamps:true
}
)

module.exports = mongoose.model('User',userSchema)