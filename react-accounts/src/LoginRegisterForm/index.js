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

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})	
	}

	// seperation of concerns
	handleSubmit = (e) => {
		e.preventDefault()
		this.loginRegister()
	}

	loginRegister = () => {
		if(this.state.action === 'register') {
			this.props.register(this.state)
		} else {
			this.props.login(this.state)
		}
	}

	render() {
		// implementation notes:
			// Add form validation code
			// highlight blank fields in red
			// show erre message below them such as username required...
			// Use Regexp to impose requirements on password
		return(
			<div className="LoginRegisterForm">
				<h2 className='LoginRegisterForm-h2'>{this.state.action + ' here'}</h2>
				<Form onSubmit={this.handleSubmit}>
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
								onChange={this.handleChange}
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
						onChange={this.handleChange}
					/>
					<Label>Password:</Label>
					<Form.Input
						type='password'
						name='password'
						placeholder='Enter Password'
						value={this.state.password}
						onChange={this.handleChange}
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