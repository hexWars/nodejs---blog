const Article = require('../model/article')
const Tab = require('../model/tab')

/**
 * 文章中间件
 * @type {{getHot: exports.getHot}}
 */
module.exports = {
	/**
	 * 获取热门文章
	 * @param req
	 * @param res
	 * @param next
	 */
	getHot: (req, res, next) => {
		Article.getHot(3).then(results => {
			req.hots = results
			next()
		}).catch(err => {
			next(err)
		})
	},
	/**
	 * 最新文章获取
	 */
	getList: (req, res, next) => {
		Article.getList().then(results => {
			req.articles = results
			next()
		}).catch(err => {
			next(err)
		})
	},
	/**
	 * 获取最新指定类目录下的文章
	 */
	getListByCategoryId: (req, res, next) => {
		let id = req.params.id
		Article.getListByCategoryId(id).then(results => {
			req.articles = results
			next()
		}).catch(err => {
			next(err)
		})
	},
	/**
	 * 获取指定关键词的文章列表
	 */
	getListByKeywrod: (req, res, next) => {
		let Keyword = req.query.keyword
		Article.getListByKeywrod(Keyword).then(results => {
			req.articles = results
			next()
		}).catch(err => {
			next(err)
		})
	},
	/**
	 * 获取指定文章详情
	 */
	getArticleById: (req, res, next) => {
		let {id} = req.params
		Article.getArticleById(id).then(results => {
			req.article = results
			next()
		}).catch(err => {
			next(err)
		})
	},
	/**
	 * 获取指定的文章标签列表
	 */
	getTabs: (req, res, next) => {
		let id = req.params.id
		Tab.getListArticleId(id).then(results => {
			req.tabs = results
			next()
		}).catch(err => {
			next(err)
		})
	},
	/**
	 * 上一篇文章
	 * @param req
	 * @param res
	 * @param next
	 */
	getLast: (req, res, next) => {
		let id = req.params.id
		Article.getLastArticle(id).then(results => {
			req.last = results
			next()
		}).catch(err => {
			next(err)
		})
	},
	/**
	 * 下一篇文章
	 * @param req
	 * @param res
	 * @param next
	 */
	getNext: (req, res, next) => {
		let id = req.params.id
		Article.getNextArticle(id).then(results => {
			req.next = results;
			next();
		}).catch(err => {
			next(err)
		})
	},

	/**
	 *
	 */
	getCount: (req, res, next) => {
		Article.getCount().then(results => {
			req.articleCount = results
			next()
		}).catch(err => {
			next(err)
		})
	},

	/**
	 * 获取指定文章列表
	 */
	getPage: (req, res, next) => {
		Article.getPage(res.start,res.size).then(results => {
			req.pageList = results
			next()
		}).catch(err => {
			next(err)
		})
	}

}






