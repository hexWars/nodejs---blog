/**
 * 文章子应用
 */

const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')
const articleApp = express()

articleApp.use(category.getList)

articleApp.get('/list/:id', [article.getListByCategoryId, category.getCategoryById], (req, res) => {
	let {articles, categories, category} = req
	res.render('list', {articles: articles, categories: categories, category: category})
})

articleApp.get('/:id',article.getArticleById, (req, res) => {
	let {categories,article} = req
	res.render('article', {categories: categories,article:article})
})

module.exports = articleApp

