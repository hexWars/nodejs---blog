/**
 * 后台文章管理
 */
const express = require('express')
const article = require('../../middleware/article')
const articleApp = express()


articleApp.get('/', [article.getPage], (req, res) => {
	let {user, pageList} = req
	let page = {}
	page.list = pageList
	res.render('admin/article/index', {user: user, page: page})
})

module.exports = articleApp



