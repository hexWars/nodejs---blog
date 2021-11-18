/**
 * 登录子应用
 */

const express = require('express')
const User = require("../model/user")



// 首页子应用
const loginApp = express()

loginApp.get('/',(req, res) => {
	res.render('login',{msg:''})
})

loginApp.post('/',(req,res,next) => {
	let {username,password} = req.body
	User.login(username,password).then(result=>{
		console.log(username + " -- " + password)
		if (result) {
			res.redirect('/')
		} else {
			res.render('login',{msg:'登录失败! 用户名或者密码错误'})
		}

	}).catch(err => {
		next(err)
	})
})

module.exports = loginApp

