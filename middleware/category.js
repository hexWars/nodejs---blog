const Category = require('../model/category')

/**
 * 文章类目录中间件
 * @type {{getHot: exports.getHot}}
 */
module.exports = {

	/**
	 * 最新文章获取
	 */
	getList: (req, res, next) => {
		Category.getList().then(results => {
			req.categories = results
			next()
		}).catch(err => {
			next(err)
		})
	},

	/**
	 * 最新指定文章类目详情
	 */
	getCategoryById: (req, res, next) => {
		let id = req.params.id
		Category.getCategoryById(id).then(results => {
			req.category = results
			next()
		}).catch(err => {
			next(err)
		})
	}
}




