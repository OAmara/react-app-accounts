import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

class NewAccountForm extends Component {

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
			<Segment>
				<h4>Add New Account:</h4>
				<Form>
					<Label>Institution:</Label>
					<Form.Input
						type="text"
						name="institution"
						value={this.state.institution}
						placeholder="Enter Affiliated Bank"
					/>
					<Label>Account Type:</Label>
					<Form.Input
						type="text"
						name="name"
						value={this.state.name}
						placeholder="Enter Account Type"
					/>
					<Label>Account Balance:</Label>
					<Form.Input
						type="number"
						name="balance"
						value={this.state.balance}
						placeholder="Current Balance"
					/>
				</Form>
			</Segment>
		)
	}
}

export default NewAccountForm