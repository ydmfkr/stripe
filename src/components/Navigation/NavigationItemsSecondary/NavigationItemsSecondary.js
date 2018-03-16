import React from 'react'
import NavigationItem from "../NavigationItem/NavigationItem"
import './NavigationItemsSecondary.css'

const NavigationItemsSecondary = (props) => {
	return (
		<ul className="NavigationItemsSecondary">
			<NavigationItem
				link="/"
				exact
			>
				Support
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
			>
				Sign In
			</NavigationItem>
		</ul>
	)
}

export default NavigationItemsSecondary