import React from 'react'
import NavigationItem from "../NavigationItem/NavigationItem"
import './NavigationItemsSecondary.css'

const NavigationItemsSecondary = (props) => {
	return (
		<ul className="NavigationItemsSecondary">
			<NavigationItem
				link="/"
				exact
				toolbarColor={props.toolbarColor}
			>
				Support
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
				toolbarColor={props.toolbarColor}
			>
				Sign In
			</NavigationItem>
		</ul>
	)
}

export default NavigationItemsSecondary