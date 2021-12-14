/**
 * 用户中间件
 */

const User = require('../model/user')

module.exports = {
    /**
     * 最后一次登录时间
     */
    lastLoginTime: (req, res, next) => {
        User.lastLoginTime().then(results=>{
            req.lastLoginTime = results
            next()
        }).catch(err=>{
            next(err)
        })
    }
}