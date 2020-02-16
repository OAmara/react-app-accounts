import React, { Component } from 'react'
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react'
// modal options
// https://react.semantic-ui.com/modules/modal/

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
		// use following console.log to confirm balance returns as a number
		// console.log(this.state);
		return(
			<Modal open={true} cloeIcon={true} onClose={(e) => (this.props.closeModal))}>
				<Header>Make Changes to {this.state.name} Account:</Header>
				<Modal.Content>
					<Form onSubmit={this.handleSubmit}>
						<Label>Change Account Name:</Label>
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
						<Modal.Actions>
							<Button color={'olive'} type="Submit">Update Account</Button>
							<Button color={'orange'} onClick={this.props.closeModal}>(Discard Changes)</Button>
						</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}

export default EditAccountModal