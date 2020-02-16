import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import './index.css'

class LoginRegisterForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			email: '',
			password: '',
			action: 'login' // login or register
		}
	}

	switchForm = () => {
		this.setState({
			action: this.state.action === 'register' ? 'login' : 'register'
		})
	}

	render() {
		return(
			<div className="LoginRegisterForm">
				<h2 className='LoginRegisterForm-h2'>{this.state.action + ' here'}</h2>
				<Form>
					{
						// username should only show when registering
						this.state.action === 'register'
						?
						<React.Fragment>
							<Label>Username:</Label>
							<Form.Input
								type='text'
								name='username'
								placeholder='Enter Username'
								value={this.state.username}
							/>
						</React.Fragment>
						:
						null
					}
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
					<Button type='Submit'>{this.state.action === 'register' ? 'Register' : 'Login'}</Button>
				</Form>
				{
					this.state.action === 'register'
					?
					// register page
					<small>Already have an account? Log in <span className='fake-link' onClick={this.switchForm}>here</span>.</small>
					:
					// login page
					<small>Need an account? Sign up <span className='fake-link' onClick={this.switchForm}>here</span>!</small>
				}
			</div>
		)
	}
}

export default LoginRegisterForm