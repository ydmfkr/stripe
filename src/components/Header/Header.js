import React from 'react'
import './Header.css'
import HeaderContent from "./HeaderContent/HeaderContent"

const HeaderBackgroundStripes = () => {
	return (
		<header>
			<div className="HeaderBackgroundStripes">
				<span className="MainBackground">
					<span className="TopStripHolder"
					>
						<span className="TopLeft1"

						/>
						<span className="TopLeft2"/>
						<span className="TopLeft3"/>
					</span>
					<span className="BottomLeftStripHolder">
						<span className="BottomLeft"/>
					</span>
				</span>
			</div>
			<HeaderContent/>
		</header>
	)
}

export default HeaderBackgroundStripes