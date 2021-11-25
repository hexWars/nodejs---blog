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
	},
	/**
	 * 是否允许用户进入后台
	 */
	allowToAdmin:(req,res,next)=>{
		let user = req.session.user
		if (user) {
			req.user = user
			next()
		} else {
			res.redirect('/login')
		}
	}
}



