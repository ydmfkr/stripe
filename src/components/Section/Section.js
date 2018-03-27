import React from 'react'

import './Section.css'

const Section = (props) => {
	return (
		<div className={['section', props.sectionAlignClass].join(' ')} style={props.contentStyle}>
			<div className={['section-heading-holder', props.headerLogoClass].join(' ')}>

				<img className={[props.leftImageClass, 'section-logo-left', props.imageClass].join(' ')}
				     src={props.leftImageLogo}
				     alt=''
				/>

				<span className={['section-heading', props.headerAlignClass].join(' ')}>{props.heading}</span>

				<img className={[props.rightImageClass, 'section-logo-right', props.imageClass].join(' ')}
				     src={props.rightImageLogo}
				     alt=''
				/>
			</div>
			<p className={['section-description', props.textAlignClass].join(' ')}>{props.description}</p>
			<a className={['section-link', props.linkAlignClass].join(' ')}
			   href={props.link}>{props.linkDescription}</a>
		</div>
	)
}

export default Section