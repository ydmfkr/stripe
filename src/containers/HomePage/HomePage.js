import React, {Component} from 'react'
import Header from "../../components/Header/Header"
import '../../CommonCss.css'
import AppIllustrations from "../../components/UI/AppIllustrations/AppIllustrations"
import Card from "../../components/UI/Card/Card"

class HomePage extends Component {

	render() {

		return (
			<div className="ContainerLarge">
				<Header/>
				<AppIllustrations/>
				<Card/>
			</div>
		)

	}

}

export default HomePage