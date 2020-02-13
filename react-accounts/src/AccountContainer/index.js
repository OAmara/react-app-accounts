import React, { Component } from 'react'
import AccountList from '../AccountList'
import NewAccountForm from '../NewAccountForm'
import EditAccountModal from '../EditAccountModal'

class AccountContainer extends Component {

	constructor(props) {
		super(props)

		this.state = {
			accounts: [],
			idOfAccountToEdit: -1,
		}
	}

	// runs after render successfully runs
	componentDidMount() {
		// retrieve accounts when component mounts
		this.getAccounts()
	}

	getAccounts = async () => {
		try {
			const accountsResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/accounts/')
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
				headers: {
					'Content-Type': 'application/json'
			}
		})
		const createAccountJson = await createAccountResponse.json()
		console.log('createAccount method: ', createAccountJson);

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
		console.log('Attempting deletion of account#: ', id);
		try {
			const deleteAccountResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/accounts/' + id, 
				{
					method: 'DELETE'
			})
			const deleteAccountJson = await deleteAccountResponse.json();
			console.log('Response from trying to delete account: ', deleteAccountJson);

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
	}

	editAccount = (idOfAccountToEdit) => {
		console.log('id of Account to edit: ', idOfAccountToEdit);
		this.setState({
			idOfAccountToEdit: idOfAccountToEdit
		})
	}

	render() {
		// console.log('Current state in DogContainer: ', this.state);
		return(
			<>
				<AccountList 
					accounts={this.state.accounts}
					deleteAccount={this.deleteAccount}
					editAccount={this.editAccount}
				/>
				<NewAccountForm 
					createAccount={this.createAccount} 
				/>
				{
					this.state.idOfAccountToEdit !== -1
					?
					<EditAccountModal />
					:
					null
				}
			</>
		)
	}
}

export default AccountContainer