const { stack } = require("../routes/userRoutes")

const errorHandler = (err,req,res,next)=>{
    const stausCode = res.stausCode ? res.stausCode : 500
    res.json({
        message : err.message,
        stack : process.env.NODE_ENV === 'production' ? null : err.stack
    })
}
module.exports = {
    errorHandler
}