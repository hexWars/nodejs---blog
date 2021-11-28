/**
 * 后台首页
 */
const express = require('express')
const indexApp = express()
const user = require('../../middleware/user')
const pv = require('../../middleware/pv')
const category   = require('../../middleware/category')
const article   = require('../../middleware/article')

indexApp.get('/',[user.lastLoginTime,pv.getTotal,category.getCount,article.getCount],(req, res) => {
	let {user,lastLoginTime,pvTotal,articleCount,categoryCount} = req
	res.render('admin/index',{user:user,lastLoginTime:lastLoginTime,pvTotal:pvTotal,articleCount:articleCount,categoryCount:categoryCount})
})




module.exports = indexApp



