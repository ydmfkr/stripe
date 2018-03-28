import React, {Component} from 'react'
import NavigationItems from "../NavigationItems/NavigationItems"
import NavigationItemsSecondary from "../NavigationItemsSecondary/NavigationItemsSecondary"

import '../../../CommonCss.css'
import './Toolbar.css'
import '../NavigationItem/NavigationItem.css'

class Toolbar extends Component{

	render(){
		return (
			<div className="ContainerLarge">
				<header className="Toolbar">
					<div className={["Logo", this.props.toolbarColor].join(' ')} >
						<a>STRIPE</a>
					</div>
					<nav className="DesktopOnly">
						<NavigationItems toolbarColor={this.props.toolbarColor}/>
						<NavigationItemsSecondary toolbarColor={this.props.toolbarColor}/>
					</nav>
				</header>
			</div>
		)
	}
}

export default Toolbar