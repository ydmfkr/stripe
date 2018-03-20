import React from 'react'
import Announcements from "../../Announcements/Announcements"
import './HeaderContent.css'
import Button from "../../UI/Button/Button"

const HeaderContent = (props) => {
	return (
		<section className="HeaderContentAnnounce">
			<div className="HeaderContentContainer">
				<Announcements className="Announcements" pillName="New"
				               pillMessage="Build beautiful, smart checkout flows with Stripe Elements"/>
				<h1>
					The new standard in online payments
				</h1>
				<p>

					Stripe is the best software platform for running an internet business. We handle billions of dollars
					every year for forward-thinking businesses around the world.

				</p>
				<div className="ButtonHolder">
					<Button buttonType="Primary">Create Account</Button>
					<Button buttonType="Default">Contact Sales</Button>
				</div>
			</div>
		</section>
	)
}

export default HeaderContent