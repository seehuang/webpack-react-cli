/*
* @Author: hc
* @Date:   2018-03-27 17:12:14
* @Last Modified by:   hc
* @Last Modified time: 2018-03-28 14:30:30
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
				use:{
					loader:'babel-loader',
					options:{
						presets:['es2015','react']
					}
				}
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
				use:['file-loader']
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:['file-loader']
			}
		]
	}
}