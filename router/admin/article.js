/**
 * 后台文章管理
 */
const express = require('express')
const articleApp = express()


articleApp.get('/',(req,res)=>{
	res.render('admin/article/index',{user:req.user})
})

module.exports = articleApp



