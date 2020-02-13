import React from 'react'

function AccountList(props) {

	const accounts = props.accounts.map((account) => {
		return <li key={account.id}>{account.name} is from {account.institution} and holds ${account.balance}.</li>
	})

	return(
		<>
			<ul>
				{accounts}
			</ul>
		</>
	)
}

export default AccountList