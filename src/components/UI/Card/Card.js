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
								A Complete Commerce Toolkit, Built For Developers
							</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/subscriptions" className="Subscriptions">
						<div>
							<h3 className="Heading">
								Payments

							</h3>
							<p className="SubHeading">
								A Complete Commerce Toolkit, Built For Developers
							</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/connect" className="Connect">
						<div>
							<h3 className="Heading">
								Payments

							</h3>
							<p className="SubHeading">
								A Complete Commerce Toolkit, Built For Developers
							</p>
						</div>
					</a>
				</li>

			</ul>
		</div>
	)
}

export default Card