//moment used to format time 
const moment=require('moment')
const log=(req,res,next)=>{
    console.log(`${req.protocol}//${req.get('host')}${req.originalUrl}:${moment().format()}`)
    next()
}

module.exports=log