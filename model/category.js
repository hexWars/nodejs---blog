
/**
 * 文章类目录数据模型
 */

module.exports = class Category extends require('./model') {

	/**
	 * 获取文章类目录列表
	 */
	static getList() {
		return new Promise((resolve,reject)=>{
			let sql = 'select id,`name` from category order by `index` desc '
			this.query(sql).then(results=>{
				resolve(results)
			}).catch(err=>{
				console.log('获取文章列表失败: ${err.message}')
				reject(err)
			})
		})
	}

	/**
	 * 获取指定编号的类目详情
	 */
	static getCategoryById(id) {
		return new Promise((resolve,reject)=>{
			let sql = 'select id,`name`,`index` from category where id = ?'
			this.query(sql,id).then(results=>{
				resolve(results[0])
			}).catch(err=>{
				console.log('获取指定编号的类目详情失败: ${err.message}')
				reject(err)
			})
		})
	}




}






