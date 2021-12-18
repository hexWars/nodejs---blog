create database blog;

use blog;

create table article
(
    id          int auto_increment comment '编号'
        primary key,
    title       varchar(255)                         not null comment '标题',
    content     longtext                             not null comment '正文',
    time        timestamp  default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '发表时间',
    hot         tinyint(1) default 0                 not null comment '0:非热门 1:热门',
    hits        int        default 0                 not null comment '点击量',
    category_id int                                  not null comment '类目编号',
    thumbnail   varchar(255)                         null comment '缩略图'
)
    comment '文章表' collate = utf8_unicode_ci;

INSERT INTO blog.article (id, title, content, time, hot, hits, category_id, thumbnail) VALUES (1, '这是一篇默认博文', '<p>蔡伟杰,李天宇,李佳阳小组作业</p><p>后台地址:ip+端口+/admin/</p><p>默认账号:admin</p><p>默认密码:123456</p><figure class="image"><img src="/upload/43cadbd66cf0cfbdd1567efb61942d83.png"></figure><p>&nbsp;</p>', '2021-12-17 15:40:48', 1, 0, 5, '/upload/146e44c3bf3c935cf3afe41b043f69f5.png');
INSERT INTO blog.article (id, title, content, time, hot, hits, category_id, thumbnail) VALUES (2, '博文写作指南', '<p>打开后台</p><figure class="image"><img src="/upload/09044471db864a063834235b0612810d.png"></figure><p>点击文章管理,再点击发表文章</p><figure class="image"><img src="/upload/d5e6c89709d72c4f8151d627b9379cb5.png"></figure><p>&nbsp;</p><p>在这里可以使用富文本编辑器进行文章发布</p><p>&nbsp;</p>', '2021-12-17 15:40:48', 1, 0, 5, '/upload/6195b9603649a83dadc3f2208f69d9da.jpg');
INSERT INTO blog.article (id, title, content, time, hot, hits, category_id, thumbnail) VALUES (3, '不足之处', '<p>没有初始化的用户的功能</p><p>图标更改</p><p>社交信息更改</p><p>评论模块没有,以及点赞</p><p>友链模块</p><p>相册模块</p><p>公告模块</p><p>整合stmp邮箱服务</p><p>相册</p><p>live2d多模型选择</p><p>界面不够美观</p><p>博客数据导入导出</p><p>logo和个性化处理(例如标签雷达图,倒计时等)</p><p>不支持makedown</p><p>标签功能不完善</p>', '2021-12-17 15:43:18', 1, 0, 5, '/upload/a5ba840923583bd4e3f9ef4956506f4d.jpg');

create table category
(
    id      int auto_increment comment '编号'
        primary key,
    name    varchar(50)   not null comment '类目名称',
    `index` int default 0 not null comment '排序，值越大越靠前'
)
    comment '文章类目表' collate = utf8_unicode_ci;

INSERT INTO blog.category (id, name, `index`) VALUES (1, 'Css', 1);
INSERT INTO blog.category (id, name, `index`) VALUES (2, 'JavaScript', 2);
INSERT INTO blog.category (id, name, `index`) VALUES (3, 'Java', 3);
INSERT INTO blog.category (id, name, `index`) VALUES (4, 'Go', 4);
INSERT INTO blog.category (id, name, `index`) VALUES (5, '其他', 5);


create table log
(
    id     int auto_increment comment '编号'
        primary key,
    handle varchar(50)                         not null comment '操作内容',
    time   timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '操作时间',
    ip     varchar(30)                         null comment '来源IP'
)
    comment '日志表' collate = utf8_unicode_ci;

INSERT INTO blog.log (id, handle, time, ip) VALUES (12, '登录', '2021-11-10 16:50:31', null);
INSERT INTO blog.log (id, handle, time, ip) VALUES (13, '登录', '2021-12-14 22:13:54', null);
INSERT INTO blog.log (id, handle, time, ip) VALUES (14, '登录', '2021-12-14 22:19:04', null);
INSERT INTO blog.log (id, handle, time, ip) VALUES (15, '登录', '2021-12-14 23:38:55', null);
INSERT INTO blog.log (id, handle, time, ip) VALUES (16, '登录', '2021-12-15 14:22:16', null);
INSERT INTO blog.log (id, handle, time, ip) VALUES (17, '登录', '2021-12-15 18:12:21', null);
INSERT INTO blog.log (id, handle, time, ip) VALUES (18, '登录', '2021-12-16 09:32:22', null);
INSERT INTO blog.log (id, handle, time, ip) VALUES (19, '登录', '2021-12-16 14:04:45', null);
INSERT INTO blog.log (id, handle, time, ip) VALUES (20, '登录', '2021-12-16 15:04:06', null);
INSERT INTO blog.log (id, handle, time, ip) VALUES (21, '登录', '2021-12-17 14:33:26', null);


create table pv
(
    id   int auto_increment comment '编号'
        primary key,
    time date          not null comment '日期',
    hits int default 0 not null comment '点击量'
)
    comment '访问记录表' collate = utf8_unicode_ci;

INSERT INTO blog.pv (id, time, hits) VALUES (577, '2021-12-19', 31);
INSERT INTO blog.pv (id, time, hits) VALUES (578, '2021-12-20', 49);
INSERT INTO blog.pv (id, time, hits) VALUES (579, '2021-12-21', 39);
INSERT INTO blog.pv (id, time, hits) VALUES (580, '2021-12-01', 25);
INSERT INTO blog.pv (id, time, hits) VALUES (635, '2021-12-18', 39);
INSERT INTO blog.pv (id, time, hits) VALUES (636, '2021-12-17', 53);
INSERT INTO blog.pv (id, time, hits) VALUES (637, '2021-11-27', 1);
INSERT INTO blog.pv (id, time, hits) VALUES (638, '2021-12-16', 13);
INSERT INTO blog.pv (id, time, hits) VALUES (639, '2021-12-15', 22);

create table tabs
(
    id         int auto_increment comment '编号'
        primary key,
    name       varchar(100) not null comment '标签名称',
    article_id int          not null comment '所属文章编号'
)
    comment '标签表' collate = utf8_unicode_ci;

INSERT INTO blog.tabs (id, name, article_id) VALUES (1, 'JavaScript', 1);
INSERT INTO blog.tabs (id, name, article_id) VALUES (2, 'web前端', 1);
INSERT INTO blog.tabs (id, name, article_id) VALUES (3, 'JS脚本', 2);
INSERT INTO blog.tabs (id, name, article_id) VALUES (4, 'CSS3', 2);
INSERT INTO blog.tabs (id, name, article_id) VALUES (5, 'web前端', 3);
INSERT INTO blog.tabs (id, name, article_id) VALUES (6, 'HTML5', 3);
INSERT INTO blog.tabs (id, name, article_id) VALUES (7, 'web前端', 3);



create table user
(
    id       int auto_increment comment '编号'
        primary key,
    username varchar(100) not null comment '用户名',
    password varchar(100) not null comment '用户密码'
)
    comment '用户表' collate = utf8_unicode_ci;

INSERT INTO blog.user (id, username, password) VALUES (1, 'admin', '123456');
INSERT INTO blog.user (id, username, password) VALUES (2, 'zhangsan', '123456');
INSERT INTO blog.user (id, username, password) VALUES (3, 'lisi', '0000');


