/**
 * 后台文章管理
 */
const express = require('express')
const article = require('../../middleware/article')
const articleApp = express()


articleApp.get('/', [article.getPage,article.getCount], (req, res, next) => {
	let {articleCount} = req
	req.page = {}
	let size = 5
	req.page.count = articleCount
	req.page.total = Math.ceil(req.page.count / size)
	req.page.list = pageList
	req.page.p = req.query.p?req.query.p:1
	req.page.p = req.page.p > req.page.total ? req.page.total : req.page.p
	req. page.p = req.page.p < 1 ? 1 : req.page.p

	res.start = (req.page.p - 1) * size
	res.size = size

	next()
}, article.getPage,(req,res)=>{
	let {user, pageList, page} = req
	page.list = pageList
	res.render('admin/article/index', {user: user, page: page})
})

module.exports = articleApp



