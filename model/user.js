/**
 * 用户数据模型
 */


module.exports = class User extends require('./model') {
	/**
	 * 用户登录
	 * @param username
	 * @param password
	 * @returns {Promise<unknown>}
	 */
	static login(username,password) {
		return new Promise((resolve,reject) => {
			console.log(username + " -- " + password)
			let sql = "select id,username from user where username = ? and password = ?";
			this.query(sql,[username,password]).then(results=>{
				resolve(results[0])
			}).catch(err=>{
				console.log("登录失败" + err)
				reject(err)
			})
		})

	}
}


