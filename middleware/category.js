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
	}
}




