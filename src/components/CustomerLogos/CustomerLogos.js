import React from 'react'
import Button from "../UI/Button/Button"

import './CustomerLogos.css'

const CustomerLogos = (props) => {
	return (
		<a className='customer-logo-holder-link' href='/customers'>
			<div className='customer-link-holder'>
				<div className='customer-logo-button-holder'>
					<Button className='customer-logo-button' buttonType='blue'>See Our Customers</Button>
				</div>
				<ul className='customer-logo-holder'>
					<li><img className='customer-logo' src={require('../../assets/images/kickstarter-logo.svg')}
					         alt=''/>
					</li>
					<li><img className='customer-logo' src={require('../../assets/images/instacart-logo.svg')} alt=''/>
					</li>
					<li><img className='customer-logo' src={require('../../assets/images/pinterest-logo.svg')} alt=''/>
					</li>
					<li><img className='customer-logo' src={require('../../assets/images/lyft-logo.svg')} alt=''/></li>
					<li><img className='customer-logo' src={require('../../assets/images/shopify-logo.svg')} alt=''/>
					</li>
					<li><img className='customer-logo' src={require('../../assets/images/opentable-logo.svg')} alt=''/>
					</li>
					<li><img className='customer-logo' src={require('../../assets/images/slack-logo.svg')} alt=''/></li>
				</ul>
			</div>
		</a>
	)
}

export default CustomerLogos