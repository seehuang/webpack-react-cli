/*
* @Author: hc
* @Date:   2018-02-11 10:31:08
* @Last Modified by:   hc
* @Last Modified time: 2018-03-29 12:19:46
*/
module.exports = {
	root:true,
	env: {
		browser:true,
		commonjs:true,
		es6:true,
		node:true
	},
	// extends:'eslint:recommended',
	plugins:['html'],
	parserOptions:{
		"sourceType":'module',
		"ecmaFeatures": {
	      "jsx": true
	    }
	},
	rules:{
		//'comma-dangle':['error','always-multiline'],
		//indent:['error',2],
		quotes:['error','single'],
		// 'no-unused-wars':['warn'],
		// 'no-console':0
	}
}