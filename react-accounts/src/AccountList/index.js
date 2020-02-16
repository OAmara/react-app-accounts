import React from 'react'
import { Card, Button } from 'semantic-ui-react'

function AccountList(props) {

	let colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]
	const accounts = props.accounts.map((account) => {
		let color = colors[Math.floor(Math.random() * colors.length - 1)]
		return(
			<Card key={account.id} centered={true} color={color}>
				<Card.Content>
					<Card.Description>
						{account.name.toUpperCase()} account holds: ${account.balance}.
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Button onClick={() => props.deleteAccount(account.id)}>Delete Account</Button>
					<Button onClick={() => props.editAccount(account.id)}>Edit Account</Button>
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