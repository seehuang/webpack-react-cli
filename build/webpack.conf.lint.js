/*
* @Author: hc
* @Date:   2018-03-29 09:47:15
* @Last Modified by:   hc
* @Last Modified time: 2018-03-29 09:54:04
*/
var path = require("path");
var configBase = require("./webpack.conf.base.js");
var merge = require("webpack-merge");

module.exports = merge(configBase,{
	module:{
		rules:[
			{
				test:/.js$/,
				//强制先进行检查
				enforce:"pre",
				exclude:'/node_modules|lib',
				loader:"eslint-loader",
				options:{
					fix:true,
					emitWarning:true
				}

			}
		]
	},
	devServer:{
		contentBase:path.join(__dirname,"../dist"),
		openPage:"index.html",
		overlay:true
	}
})