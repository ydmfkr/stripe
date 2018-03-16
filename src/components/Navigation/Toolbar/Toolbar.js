import React from 'react'
import './Toolbar.css'
import NavigationItems from "../NavigationItems/NavigationItems"
import NavigationItemsSecondary from "../NavigationItemsSecondary/NavigationItemsSecondary"

const Toolbar = (props) => {
	return (
		<header className="Toolbar">
			<div className="Logo">
				STRIPE
			</div>
			<nav className="DesktopOnly">
				<NavigationItems/>
				<NavigationItemsSecondary/>
			</nav>
		</header>
	)
}

export default Toolbar