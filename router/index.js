/**
 * 首页子应用(首页路由)
 */

const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')

// 首页子应用
const indexApp = express()

// 渲染index模板,加载首页
indexApp.get('/', [article.getHot, article.getList, category.getList], (req, res) => {
	let {hots, articles, categories} = req
	res.render('index', {hots: hots, articles: articles, categories: categories})
	// res.render('index',{hots:req.hots,articles:req.articles})
})

module.exports = indexApp

