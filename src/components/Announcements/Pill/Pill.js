import React from 'react'
import './Pill.css'

const Pill = (props) => {
	return (
		<span className="NewPill">
			{props.pillName}
		</span>
	)
}

export default Pill