import { Component } from 'react'

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
			console.log('Data from getAccounts: ', accountsJson);
		} catch(err) {
			console.error(err);
		}
	}

	render() {
		return(
			'AccountContainer'
		)
	}
}

export default AccountContainer