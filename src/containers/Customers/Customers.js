import React, {Component} from 'react'

class Customers extends Component {

	componentWillMount(){
		this.props.changeToolbarColor('newblue')
		console.log("help")
	}

	render() {
		return (
			<div>
				HELP
			</div>
		)

	}

}

export default Customers