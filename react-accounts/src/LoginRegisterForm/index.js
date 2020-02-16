import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'

class LoginRegisterForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			email: '',
			password: '',
		}
	}
	render() {
		return(
			<div className="LoginRegisterForm">
				<Form>
					<Label>Username:</Label>
					<Form.Input
						type='text'
						name='username'
						placeholder='Enter Username'
						value={this.state.username}
					/>
					<Label>Email:</Label>
					<Form.Input
						type='text'
						name='email'
						placeholder='Enter Email'
						value={this.state.email}
					/>
					<Label>Password:</Label>
					<Form.Input
						type='text'
						name='password'
						placeholder='Enter Password'
						value={this.state.password}
					/>
					<Button type='Submit'>Log In</Button>
				</Form>
			</div>
		)
	}
}

export default LoginRegisterForm