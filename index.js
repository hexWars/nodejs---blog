/**
 * 程序入口
 */


const express = require('express')

// 创建主应用
const app = express()

// 模板引擎的设置,解释:以html为后缀的文件用ejs来渲染
app.set('view engine','html')
// 设置路径
app.set('views','${__dirname}/views')
// 绑定
app.engine('html', require('ejs').renderFile)

//静态资源配置
app.use(express.static('static'))

//登录post请求处理
app.use(express.urlencoded({extended:true}))

// 调用首页子应用
app.use('/',require('./router/index'))
app.use('/index',require('./router/index'))
app.use('/article',require('./router/article'))
app.use('/search',require('./router/search'))
app.use('/login',require('./router/login'))

// 监听服务器
app.listen(3000)






