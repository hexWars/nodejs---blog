/**
 * 文章子应用
 */

const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')
const auth = require('../middleware/auth')

const articleApp = express()

articleApp.use(category.getList, auth.getUser)

articleApp.get('/list/:id', [article.getListByCategoryId, category.getCategoryById], (req, res) => {
	let {articles, categories, category, user} = req
	res.render('list', {articles: articles, categories: categories, category: category, user: user})
})
// 文章详情页
articleApp.get('/:id', [article.getArticleById, article.getTabs, article.getLast, article.getNext], (req, res) => {
	let {categories, article, tabs, last, next, user} = req
	res.render('article', {categories: categories, article: article, tabs: tabs, last: last, next: next, user: user})
})


module.exports = articleApp

