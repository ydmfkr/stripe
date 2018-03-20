import React, {Component} from 'react'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import './Layout.css'

class Layout extends Component {

	render() {

		return (
			<div>
				<div>
					<Toolbar/>
				</div>

				<main className="Main">
					{this.props.children}
				</main>
			</div>
		)

	}

}

export default Layout