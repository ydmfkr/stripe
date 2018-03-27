import React from 'react'

import '../../CommonCss.css'
import './FooterTwo.css'
import DisplayWithIcon from "../UI/DisplayWithIcon/DisplayWithIcon"

const FooterTwo = (props) => {

	const getOnlyLink = (link = '',
	                     iconStyle = {width: '0px', height: '0px', margin: '0px'},
	                     headingStyle = {margin: '0px'},
	                     subHeading = '',
	                     subHeadingStyle = {margin: '3px 0px', color: '#8898aa'}) => {
		return {
			link,
			iconStyle,
			headingStyle,
			subHeading,
			subHeadingStyle
		}
	}

	const getLinkWithIcon = (link = '',
	                         iconUrl = '',
	                         iconStyle = {width: '12px', height: '12px', margin: '0 10px 0 0'},
	                         headingStyle = {margin: '0px'},
	                         subHeading = '',
	                         subHeadingStyle = {margin: '3px 0px', color:'#6772e5'}) => {
		return {
			link,
			iconUrl,
			iconStyle,
			headingStyle,
			subHeading,
			subHeadingStyle
		}
	}

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


	const getListElements = links => {
		return (
			<li>
				{links.map(link => getLinkElement(link))}
			</li>
		)
	}

	const getIconListElements = links => {
		return (
			<li>
				{links.map(link => getLinkElement(link))}
			</li>
		)
	}

	const x = getLinkWithIcon(
		'',
		require('../../assets/images/location-arrow-icon.svg'),
		undefined,
		undefined,
		'United States',
		undefined
	)
	console.log(x)

	const footerListOne = getIconListElements(
		[
			getLinkWithIcon(
				'/help',
				require('../../assets/images/location-arrow-icon.svg'),
				undefined,
				undefined,
				'United States',
				undefined
			),
			getLinkWithIcon(
				'/help',
				require('../../assets/images/language-icon.svg'),
				undefined,
				undefined,
				'English',
				undefined
			)
		]
	)

	const paymentListOne = getListElements(
		[
			getOnlyLink(
				'/payments',
				undefined,
				undefined,
				'Payments',
				undefined
			),
			getOnlyLink(
				'/subscriptions',
				undefined,
				undefined,
				'Subscriptions',
				undefined
			),
			getOnlyLink(
				'/connect',
				undefined,
				undefined,
				'Connect',
				undefined
			),
			getOnlyLink(
				'/sigma',
				undefined,
				undefined,
				'Sigma',
				undefined
			),
			getOnlyLink(
				'/atlas',
				undefined,
				undefined,
				'Atlas',
				undefined
			),
			getOnlyLink(
				'/radar',
				undefined,
				undefined,
				'Radar',
				undefined
			)
		]
	)

	const paymentListTwo = getListElements(
		[
			getOnlyLink(
				'/pricing',
				undefined,
				undefined,
				'Pricing',
				undefined
			),
			getOnlyLink(
				'/works-with',
				undefined,
				undefined,
				'Works With Stripe',
				undefined
			),
			getOnlyLink(
				'/global',
				undefined,
				undefined,
				'Global',
				undefined
			),
			getOnlyLink(
				'/guides',
				undefined,
				undefined,
				'Guides',
				undefined
			)
		]
	)

	const developersList = getListElements(
		[
			getOnlyLink(
				'/documentation',
				undefined,
				undefined,
				'Documentation',
				undefined
			),
			getOnlyLink(
				'/api-ref',
				undefined,
				undefined,
				'API Reference',
				undefined
			),
			getOnlyLink(
				'/api-status',
				undefined,
				undefined,
				'API Status',
				undefined
			),
			getOnlyLink(
				'/open-source',
				undefined,
				undefined,
				'Open Source',
				undefined
			)
		]
	)

	const companyList = getListElements(
		[
			getOnlyLink(
				'/about',
				undefined,
				undefined,
				'About',
				undefined
			),
			getOnlyLink(
				'/customers',
				undefined,
				undefined,
				'Customers',
				undefined
			),
			getOnlyLink(
				'/jobs',
				undefined,
				undefined,
				'Jobs',
				undefined
			),
			getOnlyLink(
				'/blog',
				undefined,
				undefined,
				'Blog',
				undefined
			),
			getOnlyLink(
				'/press',
				undefined,
				undefined,
				'Press',
				undefined
			),
			getOnlyLink(
				'/environment',
				undefined,
				undefined,
				'Environment',
				undefined
			)
		]
	)

	const resourcesList = getListElements(
		[
			getOnlyLink(
				'/support',
				undefined,
				undefined,
				'Support',
				undefined
			),
			getOnlyLink(
				'/contact',
				undefined,
				undefined,
				'Contact',
				undefined
			),
			getOnlyLink(
				'/privacy',
				undefined,
				undefined,
				'Privacy & Terms',
				undefined
			)
		]
	)


	return (
		<div className='ContainerLarge footer-two'>

			<div className='pre-footers-nav'>
				<ul>
					{footerListOne}
				</ul>
			</div>
			<div className='footers-nav'>
				<h4 className='footers-heading'>Products</h4>
				<div className='split-column'>
					<ul>
						{paymentListOne}
					</ul>
					<ul>
						{paymentListTwo}
					</ul>
				</div>
			</div>
			<div className='footers-nav'>
				<h4 className='footers-heading'>Developers</h4>
				<div className='split-column'>
					<ul>
						{developersList}
					</ul>

				</div>
			</div>
			<div className='footers-nav'>
				<h4 className='footers-heading'>Company</h4>
				<div className='split-column'>
					<ul>
						{companyList}
					</ul>

				</div>
			</div>
			<div className='footers-nav'>
				<h4 className='footers-heading'>Resources</h4>
				<div className='split-column'>
					<ul>
						{resourcesList}
					</ul>

				</div>
			</div>
		</div>
	)
}

export default FooterTwo