import React from 'react'
import './Toolbar.css'
import NavigationItems from "../NavigationItems/NavigationItems"
import NavigationItemsSecondary from "../NavigationItemsSecondary/NavigationItemsSecondary"
import '../../../CommonCss.css'

const Toolbar = (props) => {
	return (
		<div className="ContainerLarge">
			<header className="Toolbar">
				<div className="Logo">
					STRIPE
				</div>
				<nav className="DesktopOnly">
					<NavigationItems/>
					<NavigationItemsSecondary/>
				</nav>
			</header>
		</div>
	)
}

export default Toolbar