import React, {Component} from 'react'

import Header from "../../components/Header/Header"
import AppIllustrations from "../../components/UI/AppIllustrations/AppIllustrations"

import '../../CommonCss.css'
import './HomePage.css'

class HomePage extends Component {

	render() {


		return (
			<div className="ContainerLarge">
				<Header/>
				<AppIllustrations/>
			</div>
		)

	}



}

export default HomePage