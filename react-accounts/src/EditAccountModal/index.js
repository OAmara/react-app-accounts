import React, { Component } from 'react'
import { Segment, Form, Button, Label} from 'semantic-ui-react'

class EditAccountModal extends Component {

	constructor(props) {
		super(props)

		this.state = {
			institution: '',
			name: '',
			balance: 0,
		}
	}

	componentDidMount() {
		this.setState({
			institution: this.props.accountToEdit.institution,
			name: this.props.accountToEdit.name,
			balance: this.props.accountToEdit.balance,
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})	
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateAccount(this.state)
	}

	render() {
		// console.log('EditAccountModal props: ', this.props);
		return(
			<Segment>
				<h3>Make Changes To Account for {this.state.institution}:</h3>
				<Form onSubmit={this.handleSubmit}>
					<Label>Change Institution:</Label>
					<Form.Input
						type="text"
						name="institution"
						value={this.state.institution}
						placeholder="Transfer To Bank"
						onChange={this.handleChange}
					/>
					<Label>Change Account Type:</Label>
					<Form.Input
						type="text"
						name="name"
						value={this.state.name}
						placeholder="Change Account Type"
						onChange={this.handleChange}
					/>
					<Label>Change Account Balance:</Label>
					<Form.Input
						type="number"
						name="balance"
						value={this.state.balance}
						placeholder="Change Balance"
						onChange={this.handleChange}
					/>
					<Button color={'olive'} type="Submit">Update Account</Button>
					<Button color={'orange'} onClick={this.props.closeModal}>(Discard Changes)</Button>
				</Form>
			</Segment>
		)
	}
}

export default EditAccountModal