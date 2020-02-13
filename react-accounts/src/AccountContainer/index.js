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

	render() {
		console.log('Current state in DogContainer: ', this.state);
		return(
			<>
				<AccountList accounts={this.state.accounts}/>
				<NewAccountForm />
			</>
		)
	}
}

export default AccountContainer