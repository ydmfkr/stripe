import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Layout from "./containers/Layout/Layout"
import HomePage from "./containers/HomePage/HomePage"
import Customers from "./containers/Customers/Customers"


import './App.css';

class App extends Component {

	state = {
		color: 'red'
	}

	changeToolbarColor(newColor) {
		const clr = this.state.color;
		if (clr !== newColor)
			this.setState({color: newColor})
	}

	render() {
		return (
			<div className='App'>
				<Layout toolbarColor={this.state.color}>
					<Switch>
						<Route path='/customers' component={() => <Customers
							changeToolbarColor={this.changeToolbarColor.bind(this)}/>}/>
						<Route path='/' exact component={() => <HomePage
							changeToolbarColor={this.changeToolbarColor.bind(this)}
						/>}/>
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
