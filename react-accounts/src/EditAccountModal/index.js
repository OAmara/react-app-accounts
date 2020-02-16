import React from 'react'
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react'
// modal options
// https://react.semantic-ui.com/modules/modal/

function EditAccountModal(props) {
		// console.log(props);

		return(
			<Modal open={props.open} closeIcon={true} onClose={props.closeModal}>
				<Header>Make Changes to {props.name} Account:</Header>
				<Modal.Content>
					<Form onSubmit={props.handleSubmitEditForm}>
						<Label>Change Account Name:</Label>
						<Form.Input
							type="text"
							name="name"
							value={props.accountToEdit.name}
							placeholder="Change Account Type"
							onChange={props.handleEditChange}
						/>
						<Label>Change Account Balance:</Label>
						<Form.Input
							type="number"
							name="balance"
							value={props.accountToEdit.balance}
							placeholder="Change Balance"
							onChange={props.handleEditChange}
						/>
						<Modal.Actions>
							<Button color={'olive'} type="Submit">Update Account</Button>
							{
								// Note: may have to delete button below since semantic modal will handle cancellation.
							}
							<Button color={'orange'} onClick={props.closeModal}>(Discard Changes)</Button>
						</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>
		)
}

export default EditAccountModal