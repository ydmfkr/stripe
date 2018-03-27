import React from 'react'
import Card from "../UI/Card/Card"

import './FooterDisplayCard.css'

const FooterDisplayCard = (props) => {
	return (
			<Card cardClass='card-flex-relative' cardStyle={{width: '550px'}}>
				<div className='footer-image-wrapper'>
					<img className='footer-image' src={props.imageUrl} alt=''/>
				</div>
				<div className='footer-display-wrapper'>
					<h3 className='footer-heading'>{props.heading}</h3>
					<p className='footer-description'>{props.description}</p>
				</div>
			</Card>
	)
}

export default FooterDisplayCard