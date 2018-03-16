import React from 'react'
import './NavigationItems.css'
import NavigationItem from "../NavigationItem/NavigationItem"

const NavigationItems = (props) => {
	return (
		<ul className="NavigationItems">
			<NavigationItem
				link="/"
				exact
			>
				Products
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
			>
				Developers
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
			>
				Company
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
			>
				Pricing
			</NavigationItem>

		</ul>
	)
}

export default NavigationItems