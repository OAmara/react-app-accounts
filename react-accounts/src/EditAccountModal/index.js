import React, { Component } from 'react'

class EditAccountModal extends Component {

	constructor(props) {
		super(props)

		this.state = {
			institution: '',
			name: '',
			balance: 0,
		}
	}

	render() {
		return(
			'EditAccountModal'
		)
	}
}

export default EditAccountModal