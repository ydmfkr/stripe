import React from 'react'
import './Card.css'

const Card = (props) => {
	return (
		<div className="Card">
			<ul>
				<li>
					<a href="/payments" className="Payments">
						<div>
							<h3 className="Heading">
								Payments

							</h3>
							<p className="SubHeading">
								A Complete Commerce Toolkit, Built For Developers.
							</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/subscriptions" className="Subscriptions">
						<div>
							<h3 className="Heading">
								Subscriptions

							</h3>
							<p className="SubHeading">
								The Smart Engine for Recurring Payments.
							</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/connect" className="Connect">
						<div>
							<h3 className="Heading">
								Connect

							</h3>
							<p className="SubHeading">
								Everything platforms need to get sellers paid.
							</p>
						</div>
					</a>
				</li>

			</ul>
		</div>
	)
}

export default Card