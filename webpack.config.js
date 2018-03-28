/*
* @Author: hc
* @Date:   2018-03-28 09:00:53
* @Last Modified by:   hc
* @Last Modified time: 2018-03-28 09:01:25
*/
//获取环境命令，并除去首位空格
const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,"");

//根据环境变量引用的相关的配置文件
module.exports = require(`./build/webpack.conf.${env}.js`)