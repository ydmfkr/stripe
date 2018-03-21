import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="Card">
            <ul className="PrimaryList">
                <li>
                    <a href="/payments" className="Payments">
                        <div>
                            <h3 >
                                Payments

                            </h3>
                            <p >
                                A Complete Commerce Toolkit, Built For Developers.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/subscriptions" className="Subscriptions">
                        <div>
                            <h3 >
                                Subscriptions

                            </h3>

                            <p >
                                The Smart Engine for Recurring Payments.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/connect" className="Connect">
                        <div>
                            <h3 >
                                Connect
                            </h3>
                            <p >
                                Everything platforms need to get sellers paid.
                            </p>
                        </div>
                    </a>
                </li>
            </ul>


            <ul className="SecondaryList">
                <li>
                    <a href="/sigma" className="Sigma">
                        <div>
                            <h3 className="Heading">
                                Sigma
                            </h3>
                            <p className="SubHeading">
                                Your business data at your fingertips.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/atlas" className="Atlas">
                        <div>
                            <h3 className="Heading">
                                Atlas
                            </h3>
                            <p className="SubHeading">
                                The best way to start an internet business.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/radar" className="Radar">
                        <div>
                            <h3 className="Heading">
                                Radar
                            </h3>
                            <p className="SubHeading">
                                Modern tools to help beat fraud.
                            </p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Card