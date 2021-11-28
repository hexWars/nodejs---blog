/**
 * 后台类目管理
 */
const express = require('express')
const categoryApp = express()


categoryApp.get('/',(req,res)=>{
	res.render('admin/category/index',{user:req.user})
})

module.exports = categoryApp



