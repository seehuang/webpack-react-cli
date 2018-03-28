/*
* @Author: hc
* @Date:   2018-03-27 17:12:55
* @Last Modified by:   hc
* @Last Modified time: 2018-03-28 14:30:17
*/
var webpack = require('webpack');
var path =require('path');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.conf.base.js');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports=merge(baseConfig,{
	
	plugins:[
		new cleanWebpackPlugin(['dist'],{
			//当前clean认为的根目录为/config/，需要设定根目录为项目根目录
			root:path.resolve(__dirname,"../")
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:['vendors']
		}),
		new htmlWebpackPlugin({
			filename:'index.html',
			template:path.resolve(__dirname,`../index.html`)
		}),
		new UglifyJsPlugin()
	]
})