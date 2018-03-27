import React from 'react'
import Button from "../UI/Button/Button"

import './FooterOne.css'

const FooterOne = (props) => {
	return (
		<div className='footer-one'>
			<div className='caption-holder'>
				<p className='heading-one'>Ready to get Started?</p>
				<p className='heading-two'>Get in Touch, or create an account.</p>
			</div>
			<div className="button-holder">
				<Button buttonType="blue">Create Stripe Account</Button>
				<Button buttonType="default-light">Contact Sales</Button>
			</div>
		</div>
	)
}

export default FooterOne