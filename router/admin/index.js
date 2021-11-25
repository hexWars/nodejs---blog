/**
 * 后台首页
 */
const express = require('express')
const indexApp = express()


indexApp.get('/',(req, res) => {
	res.render('admin/index')
})




module.exports = indexApp



