
/**
 * 标签数据模型
 */

module.exports = class Tab extends require('./model') {

	/**
	 * 获取指定文章的消息列表
	 */
	static getListArticleId(id) {
		return new Promise((resolve,reject)=>{
			let sql = 'select id,name from tabs where article_id = ?'
			this.query(sql,id).then(results=>{
				resolve(results)
			}).catch(err=>{
				console.log('获取指定文章的消息列表失败: ${err.message}')
				reject(err)
			})
		})
	}





}


