import React from 'react'
import './AppIllustrations.css'

const AppIllustrations = (props) => {
	return (

		<div className="AppIllustrations">
			<div className="TabletLandscape">
				<img src={require("../../../assets/images/app-illustrations-slack.svg")}
				     alt="slack"/>
			</div>
			<div className="PhoneBig">
				<img src={require("../../../assets/images/app-illustrations-instacart.svg")}
				     alt="instacarts"/>
			</div>
			<div className="PhoneSmall">
				<img src={require("../../../assets/images/app-illustrations-postmates.svg")}
				     alt="postmates"/>
			</div>
			<div className="TabletPotrait">
				<img src={require("../../../assets/images/app-illustrations-warbyparker.svg")}
				     alt="warbyparker"/>
			</div>
		</div>
			
	)
}

export default AppIllustrations