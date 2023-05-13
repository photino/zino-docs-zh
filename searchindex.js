Object.assign(window.search, {"doc_urls":["introduction.html#引言","guide.html#入门指南","guide/new-app.html#创建应用","guide/structure.html#目录结构","guide/config.html#配置文件","guide/development.html#开发测试","guide/deployment.html#应用部署","basics.html#基础功能","basics/application.html#应用接口定义","basics/state.html#状态管理","basics/request.html#请求处理","basics/response.html#请求响应","basics/error.html#错误处理","basics/datetime.html#日期处理","basics/i18n.html#国际化","advanced.html#进阶功能","advanced/model.html#应用模型","advanced/authentication.html#身份认证","advanced/schedule.html#调度任务","advanced/channel.html#消息订阅","advanced/trace.html#可观测性","advanced/extension.html#辅助函数","features.html#可选功能","features/orm.html#orm","features/view.html#html模板","features/cache.html#缓存","features/accessor.html#存储服务","features/connector.html#数据源访问","features/chatbot.html#聊天机器人","integrations.html#框架集成","integrations/axum.html#axum","integrations/actix-web.html#actix-web","resources.html#更多资源","resources.html#微信公众号","resources.html#知乎专栏"],"index":{"documentStore":{"docInfo":{"0":{"body":16,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":0,"title":0},"11":{"body":0,"breadcrumbs":0,"title":0},"12":{"body":0,"breadcrumbs":0,"title":0},"13":{"body":0,"breadcrumbs":0,"title":0},"14":{"body":0,"breadcrumbs":0,"title":0},"15":{"body":0,"breadcrumbs":0,"title":0},"16":{"body":0,"breadcrumbs":0,"title":0},"17":{"body":0,"breadcrumbs":0,"title":0},"18":{"body":0,"breadcrumbs":0,"title":0},"19":{"body":0,"breadcrumbs":0,"title":0},"2":{"body":0,"breadcrumbs":0,"title":0},"20":{"body":0,"breadcrumbs":0,"title":0},"21":{"body":0,"breadcrumbs":0,"title":0},"22":{"body":0,"breadcrumbs":0,"title":0},"23":{"body":0,"breadcrumbs":2,"title":1},"24":{"body":0,"breadcrumbs":2,"title":1},"25":{"body":0,"breadcrumbs":0,"title":0},"26":{"body":0,"breadcrumbs":0,"title":0},"27":{"body":0,"breadcrumbs":0,"title":0},"28":{"body":0,"breadcrumbs":0,"title":0},"29":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":68,"breadcrumbs":0,"title":0},"30":{"body":0,"breadcrumbs":2,"title":1},"31":{"body":0,"breadcrumbs":4,"title":2},"32":{"body":0,"breadcrumbs":0,"title":0},"33":{"body":1,"breadcrumbs":0,"title":0},"34":{"body":1,"breadcrumbs":0,"title":0},"4":{"body":0,"breadcrumbs":0,"title":0},"5":{"body":0,"breadcrumbs":0,"title":0},"6":{"body":0,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":0,"breadcrumbs":0,"title":0},"9":{"body":0,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"Zino 致力于打造 Rust 语言中最好用的企业级应用开发框架。 我们奉行『约定优于配置』的原则，借鉴Node的 Egg.js 、Go的 GoFrame 、 Java的 Spring Boot 等框架，提供开箱即用的功能模块，极大提升开发效率； 并通过应用接口抽象与Rust的 axum 、 actix-web 等框架集成，打通社区生态资源。 Star History Chart","breadcrumbs":"引言 » 引言","id":"0","title":"引言"},"1":{"body":"","breadcrumbs":"入门指南 » 入门指南","id":"1","title":"入门指南"},"10":{"body":"","breadcrumbs":"基础功能 » 请求上下文 » 请求处理","id":"10","title":"请求处理"},"11":{"body":"","breadcrumbs":"基础功能 » 请求响应 » 请求响应","id":"11","title":"请求响应"},"12":{"body":"","breadcrumbs":"基础功能 » 错误处理 » 错误处理","id":"12","title":"错误处理"},"13":{"body":"","breadcrumbs":"基础功能 » 日期处理 » 日期处理","id":"13","title":"日期处理"},"14":{"body":"","breadcrumbs":"基础功能 » 国际化 » 国际化","id":"14","title":"国际化"},"15":{"body":"","breadcrumbs":"进阶功能 » 进阶功能","id":"15","title":"进阶功能"},"16":{"body":"","breadcrumbs":"进阶功能 » 应用模型 » 应用模型","id":"16","title":"应用模型"},"17":{"body":"","breadcrumbs":"进阶功能 » 身份认证 » 身份认证","id":"17","title":"身份认证"},"18":{"body":"","breadcrumbs":"进阶功能 » 调度任务 » 调度任务","id":"18","title":"调度任务"},"19":{"body":"","breadcrumbs":"进阶功能 » 消息订阅 » 消息订阅","id":"19","title":"消息订阅"},"2":{"body":"","breadcrumbs":"入门指南 » 创建应用 » 创建应用","id":"2","title":"创建应用"},"20":{"body":"","breadcrumbs":"进阶功能 » 可观测性 » 可观测性","id":"20","title":"可观测性"},"21":{"body":"","breadcrumbs":"进阶功能 » 辅助函数 » 辅助函数","id":"21","title":"辅助函数"},"22":{"body":"","breadcrumbs":"可选功能 » 可选功能","id":"22","title":"可选功能"},"23":{"body":"","breadcrumbs":"可选功能 » ORM » ORM","id":"23","title":"ORM"},"24":{"body":"","breadcrumbs":"可选功能 » HTML模板 » HTML模板","id":"24","title":"HTML模板"},"25":{"body":"","breadcrumbs":"可选功能 » 缓存 » 缓存","id":"25","title":"缓存"},"26":{"body":"","breadcrumbs":"可选功能 » 存储服务 » 存储服务","id":"26","title":"存储服务"},"27":{"body":"","breadcrumbs":"可选功能 » 数据源访问 » 数据源访问","id":"27","title":"数据源访问"},"28":{"body":"","breadcrumbs":"可选功能 » 聊天机器人 » 聊天机器人","id":"28","title":"聊天机器人"},"29":{"body":"","breadcrumbs":"框架集成 » 框架集成","id":"29","title":"框架集成"},"3":{"body":"Zino开发框架采用了类似于 Egg.js 的应用目录约定规范： zino-app\n├─ Cargo.toml\n├─ assets\n│ └─ data\n│ └─ mock\n│ ├─ logs.ndjson\n│ └─ users.csv\n├─ config\n│ ├─ config.dev.toml\n│ ├─ config.prod.toml\n│ └─ locale\n│ ├─ en-US.ftl\n│ └─ zh-CN.ftl\n├─ logs\n├─ public\n│ ├─ 404.html\n│ ├─ data\n│ │ └─ logs.ndjson\n│ └─ index.html\n├─ src\n│ ├─ controller\n│ │ ├─ mod.rs\n│ │ ├─ stats.rs\n│ │ ├─ task.rs\n│ │ └─ user.rs\n│ ├─ extension\n│ │ ├─ datetime.rs\n│ │ ├─ header.rs\n│ │ └─ mod.rs\n│ ├─ logic\n│ │ ├─ mod.rs\n│ │ ├─ task.rs\n│ │ └─ user.rs\n│ ├─ main.rs\n│ ├─ middleware\n│ │ ├─ access.rs\n│ │ └─ mod.rs\n│ ├─ router\n│ │ └─ mod.rs\n│ ├─ schedule\n│ │ ├─ job.rs\n│ │ └─ mod.rs\n│ └─ service\n│ ├─ mod.rs\n│ ├─ task.rs\n│ └─ user.rs\n└─ templates ├─ layout.html └─ output.html Cargo.toml为应用的Cargo配置文件。 assets/为本地静态资源目录（不能通过网络访问），data/为本地数据目录。 config/config.{env}.toml用于编写不同运行环境的配置文件。 config/locale/{lang-id}.ftl于编写i18n多语言文件（目前仅支持Fluent规范）。 logs/用于日志文件输出。 public/为通过网络访问的静态资源目录，index.html为默认首页文件，404.html为404文件，data/为共享的数据目录。 src/controller/用于编写控制器。 src/extension/用于编写辅助函数。 src/logic/用于编写业务逻辑，供service、schedule调用。 src/main.rs用于启动应用以及自定义初始化。 src/middleware/用于编写中间件。 src/router/用于配置URL路由规则。 src/schedule/用于编写定时任务。 src/service/用于编写业务接口服务，供controller调用。 templates/用于编写HTML模板文件（目前仅支持Tera模板）。","breadcrumbs":"入门指南 » 目录结构 » 目录结构","id":"3","title":"目录结构"},"30":{"body":"","breadcrumbs":"框架集成 » axum » axum","id":"30","title":"axum"},"31":{"body":"","breadcrumbs":"框架集成 » actix-web » actix-web","id":"31","title":"actix-web"},"32":{"body":"","breadcrumbs":"更多资源 » 更多资源","id":"32","title":"更多资源"},"33":{"body":"Zino开发框架","breadcrumbs":"更多资源 » 微信公众号","id":"33","title":"微信公众号"},"34":{"body":"Zino开发框架技术解读","breadcrumbs":"更多资源 » 知乎专栏","id":"34","title":"知乎专栏"},"4":{"body":"","breadcrumbs":"入门指南 » 配置文件 » 配置文件","id":"4","title":"配置文件"},"5":{"body":"","breadcrumbs":"入门指南 » 开发测试 » 开发测试","id":"5","title":"开发测试"},"6":{"body":"","breadcrumbs":"入门指南 » 应用部署 » 应用部署","id":"6","title":"应用部署"},"7":{"body":"","breadcrumbs":"基础功能 » 基础功能","id":"7","title":"基础功能"},"8":{"body":"","breadcrumbs":"基础功能 » 应用接口定义 » 应用接口定义","id":"8","title":"应用接口定义"},"9":{"body":"","breadcrumbs":"基础功能 » 状态管理 » 状态管理","id":"9","title":"状态管理"}},"length":35,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"4":{"0":{"4":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":2,"docs":{"0":{"tf":1.0},"31":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"30":{"tf":1.0}}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}},"为":{"df":0,"docs":{},"应":{"df":0,"docs":{},"用":{"df":0,"docs":{},"的":{"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{".":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"/":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"{":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"}":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"{":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"j":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":1,"docs":{"3":{"tf":1.0}}},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}},"f":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"24":{"tf":1.0}}}}}},"i":{"d":{"df":0,"docs":{},"}":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"于":{"df":0,"docs":{},"编":{"df":0,"docs":{},"写":{"df":0,"docs":{},"i":{"1":{"8":{"df":0,"docs":{},"n":{"df":0,"docs":{},"多":{"df":0,"docs":{},"语":{"df":0,"docs":{},"言":{"df":0,"docs":{},"文":{"df":0,"docs":{},"件":{"df":0,"docs":{},"（":{"df":0,"docs":{},"目":{"df":0,"docs":{},"前":{"df":0,"docs":{},"仅":{"df":0,"docs":{},"支":{"df":0,"docs":{},"持":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"b":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"s":{".":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"d":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"d":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":2.6457513110645907}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"23":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"p":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"c":{"/":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"/":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"编":{"df":0,"docs":{},"写":{"df":0,"docs":{},"业":{"df":0,"docs":{},"务":{"df":0,"docs":{},"逻":{"df":0,"docs":{},"辑":{"df":0,"docs":{},"，":{"df":0,"docs":{},"供":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"d":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"配":{"df":0,"docs":{},"置":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"编":{"df":0,"docs":{},"写":{"df":0,"docs":{},"业":{"df":0,"docs":{},"务":{"df":0,"docs":{},"接":{"df":0,"docs":{},"口":{"df":0,"docs":{},"服":{"df":0,"docs":{},"务":{"df":0,"docs":{},"，":{"df":0,"docs":{},"供":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"编":{"df":0,"docs":{},"写":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":0,"docs":{},"模":{"df":0,"docs":{},"板":{"df":0,"docs":{},"文":{"df":0,"docs":{},"件":{"df":0,"docs":{},"（":{"df":0,"docs":{},"目":{"df":0,"docs":{},"前":{"df":0,"docs":{},"仅":{"df":0,"docs":{},"支":{"df":0,"docs":{},"持":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"s":{".":{"c":{"df":0,"docs":{},"s":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":2,"docs":{"0":{"tf":1.0},"31":{"tf":1.0}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":4,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951},"33":{"tf":1.0},"34":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"4":{"0":{"4":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":2,"docs":{"0":{"tf":1.0},"31":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"30":{"tf":1.7320508075688772}}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}},"为":{"df":0,"docs":{},"应":{"df":0,"docs":{},"用":{"df":0,"docs":{},"的":{"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{".":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"/":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"{":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"}":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"{":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"j":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":1,"docs":{"3":{"tf":1.0}}},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}},"f":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"24":{"tf":1.7320508075688772}}}}}},"i":{"d":{"df":0,"docs":{},"}":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"于":{"df":0,"docs":{},"编":{"df":0,"docs":{},"写":{"df":0,"docs":{},"i":{"1":{"8":{"df":0,"docs":{},"n":{"df":0,"docs":{},"多":{"df":0,"docs":{},"语":{"df":0,"docs":{},"言":{"df":0,"docs":{},"文":{"df":0,"docs":{},"件":{"df":0,"docs":{},"（":{"df":0,"docs":{},"目":{"df":0,"docs":{},"前":{"df":0,"docs":{},"仅":{"df":0,"docs":{},"支":{"df":0,"docs":{},"持":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"b":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"s":{".":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"d":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"d":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":2.6457513110645907}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"23":{"tf":1.7320508075688772}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"p":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"c":{"/":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"/":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"编":{"df":0,"docs":{},"写":{"df":0,"docs":{},"业":{"df":0,"docs":{},"务":{"df":0,"docs":{},"逻":{"df":0,"docs":{},"辑":{"df":0,"docs":{},"，":{"df":0,"docs":{},"供":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"d":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"配":{"df":0,"docs":{},"置":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"编":{"df":0,"docs":{},"写":{"df":0,"docs":{},"业":{"df":0,"docs":{},"务":{"df":0,"docs":{},"接":{"df":0,"docs":{},"口":{"df":0,"docs":{},"服":{"df":0,"docs":{},"务":{"df":0,"docs":{},"，":{"df":0,"docs":{},"供":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"编":{"df":0,"docs":{},"写":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":0,"docs":{},"模":{"df":0,"docs":{},"板":{"df":0,"docs":{},"文":{"df":0,"docs":{},"件":{"df":0,"docs":{},"（":{"df":0,"docs":{},"目":{"df":0,"docs":{},"前":{"df":0,"docs":{},"仅":{"df":0,"docs":{},"支":{"df":0,"docs":{},"持":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"s":{".":{"c":{"df":0,"docs":{},"s":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":2,"docs":{"0":{"tf":1.0},"31":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":4,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951},"33":{"tf":1.0},"34":{"tf":1.0}}}}}}}},"title":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"31":{"tf":1.0}}}}}},"df":0,"docs":{},"x":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"30":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"24":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"23":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"31":{"tf":1.0}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});