/**
 * 文章子应用
 */

const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')
const articleApp = express()

articleApp.get('/list/:id',[article.getListByCategoryId,category.getList],(req, res) => {
	let {articles,categories} = req
	res.render('list',{articles:articles,categories:categories})
})

module.exports = articleApp

