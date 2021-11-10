const Article = require('../model/article')

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
	getHot : (req,res,next) => {
		Article.getHot(3).then(results=>{
			req.hots = results
			next()
		}).catch(err=>{
			next(err)
		})
	},
	/**
	 * 最新文章获取
	 */
	getList:(req,res,next)=>{
		Article.getList().then(results=>{
			req.articles = results
			next()
		}).catch(err=>{
			next(err)
		})
	},
	/**
	 * 获取最新指定类目录下的文章
	 */
	getListByCategoryId:(req,res,next)=>{
		let id = req.params.id
		Article.getListByCategoryId(id).then(results=>{
			req.articles = results
			next()
		}).catch(err=>{
			next(err)
		})
	},
	/**
	 * 获取指定关键词的文章列表
	 */
	getListByKeywrod:(req,res,next)=>{
		let Keyword = req.query.keyword
		Article.getListByKeywrod(Keyword).then(results=>{
			req.articles = results
			next()
		}).catch(err=>{
			next(err)
		})
	},
	/**
	 * 获取指定文章详情
	 */
	getArticleById:(req,res,next)=>{
		let {id} = req.params
		Article.getArticleById(id).then(results=>{
			req.article = results
			next()
		}).catch(err=>{
			next(err)
		})
	}
}






