/*
* @Author: hc
* @Date:   2018-03-27 17:12:42
* @Last Modified by:   hc
* @Last Modified time: 2018-03-29 11:42:08
*/
var webpack =require('webpack');
var webpackMerge = require('webpack-merge');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpackBaseConfig = require('./webpack.conf.base.js');
var path = require('path');
module.exports = webpackMerge(webpackBaseConfig,{
	module:{
		rules:[
			{
				test:/.js$/,
				//强制先进行检查
				enforce:"pre",
				exclude:'/node_modules|lib',
				loader:"eslint-loader",
				options:{
					formatter:require('eslint-friendly-formatter')
				}

			}
		]
	},
	devServer:{
		//项目根目录
		contentBase:path.join(__dirname,"../dist"),
		overlay:true,
		openPage:'index.html'
		//错误，警告展示设置
		
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:['vendors']
		}),
		// new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			filename:'index.html',
			template:path.resolve(__dirname,`../index.html`)
		})
	]

})

