
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

	/**
	 * 获取指定关键词的文章列表
	 * @param Keyword
	 * @returns {Promise<unknown>}
	 */
	static getListByKeywrod(Keyword) {
		return new Promise((resolve,reject)=>{
			let sql = 'select id,title,content,`time` from article where title like ? order by time desc'
			this.query(sql, `%${Keyword}%`).then(results=>{
				resolve(results)
			}).catch(err=>{
				console.log('获取指定关键词的文章列表失败: ${err.message}')
				reject(err)
			})
		})
	}

	/**
	 * 获取指定文章详情
	 * @param id
	 */
	static getArticleById(id) {
		return new Promise((resolve,reject)=>{
			let sql = 'select a.id,a.title,a.content,a.`time`,a.hits,a.`category_id`,c.`name`,a.`thumbnail`,a.`hot` from article a,category c where a.id = ? and a.category_id = c.id'
			this.query(sql, id).then(results=>{
				resolve(results[0])
			}).catch(err=>{
				console.log('获取指定文章详情失败: ${err.message}')
				reject(err)
			})
		})
	}

	/**
	 * 获取上一篇文章
	 * @param id
	 * @returns {Promise<unknown>}
	 */
	static getLastArticle(id) {
		return new Promise((resolve,reject)=>{
			let sql = 'select id,title from article where id < ? order by id desc limit 1'
			this.query(sql, id).then(results=>{
				resolve(results[0])
			}).catch(err=>{
				console.log('获取上一篇文章失败: ${err.message}')
				reject(err)
			})
		})
	}

	/**
	 * 获取下一篇文章
	 * @param id
	 * @returns {Promise<unknown>}
	 */
	static getNextArticle(id) {
		return new Promise((resolve,reject)=>{
			let sql = 'select id,title from article where id > ? order by id asc limit 1'
			this.query(sql, id).then(results=>{
				resolve(results[0])
			}).catch(err=>{
				console.log('获取下一篇文章失败: ${err.message}')
				reject(err)
			})
		})
	}


	/**
	 * 总博文数
	 * @param
	 * @returns {Promise<unknown>}
	 */
	static getCount() {
		return new Promise((resolve,reject)=>{
			let sql = 'select count(1) as `count` from article'
			this.query(sql).then(results=>{
				resolve(results[0].count)
			}).catch(err=>{
				console.log('总博文数: ${err.message}')
				reject(err)
			})
		})
	}


}






