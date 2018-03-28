/*
* @Author: hc
* @Date:   2018-03-27 17:12:42
* @Last Modified by:   hc
* @Last Modified time: 2018-03-28 14:21:09
*/
var webpack =require('webpack');
var webpackMerge = require('webpack-merge');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpackBaseConfig = require('./webpack.conf.base.js');
var path = require('path');
module.exports = webpackMerge(webpackBaseConfig,{
	devServer:{
	//项目根目录
	contentBase:path.join(__dirname,"../dist"),
	openPage:'index.html',
	//错误，警告展示设置
	overlay:{
		errors:true,
		warning:true,
	}
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:['vendors']
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			filename:'index.html',
			template:path.resolve(__dirname,`../index.html`)
		})
	]

})

