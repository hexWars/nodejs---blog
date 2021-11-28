
/**
 * 访问量模型
 */

module.exports = class PV extends require('./model') {

	/**
	 * 获取总访问量
	 */
	static getToTal() {
		return new Promise((resolve,reject)=>{
			let sql = 'select sum(hits) total from  pv'
			this.query(sql).then(results=>{
				resolve(results[0].total)
			}).catch(err=>{
				console.log('获取总访问量: ${err.message}')
				reject(err)
			})
		})
	}

	/**
	 * 获取全部访问量
	 */
	static getAll() {
		return new Promise((resolve,reject)=>{
			let sql = 'select time,hits from pv order by time asc'
			this.query(sql).then(results=>{
				resolve(results)
			}).catch(err=>{
				console.log('获取全部访问量: ${err.message}')
				reject(err)
			})
		})
	}





}


