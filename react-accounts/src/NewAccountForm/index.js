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

	// Allows us to change and record changes made in input forms
	handleChange = (e) => {
		this.setState({
			// computed property name for any input name and value. 
			// This enables us to not have to hard code each input name and value.
			[e.target.name]: e.target.value
		})	
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
						onChange={this.handleChange}
					/>
					<Label>Account Type:</Label>
					<Form.Input
						type="text"
						name="name"
						value={this.state.name}
						placeholder="Enter Account Type"
						onChange={this.handleChange}
					/>
					<Label>Account Balance:</Label>
					<Form.Input
						type="number"
						name="balance"
						value={this.state.balance}
						placeholder="Current Balance"
						onChange={this.handleChange}
					/>
					<Button color={'olive'} type="Submit">Create Account</Button>
				</Form>
			</Segment>
		)
	}
}

export default NewAccountForm