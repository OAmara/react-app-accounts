import React, { Component } from 'react'
import AccountList from '../AccountList'
import NewAccountForm from '../NewAccountForm'

class AccountContainer extends Component {

	constructor(props) {
		super(props)

		this.state = {
			accounts: []
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

	render() {
		// console.log('Current state in DogContainer: ', this.state);
		return(
			<>
				<AccountList 
					accounts={this.state.accounts} 
				/>
				<NewAccountForm 
					createAccount={this.createAccount} 
				/>
			</>
		)
	}
}

export default AccountContainer