/**
 * 后台首页
 */
const express = require('express')
const indexApp = express()
const user = require('../../middleware/user')

indexApp.get('/',user.lastLoginTime,(req, res) => {
	res.render('admin/index',{user:req.user,lastLoginTime:req.lastLoginTime})
})




module.exports = indexApp



