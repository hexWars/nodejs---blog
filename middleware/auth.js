/**
 * 权限子应用
 */

module.exports = {
	/**
	 * 从session中读取用户
	 * @param req
	 * @param res
	 * @param next
	 */
	getUser: (req, res, next) => {
		req.user = req.session.user
		next()
	}
}



