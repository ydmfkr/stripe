import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from "./Test"
import {Switch, Route} from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/' component={Test}/>
				</Switch>
			</div>
		);
	}
}

export default App;
