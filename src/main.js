/*
* @Author: hc
* @Date:   2018-03-27 18:32:47
* @Last Modified by:   hc
* @Last Modified time: 2018-03-29 12:20:51
*/
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import imgA from './a.jpg'
class App extends React.Component {
	render(){
		return (
			<div>
				<div>1111112223ff31111111
				<img src={imgA}/>
				</div>	
			</div>
		)	
	}
}
ReactDOM.render(<App/>,document.getElementById('app'));