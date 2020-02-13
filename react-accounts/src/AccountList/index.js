import React from 'react'
import { Card } from 'semantic-ui-react'

function AccountList(props) {

	let colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]
	const accounts = props.accounts.map((account) => {
		let color = colors[Math.floor(Math.random() * colors.length - 1)]
		return(
			<Card key={account.id} centered={true} color={color}>
				<Card.Content>
					<Card.Header>
						{account.institution}
					</Card.Header>
					<Card.Description>
						{account.name.toUpperCase()} account from {account.institution} holds: ${account.balance}.
					</Card.Description>
				</Card.Content>
			</Card>

		) 
	})

	return(
		<>
			<Card.Group>
				{accounts}
			</Card.Group>
		</>
	)
}

export default AccountList