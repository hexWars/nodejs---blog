/**
 * 权限子应用
 */
module.exports = {
    /**
     * 从session中读取用户
     */
    getUser: (req, res, next) => {
        // 从session中读取数据
        req.user = req.session.user
        next()
    },
    /**
     * 是否允许用户进入后台管理页
     */
    allowToAdmin:(req,res,next)=>{
        let user = req.session.user
        if(user){
            req.user = user
            next()
        }else{
            res.redirect('/login')
        }
    }
}