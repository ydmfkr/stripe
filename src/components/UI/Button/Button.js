import React from 'react'
import './Button.css'

const Button = (props) => {
	let buttonClass = ["Button", props.buttonType].join(' ')
	return (

		<button className={buttonClass} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default Button