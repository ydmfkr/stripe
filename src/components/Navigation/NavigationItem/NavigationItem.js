import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavigationItem.css'

const NavigationItem = (props) => {

	return (
		<li className={["NavigationItem", props.toolbarColor].join(' ')}>
			<NavLink
				exact={props.exact}
				to={props.link}
			>
				{props.children}
			</NavLink>
			<div className="dropdown">
				{props.dropdown}
			</div>
		</li>
	)
}

export default NavigationItem