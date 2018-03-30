/*
* @Author: hc
* @Date:   2018-03-27 17:12:14
* @Last Modified by:   hc
* @Last Modified time: 2018-03-29 11:41:21
*/
var path = require("path");

module.exports = {
	entry:{
		app:[
			path.join(__dirname,'../src/main.js')
		],
		'babel-polyfill':'babel-polyfill',
		vendors:['react','react-dom','react-router-dom']
	},
	output:{
		publicPath:'',
		path:path.resolve(__dirname,'../dist'),
		filename:'js/[name].[hash:5].js'
	},
	module:{
		rules:[
			{
				test:/(\.js|\.jsx)$/,
				exclude:'/node_modules/',
				use:[
					{
						loader:'babel-loader',
						options:{
							presets:['es2015','react']
						}
					}
					// {
					// 	loader:'eslint-loader',
					// 	options:{
					// 		formatter:require('eslint-friendly-formatter')
					// 	}
					// }
				]
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.scss$/,
				use:['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use:{
					loader:"file-loader",
					options:{
						//打包生成图片的名字
						name:"[name].[ext]",
						outputPath: 'images/'
					}
				}
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:['file-loader']
			}
		]
	}
}