import React from 'react'
import './NavigationItems.css'
import NavigationItem from "../NavigationItem/NavigationItem"
import DisplayWithIcon from "../../UI/DisplayWithIcon/DisplayWithIcon"
import Card from "../../UI/Card/Card"
import NavigationHelper from '../../../helper/NavigationHelper'

const NavigationItems = (props) => {

	let cards = [];
	let lists = [];

	//for each element in the section
	let getListElements = (cardSection) => {
		return cardSection.map(
			linkElement => (
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
			)
		)
	}

	//for each card section
	let getCardElements = (cardElement) => {
		let lists = []
		for (let cardSection in cardElement) {
			if (cardElement.hasOwnProperty(cardSection)) {
				console.log(cardElement[cardSection])
				let list1 = (
					<ul>
						{getListElements(cardElement[cardSection])}
					</ul>
				)
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
				<Card className='dropdown'>
					{getCardElements(cardElement)}
				</Card>
			)
			cards.push(card1)
		}
	}
	console.log(cards)
	console.log(lists)

	return (
		<ul className="NavigationItems">
			<NavigationItem
				link="/"
				exact
				dropdown={cards[0]}
			>
				Products
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
				dropdown={cards[1]}
			>
				Developers
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
				dropdown={cards[2]}
			>
				Company
			</NavigationItem>
			<NavigationItem
				link="/"
				exact
			>
				Pricing
			</NavigationItem>
		</ul>
	)


}

export default NavigationItems