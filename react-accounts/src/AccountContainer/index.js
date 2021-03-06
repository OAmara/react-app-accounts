import React, { Component } from 'react'
import AccountList from '../AccountList'
import NewAccountForm from '../NewAccountForm'
import EditAccountModal from '../EditAccountModal'

class AccountContainer extends Component {

	constructor(props) {
		super(props)

		this.state = {
			accounts: [],
			editModalOpen: false,
			// data editing with form modal
			accountToEdit: {
				name: '',
				balance: 0,
				id: '',
			}
		}
	}

	// runs after render successfully runs
	componentDidMount() {
		// retrieve accounts when component mounts
		this.getAccounts()
	}

	getAccounts = async () => {
		try {
			const accountsResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/accounts/', {
				// cookie must be sent every time for back end to know user is logged in
				credentials: 'include'
			})
			const accountsJson = await accountsResponse.json()
			// drill down into object result from API to determine what needs to be placed in state
			// console.log('Data from getAccounts: ', accountsJson);
			this.setState({
				accounts: accountsJson.data
			})
		} catch(err) {
			console.error(err);
		}
	}

	createAccount = async (accountToAdd) => {
		// console.log('Submitting Form on: ', accountToAdd);
		try {
			// follow: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
		const createAccountResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/accounts/', 
			{
				method: 'POST',
				body: JSON.stringify(accountToAdd), // converts object to JSON
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
			}
		})
		const createAccountJson = await createAccountResponse.json()
		// console.log('createAccount method: ', createAccountJson);

		// this will reload component without having to run another fetch call. Save query time and data!
		// this will also confirm POST successfully to DB
		if(createAccountResponse.status === 201) {
			this.setState({
				//spread operator
				accounts: [...this.state.accounts, createAccountJson.data]
			})
		}

		} catch(err) {
			console.error(err)
		}
	}

	deleteAccount = async (id) => {
		// console.log('Attempting deletion of account#: ', id);
		try {
			const deleteAccountResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/accounts/' + id, 
				{
					method: 'DELETE',
					credentials: 'include'
			})
			const deleteAccountJson = await deleteAccountResponse.json();
			// console.log('Response from trying to delete account: ', deleteAccountJson);

			if(deleteAccountJson.status === 200) {
				this.setState({
					accounts: this.state.accounts.filter(account => account.id !== id)
				})
			} else {
				throw new Error('Could not Delete Account')
			}

		} catch(err) {
			console.error(err)
		}
		this.closeModal()
	}

	editAccount = (idOfAccountToEdit) => {
		// console.log('id of Account to edit: ', idOfAccountToEdit);
		const accountToEdit = this.state.accounts.find((account) => account.id === idOfAccountToEdit)
		this.setState({
			editModalOpen: true,
			accountToEdit: {
				// spread operator representing form fields being edited
				...accountToEdit
			}
		})
	}

	handleEditChange = (e) => {
		// const account = this.state.accountToEdit
		// [e.target.name]: e.target.value
		// this.setState({ accountToEdit: account })
		// ^^ use above, or do something simpler!
		this.setState({
			accountToEdit: {
				// spread operator
				...this.state.accountToEdit, // copies all properties from object in state
				[e.target.name]: e.target.value // replaces old value in spread operator with what is being edited here
			}
		})	
	}

	handleSubmitEditForm = (e) => {
		e.preventDefault()
		this.updateAccount()
	}

	updateAccount = async (newAccountInfo) => {
		// id of account is in state
		try {
			const updateAccountResponse = await fetch(
				process.env.REACT_APP_API_URL + '/api/v1/accounts/' + this.state.accountToEdit.id,
				{
					method: 'PUT',
					body: JSON.stringify(this.state.accountToEdit),
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
			// console.log('updateAccount fetch response: ', updateAccountResponse);
			const updateAccountJson = await updateAccountResponse.json();
			// console.log('update data: ', updateAccountJson);

			if(updateAccountResponse.status === 200) {
				const updatedAccountsArray = this.state.accounts.map((account) => {
					if(account.id === updateAccountJson.data.id) {
						return updateAccountJson.data
					} else {
						return account
					}
				})

				this.setState({
					accounts: updatedAccountsArray
				})
			}
		} catch(err) {
			console.error(err)
		}
		this.closeModal()
	}

	closeModal = () => {
		this.setState({
			editModalOpen: false
		})
	}

	render() {
		// console.log('Current state in AccountContainer: ', this.state);
		return(
			<>
				<AccountList 
					accounts={this.state.accounts}
					deleteAccount={this.deleteAccount}
					editAccount={this.editAccount}
				/>
				<EditAccountModal 
					open={this.state.editModalOpen}
					accountToEdit={this.state.accountToEdit}
					updateAccount={this.updateAccount}
					closeModal={this.closeModal}
					handleEditChange={this.handleEditChange}
					handleSubmitEditForm={this.handleSubmitEditForm}
				/>
				<NewAccountForm 
					createAccount={this.createAccount} 
				/>
				<button onClick={this.props.logout}>Logout</button>
			</>
		)
	}
}

export default AccountContainer