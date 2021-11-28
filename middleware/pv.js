/**
 * 访问量中间件
 */

const Pv = require('../model/pv')

module.exports = {
	/**
	 * 获取总访问量
	 * @param req
	 * @param res
	 * @param next
	 */
	getTotal : (req,res,next)=>{
		Pv.getToTal().then(results=>{
			req.pvTotal = results
			next()
		}).catch(err=>{
			next(err)
		})
	},

	/**
	 * 获取全部访问量
	 * @param req
	 * @param res
	 * @param next
	 */
	getAll : (req,res,next)=>{
		Pv.getAll().then(results=>{
			req.pvs = results
			next()
		}).catch(err=>{
			next(err)
		})
	}


}



