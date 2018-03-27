import React from 'react'
import './Card.css'

const Card = (props) => {
	return (
		<div className={['Card', props.cardClass].join(' ')} style={props.cardStyle}>

						{props.children}


		</div>
	)
}

export default Card