# webpack-react-cli


构建一个react单页应用脚手架


## 前言

> react官方出了一个脚手架，create-react-app，这个脚手架受到了广泛的好评与使用，脚手架集成了代码打包编译、热更新、ESLint检查等常用功能，基本适用大部分的中小型项目，但是该脚手架也有缺点，所有的配置项已经封装成一个npm包，要做出自定义配置比较麻烦，比如加个sass预处理，或者再配置一个代码环境等，此类个性需求就要去改动脚手架，很不方便。所以，打算自己配置一个react单页应用脚手架，所有的配置文件集中在项目表层上，便于修改和定制打包方案。
    

## 构建目标

- [x] eslint代码检查
- [x] ES6代码编译
- [x] js模块打包，公共，业务代码分开打包，并加入hash
- [x] 提取html模板文件，并自动添加css，js
- [x] 提取图片文件，压缩图片
- [x] 提取字体文件
- [x] 开启本地服务调试
- [x] 加入第三方非模块化库或者插件（如jquery，swiper）
- [x] 开启本地server
- [x] 使用source map调试

## 项目结构 

 <pre>
│  .babelrc
│  .eslintrc.js
│  .gitignore
│  index.html
│  package.json
│  README.md
│  webpack.config.js
│
├─build //webpack构建配置
│      webpack.conf.base.js
│      webpack.conf.dev.js
│      webpack.conf.lint.js
│      webpack.conf.prod.js
│
└─src  //项目源码
        a.jpg
        main.js
 </pre>

         

## 运行项目

<pre>
npm run dev 开发环境，启用服务，浏览器输入localhost:8080/index.html
npm run build 生产环境，项目被打包到dist文件夹
npm run lint 启用eslint检测代码
</pre>

## 项目依赖
<pre>
1.安装 webpack 和 webpack-dev-server
npm install webpack webpack-dev-server --save-dev

2.安装 webpack-merge
npm install webpack-merge --save-dev
该插件用来对 webpack 配置进行合并操作。

3.安装 babel 相关插件
npm install babel-core babel-loader babel-preset-env babel-plugin-transform-es2015-spread --save-dev
这系列插件用来对 ES6 语法进行转换。

4.安装样式处理相关插件
npm install css-loader style-loader postcss-loader autoprefixer --save-dev
这系列插件用来处理 CSS 样式，其中 autoprefixer 是 postcss 的一个插件，用来自动给 CSS 样式添加前缀。

5.安装 file-loader
npm install file-loader --save-dev
该插件将在导入图片、字体等文件时发挥作用，主要是针对css中的url。

6.安装 ESLint 相关的插件
npm install eslint eslint-loader --save-dev
这些插件用来对 JavaScript 代码进行检查。

7.安装 html-webpack-plugin 插件
npm install html-webpack-plugin --save-dev
该插件用来自动生成 HTML 文件。

8.安装 extract-text-webpack-plugin 插件
npm install extract-text-webpack-plugin --save-dev
该插件用来将 CSS 抽取到独立的文件。

9.安装 clean-webpack-plugin 插件
npm install clean-webpack-plugin --save-dev
该插件用来对 dist 文件夹进行清理工作，每次打包时先清理之前的 dist 文件夹。
</pre>





