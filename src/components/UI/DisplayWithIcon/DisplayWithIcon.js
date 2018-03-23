import React from 'react'
import './DisplayWithIcon.css'

const DisplayWithIcon = (props) => {

	return (
		<a className="display-with-icon"
			href={props.link}>
			<div className='icon-container'>
				<img className='icon' style={props.iconStyle} src={props.iconUrl} alt={props.heading}/>
				<div className='heading-container' style={props.headingContainerStyle}>
					<h3 className="heading" style={props.headingStyle}>
						{props.heading}

					</h3>
					<p className="sub-heading" style={props.subHeadingStyle}>
						{props.subHeading}
					</p>
				</div>
			</div>
		</a>
	)
}

export default DisplayWithIcon