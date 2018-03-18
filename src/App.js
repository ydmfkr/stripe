import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Layout from "./containers/Layout/Layout"
import HomePage from "./containers/HomePage/HomePage"

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Switch>
						<Route path='/' component={HomePage}/>
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
