import React from 'react'
import './PillMessage.css'

const PillMessage = (props) => {
	return (
		<span className="PillMessage">
			{props.pillMessage}
		</span>
	)
}

export default PillMessage