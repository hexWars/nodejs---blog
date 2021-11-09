
/**
 * 文章数据模型
 */

module.exports = class Article extends require('./model') {
	/**
	 * 获取文章列表
	 * @param num
	 * @returns {Promise<unknown>}
	 */
	static getHot(num) {
		return new Promise((resolve,reject)=>{
			let sql = 'select id,title,content,`time` from article where hot = 1 limit ?'
			this.query(sql,num).then(results=>{
				resolve(results)
			}).catch(err=>{
				console.log('获取热门文章失败: ${err.message}')
				reject(err)
			})
		})
	}

	/**
	 * 获取文章列表
	 */
	static getList() {
		return new Promise((resolve,reject)=>{
			let sql = 'select id,title,content,`time` from article order by time desc'
			this.query(sql).then(results=>{
				resolve(results)
			}).catch(err=>{
				console.log('获取文章列表失败: ${err.message}')
				reject(err)
			})
		})
	}

	/**
	 * 获取指定目录文章列表
	 * @param id
	 * @returns {Promise<unknown>}
	 */
	static getListByCategoryId(id) {
		return new Promise((resolve,reject)=>{
			let sql = 'select id,`title`,content from article where category_id = ? order by `time` desc'
			this.query(sql, id).then(results=>{
				resolve(results)
			}).catch(err=>{
				console.log('获取指定目录文章列表失败: ${err.message}')
				reject(err)
			})
		})
	}


}






