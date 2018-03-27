import React from 'react'
import FooterDisplayCard from "../FooterDisplayCard/FooterDisplayCard"

import './FooterCards.css'

const FooterCards = (props) => {
	const cardOne = () => {
		return {
			imageUrl: require('../../assets/images/about-icon.svg'),
			heading: 'Introducing Sigma',
			description: 'Use SQL to explore your business’ payments and revenue data, build and run custom reports, get insights, and more.'
		}
	}
	const cardTwo = () => {
		return {
			imageUrl: require('../../assets/images/documentation-icon.svg'),
			heading: 'Explore The Docs',
			description: 'Start building your integration and accept your first payment in minutes. Stripe libraries are available in every language from Ruby to Go.'
		}
	}

	return (
		<div className='footer-cards'>
			<FooterDisplayCard
				imageUrl={cardOne().imageUrl}
				heading={cardOne().heading}
				description={cardOne().description}/>
			<FooterDisplayCard
				imageUrl={cardTwo().imageUrl}
				heading={cardTwo().heading}
				description={cardTwo().description}/>

		</div>
	)
}

export default FooterCards