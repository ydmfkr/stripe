import React from 'react'
import Pill from "./Pill/Pill"
import PillMessage from "./PillMessage/PillMessage"
import './Announcements.css'

const Announcements = (props) => {
	return (
		<div className="Announcements">
			<Pill pillName={props.pillName}/>
			<PillMessage pillMessage={props.pillMessage}/>
		</div>
	)
}

export default Announcements