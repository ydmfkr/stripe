import React from 'react'
import './NavigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem'
import DisplayWithIcon from '../../UI/DisplayWithIcon/DisplayWithIcon'
import Card from '../../UI/Card/Card'

const NavigationItems = props => {
	/*let cards = []
	let lists = []

	//for each element in the section
	let getListElements = cardSection => {
		return cardSection.map(linkElement => (
			<DisplayWithIcon
				link={linkElement.link}
				heading={linkElement.heading}
				headingStyle={linkElement.headingStyle}
				iconUrl={linkElement.iconUrl}
				iconStyle={linkElement.iconStyle}
				subHeading={linkElement.subHeading}
				subHeadingStyle={linkElement.subHeadingStyle}
				headingContainerStyle={linkElement.headingContainerStyle}
			/>
		))
	}

	//for each card section
	let getCardElements = cardElement => {
		let lists = []
		for (let cardSection in cardElement) {
			if (cardElement.hasOwnProperty(cardSection)) {
				console.log(cardElement[cardSection])
				let list1 = <ul>{getListElements(cardElement[cardSection])}</ul>
				lists.push(list1)
			}
		}
		return lists
	}

	//for each drop down

	for (let cardElements in NavigationHelper()) {
		if (NavigationHelper().hasOwnProperty(cardElements)) {
			const cardElement = NavigationHelper()[cardElements]
			console.log(cardElement)
			let card1 = (
				<Card className="dropdown">{getCardElements(cardElement)}</Card>
			)
			cards.push(card1)
		}
	}
	console.log(cards)
	console.log(lists)
	*/

	const getLinkElement = link => {
		return (
			<DisplayWithIcon
				link={link.link}
				heading={link.heading}
				headingStyle={link.headingStyle}
				iconUrl={link.iconUrl}
				iconStyle={link.iconStyle}
				subHeading={link.subHeading}
				subHeadingStyle={link.subHeadingStyle}
				headingContainerStyle={link.headingContainerStyle}
			/>
		)
	}

	const getLink = (link,
	                 heading,
	                 headingStyle = {},
	                 iconUrl,
	                 iconStyle = {},
	                 subHeading,
	                 subHeadingStyle = {},
	                 headingContainerStyle = {}) => {
		return {
			link,
			heading,
			headingStyle,
			iconUrl,
			iconStyle,
			subHeading,
			subHeadingStyle,
			headingContainerStyle
		}
	}

	const getSectionElement = links => {
		return (
			<ul className="link-item">{
				links.map(linkElement => getLinkElement(linkElement))
			}</ul>
		)
	}

	const getDropdown = sections => {
		return (
			<Card className="dropdown" cardStyle={{width: '500px', marginLeft: '-17%', marginTop: '1%'}}>
				{sections.map(sectionElement => getSectionElement(sectionElement))}
			</Card>
		)
	}

	let dropdown3 = getDropdown(
		[
			[
				getLink(
					'/about-stripe',
					'About Stripe',
					{},
					require('../../../assets/images/about-icon.svg'),
					{
						height: '18px',
						width: '18px',
						marginRight: '20px'
					},
					'',
					{},
					{
						margin: '10px'
					}
				),
				getLink(
					'/customers',
					'Customers',
					{},
					require('../../../assets/images/customers-icon.svg'),
					{
						height: '18px',
						width: '18px',
						marginRight: '20px'
					},
					'',
					{},
					{
						margin: '10px'
					}
				),
				getLink(
					'/jobs',
					'Jobs',
					{},
					require('../../../assets/images/jobs-icon.svg'),
					{
						height: '18px',
						width: '18px',
						marginRight: '20px'
					},
					'',
					{},
					{
						margin: '10px'
					}
				),
				getLink(
					'/environment',
					'Environment',
					{},
					require('../../../assets/images/environment-icon.svg'),
					{
						height: '18px',
						width: '18px',
						marginRight: '20px'
					},
					'',
					{},
					{
						margin: '10px'
					}
				)
			],
			[
				getLink(
					'/from-the-blog',
					'From the Blog',
					{},
					require('../../../assets/images/blog-icon.svg'),
					{
						height: '18px',
						width: '18px',
						marginRight: '20px'
					},
					'',
					{},
					{
						margin: '10px'
					}
				),
				getLink(
					'/from-the-blog/new-developers',
					'',
					{},
					'',
					{
						width: '0px',
						height: '0px',
						marginRight: '35px'
					},
					'New Developers tools in the Dashboard >',
					{
						display: 'inline'
					},
					{
						margin: '10px'
					}
				),
				getLink(
					'/from-the-blog/stripe-atlas',
					'',
					{},
					'',
					{
						marginRight: '5px'
					},
					'Stripe Atlas: the business of SasS >',
					{
						display: 'inline'
					},
					{
						margin: '10px'
					}
				),
				getLink(
					'/from-the-blog/carbon-neutral',
					'',
					{},
					'',
					{
						marginRight: '5px'
					},
					'Stripe is now Carbon Neutral >',
					{
						display: 'inline'
					},
					{
						margin: '10px'
					}
				)
			]
		]
	)

	let dropdown2 = getDropdown(
		[
			[
				getLink(
					'/documentation',
					'Documentation',
					{},
					require('../../../assets/images/documentation-icon.svg'),
					{
						alignSelf: 'flex-start',
						marginTop: '20px',
						height: '18px',
						width: '18px',
						marginRight: '20px'
					},
					'Start integration Strip\'s products and tools.',
					{},
					{
						margin: '10px'
					}
				),
				getLink(
					'/full-api',
					'Full API Reference',
					{},
					require('../../../assets/images/apiref-icon.svg'),
					{
						height: '18px',
						width: '18px',
						marginRight: '20px'
					},
					'',
					{},
					{
						margin: '10px'
					}
				),
				getLink(
					'/api-status',
					'API Status',
					{},
					require('../../../assets/images/api-ref-icon.svg'),
					{
						height: '18px',
						width: '18px',
						marginRight: '20px'
					},
					'',
					{},
					{
						margin: '10px'
					}
				),
				getLink(
					'/open-source',
					'Open Source',
					{},
					require('../../../assets/images/opensource-icon.svg'),
					{
						height: '18px',
						width: '18px',
						marginRight: '20px'
					},
					'',
					{},
					{
						margin: '10px'
					}
				)
			]
		]
	)

	let dropdown1 = getDropdown(
		[
			[
				getLink(
					'/payments',
					'Payments',
					null,
					require('../../../assets/images/payment-icon.svg'),
					{
						marginRight: '20px'
					},
					'A Complete Commerce Toolkit, Built For Developers.'
				),
				getLink(
					'/subscriptions',
					'Subscriptions',
					null,
					require('../../../assets/images/subscription-icon.svg'),
					{
						marginRight: '20px'
					},
					'The smart engine for recurring payments.'
				),
				getLink(
					'/connect',
					'Connect',
					null,
					require('../../../assets/images/connect-icon.svg'),
					{
						marginRight: '20px'
					},
					'Everything platforms need for sellers to get paid'
				)
			],
			[
				getLink(
					'/sigma',
					'Sigma',
					{
						display: 'inline',
						marginRight: '10px'
					},
					require('../../../assets/images/sigma-icon.svg'),
					{
						height: '30px',
						width: '30px'
					},
					'Your business data at your fingertips',
					{
						display: 'inline'
					},
					{
						margin: '10px'
					}
				),
				getLink(
					'/atlas',
					'Atlas',
					{
						display: 'inline',
						marginRight: '10px'
					},
					require('../../../assets/images/atlas-icon.svg'),
					{
						height: '30px',
						width: '30px'
					},
					'The best way to start an internet business.',
					{
						display: 'inline'
					},
					{
						margin: '10px'
					}
				),
				getLink(
					'/radar',
					'Radar',
					{
						display: 'inline',
						marginRight: '10px'
					},
					require('../../../assets/images/radar-icon.svg'),
					{
						height: '30px',
						width: '30px'
					},
					'Modern tools to help beat fraud.',
					{
						display: 'inline'
					},
					{
						margin: '10px'
					}
				)

			], [
			getLink(
				'/works-with',
				'Works With Stripe',
				{},
				require('../../../assets/images/works-with-stripe-icon.svg'),
				{
					height: '18px',
					width: '18px',
					marginRight: '20px'
				},
				'',
				{},
				{
					margin: '10px'
				}
			)
		]])


	return (
		<ul className="NavigationItems">
			<NavigationItem
				link="/"
				exact
				dropdown={dropdown1}
				toolbarColor={props.toolbarColor}
			>
				Products
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
				dropdown={dropdown2}
				toolbarColor={props.toolbarColor}>
				Developers
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
				dropdown={dropdown3}
				toolbarColor={props.toolbarColor}>
				Company
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
				toolbarColor={props.toolbarColor}>
				Pricing
			</NavigationItem>
		</ul>
	)
}

export default NavigationItems
