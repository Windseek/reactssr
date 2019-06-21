# reactssr

声明：

这个属于个人项目，是一个react同构的脚手架，由于同构门槛较高，对于初学者，或者工作过一段时间的人来说，短时间内从零开始搭建比较麻烦，所以，提供这样一个已经搭建好的项目，使用者只需要在里面填写业务组件即可，打包工具，运行工具已经提供，seo也已经做过了，可直接使用。


安装步骤：

1、先安装初始化工具windssr，npm install windssr -g

2、切换到想要初始化的文件夹下，执行 windssr -init 或者 windsrr -i

3、根据提示选择同构的模板，提供三个，react，vue，angular，这个项目的模板是react

4、然后填写项目名称，完成初始化

5、根据提示，cd/your projectname

6、npm install 安装脚手架的依赖

7、npm run all 运行脚手架


项目介绍：

entry: webpack打包入口文件，包含客户端和服务端两个入口，client/index.js server/index.js

request: axios的封装提供serverRequest,clientRquest,框架内部使用，业务组件如有需要也能引用

src: 业务组件，建议在每个组件里单独写redux存储，把业务存储拆分到各个业务组件里去

store: redux 的封装，提供客户端store和服务端store，实现服务端注水数据，客户端出水

.babelrc: babel 配置，针对es2015，和浏览器版本

app.js: 组件根目录

package.json: 项目命令行配置，和依赖配置

route.js: 前后端路由配置

webpack.base.js: webpack 基础配置

webpack.config.client.js webpack 客户端配置

webpack.config.server.js webpack 服务端配置
