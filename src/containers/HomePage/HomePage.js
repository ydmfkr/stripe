import React, {Component} from 'react'

import Header from "../../components/Header/Header"
import AppIllustrations from "../../components/UI/AppIllustrations/AppIllustrations"
import FooterOne from "../../components/FooterOne/FooterOne"
import FooterTwo from "../../components/FooterTwo/FooterTwo"

import '../../CommonCss.css'
import './HomePage.css'
import Section from "../../components/Section/Section"
import FooterCards from "../../components/FooterCards/FooterCards"
import CustomerLogos from "../../components/CustomerLogos/CustomerLogos"

class HomePage extends Component {

	componentWillMount(){
		this.props.changeToolbarColor('white');
	}

	getSectionOneDetails = () => {
		return {
			sectionAlignClass: 'section-content-left',
			contentStyle: {
				maxWidth: '500px'
			},
			headerLogoClass: 'section-heading-holder-side-logo',
			leftImageClass: 'section-gone',
			leftImageLogo: '',
			imageClass: '',
			headerAlignClass: 'section-text-right',
			heading: 'The Complete Toolkit For Internet Business',
			rightImageClass: '',
			rightImageLogo: require('../../assets/images/internet-business-icon.svg'),
			textAlignClass: 'section-text-right',
			description: 'Stripe builds the most powerful and flexible tools for internet commerce. ' +
			'Whether you’re creating a subscription service, an on-demand marketplace, an e-commerce store, ' +
			'or a crowdfunding platform, Stripe’s meticulously-designed APIs and unmatched functionality help ' +
			'you create the best possible product for your users. Hundreds of thousands of the world’s most innovative ' +
			'technology companies are scaling faster and more efficiently by building their businesses on Stripe.',
			link: '/customers',
			linkAlignClass: 'section-content-right',
			linkDescription: 'Discover how Businesses use Stripe ->'
		}
	}

	getDevelopersSection = () => {
		return {
			sectionAlignClass: 'section-content-center',
			contentStyle: {
				maxWidth: '700px'
			},
			headerLogoClass: 'section-content-center',
			leftImageClass: '',
			leftImageLogo: require('../../assets/images/developers-first-icon.svg'),
			imageClass: 'section-content-center',
			headerAlignClass: 'section-text-center',
			heading: 'DEVELOPERS FIRST',
			rightImageClass: 'section-gone',
			rightImageLogo: '',
			textAlignClass: 'section-text-center',
			description: 'We believe that payments is a problem rooted in code, not finance. ' +
			'We obsessively seek out elegant, composable abstractions that enable robust, scalable, ' +
			'flexible integrations. Because we eliminate needless complexity and extraneous details, ' +
			'you can get up and running with Stripe in just a couple of minutes.',
			link: '/customers',
			linkAlignClass: 'section-gone',
			linkDescription: 'Discover how Businesses use Stripe ->'
		}
	}

	getImprovingSection = () => {
		return {
			sectionAlignClass: 'section-content-left',
			contentStyle: {
				maxWidth: '450px'
			},
			headerLogoClass: 'section-content-left',
			leftImageClass: '',
			leftImageLogo: require('../../assets/images/always-improving-icon.svg'),
			imageClass: 'section-content-left',
			headerAlignClass: 'section-text-left',
			heading: 'Always Improving',
			rightImageClass: 'section-gone',
			rightImageLogo: '',
			textAlignClass: 'section-text-left',
			description: 'Stripe is an always-improving toolchain that gains new ' +
			'features every month. Our world-class engineering team constantly iterates ' +
			'upon every facet of the Stripe stack. And from Apple Pay to Alipay, ' +
			'building on Stripe means you get early access to the latest technologies.',
			link: '/customers',
			linkAlignClass: 'section-content-left',
			linkDescription: 'Learn about Stripe\'s products  ->'
		}
	}

	getGlobalSection = () => {
		return {
			sectionAlignClass: 'section-content-right',
			contentStyle: {
				maxWidth: '420px'
			},
			headerLogoClass: 'section-content-left',
			leftImageClass: '',
			leftImageLogo: require('../../assets/images/global-scale-icon.svg'),
			imageClass: 'section-content-left',
			headerAlignClass: 'section-text-left',
			heading: 'Global Scale',
			rightImageClass: 'section-gone',
			rightImageLogo: '',
			textAlignClass: 'section-text-left',
			description: 'We help power 100,000+ businesses in 100+ countries and ' +
			'across nearly every industry. Headquartered in San Francisco, ' +
			'Stripe has 9 global offices and hundreds of people working to help transform how modern businesses are built and run.',
			link: '/customers',
			linkAlignClass: 'section-content-left',
			linkDescription: 'More about us  ->'
		}
	}

	render() {
		return (
			<div>
				<Header/>
				<AppIllustrations/>
				<div className='ContainerLarge'>
					<Section
						sectionAlignClass={this.getSectionOneDetails().sectionAlignClass}
						contentStyle={this.getSectionOneDetails().contentStyle}
						headerLogoClass={this.getSectionOneDetails().headerLogoClass}
						leftImageClass={this.getSectionOneDetails().leftImageClass}
						leftImageLogo={this.getSectionOneDetails().leftImageLogo}
						imageClass={this.getSectionOneDetails().imageClass}
						headerAlignClass={this.getSectionOneDetails().headerAlignClass}
						heading={this.getSectionOneDetails().heading}
						rightImageClass={this.getSectionOneDetails().rightImageClass}
						rightImageLogo={this.getSectionOneDetails().rightImageLogo}
						textAlignClass={this.getSectionOneDetails().textAlignClass}
						description={this.getSectionOneDetails().description}
						link={this.getSectionOneDetails().link}
						linkAlignClass={this.getSectionOneDetails().linkAlignClass}
						linkDescription={this.getSectionOneDetails().linkDescription}/>
					<Section
						sectionAlignClass={this.getDevelopersSection().sectionAlignClass}
						contentStyle={this.getDevelopersSection().contentStyle}
						headerLogoClass={this.getDevelopersSection().headerLogoClass}
						leftImageClass={this.getDevelopersSection().leftImageClass}
						leftImageLogo={this.getDevelopersSection().leftImageLogo}
						imageClass={this.getDevelopersSection().imageClass}
						headerAlignClass={this.getDevelopersSection().headerAlignClass}
						heading={this.getDevelopersSection().heading}
						rightImageClass={this.getDevelopersSection().rightImageClass}
						rightImageLogo={this.getDevelopersSection().rightImageLogo}
						textAlignClass={this.getDevelopersSection().textAlignClass}
						description={this.getDevelopersSection().description}
						link={this.getDevelopersSection().link}
						linkAlignClass={this.getDevelopersSection().linkAlignClass}
						linkDescription={this.getDevelopersSection().linkDescription}/>
					<div style={{display: 'flex'}}>
						<Section
							sectionAlignClass={this.getImprovingSection().sectionAlignClass}
							contentStyle={this.getImprovingSection().contentStyle}
							headerLogoClass={this.getImprovingSection().headerLogoClass}
							leftImageClass={this.getImprovingSection().leftImageClass}
							leftImageLogo={this.getImprovingSection().leftImageLogo}
							imageClass={this.getImprovingSection().imageClass}
							headerAlignClass={this.getImprovingSection().headerAlignClass}
							heading={this.getImprovingSection().heading}
							rightImageClass={this.getImprovingSection().rightImageClass}
							rightImageLogo={this.getImprovingSection().rightImageLogo}
							textAlignClass={this.getImprovingSection().textAlignClass}
							description={this.getImprovingSection().description}
							link={this.getImprovingSection().link}
							linkAlignClass={this.getImprovingSection().linkAlignClass}
							linkDescription={this.getImprovingSection().linkDescription}/>
						<Section
							sectionAlignClass={this.getGlobalSection().sectionAlignClass}
							contentStyle={this.getGlobalSection().contentStyle}
							headerLogoClass={this.getGlobalSection().headerLogoClass}
							leftImageClass={this.getGlobalSection().leftImageClass}
							leftImageLogo={this.getGlobalSection().leftImageLogo}
							imageClass={this.getGlobalSection().imageClass}
							headerAlignClass={this.getGlobalSection().headerAlignClass}
							heading={this.getGlobalSection().heading}
							rightImageClass={this.getGlobalSection().rightImageClass}
							rightImageLogo={this.getGlobalSection().rightImageLogo}
							textAlignClass={this.getGlobalSection().textAlignClass}
							description={this.getGlobalSection().description}
							link={this.getGlobalSection().link}
							linkAlignClass={this.getGlobalSection().linkAlignClass}
							linkDescription={this.getGlobalSection().linkDescription}/>
					</div>
				</div>
				<div className='ContainerLarge'>
					<CustomerLogos/>
				</div>
				<footer>
					<div className='ContainerXLarge'>
						<FooterCards/>
					</div>
					<div className='ContainerLarge'>
						<FooterOne/>
						<FooterTwo/>
					</div>
				</footer>
			</div>
		)

	}


}

export default HomePage