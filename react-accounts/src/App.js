import React, { Component } from 'react';
import './App.css';
import AccountContainer from './AccountContainer'
import LoginRegisterForm from './LoginRegisterForm'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false,
			loggedInUserEmail: null // useful to track email or username to possibly display "logged in as ...@....com"...
		}
	}

	register = async (registerInfo) => {
		// console.log('register() in App.js called with info: ', registerInfo);
		const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'

		try {
			const registerResponse = await fetch(url, {
				// INCLUDE--> credentials: 'include' IN EVERY FETCH CALL
				// this will send cookie with fetch, will not be authorized without sending to api server.
				// this is done automatically with express servers, but not with flask.
				credentials: 'include', // sends cookie
				method: 'POST',
				body: JSON.stringify(registerInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			// console.log(registerResponse);
			const registerJson = await registerResponse.json()
			// console.log(registerJson);

			if(registerResponse.status === 201) {
				this.setState({
					loggedIn: true,
					loggedInUserEmail: registerJson.data.email // helpful UI info
				})
			}

		} catch(err) {
			if(err) {
				 console.log(err);
			}
		}
	}

	login = async (loginInfo) => {
		// console.log('login() in App.js info: ', loginInfo);
		const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'

		try {
			const loginResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(loginInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			// console.log(loginResponse);
			const loginJson = await loginResponse.json()
			// console.log(loginJson);

			// 'login' user and switch component to AccountContainer
			if(loginResponse.status === 200) {
				this.setState({
					loggedIn: true,
					loggedInUserEmail: loginJson.data.email // helpful UI info
				})
			}

		} catch (err) {
			if(err) {
				 console.error(err);
			}
		}
	}

	logout = async () => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/users/logout'

		try {
		const logoutResponse = await fetch(url, {
			credentials: 'include'
		})
		const logoutJson = await logoutResponse.json()

		if(logoutResponse.status === 200) {
			this.setState({
				loggedIn: false,
				loggedInUserEmail: null
			})
		}
		
		} catch(err) {
			if(err) {
				console.error(err)
			}
		}
	}

	render() {
	  	return (
		    <div className="App">
		    	{ 
			    	this.state.loggedIn 
			    	? 
			    	<AccountContainer logout={this.logout}/> 
			    	: 
			    	<LoginRegisterForm 
			    		register={this.register}
			    		login={this.login}
			    	/> 
		   		}
		    </div>
	  	);
	}
}

export default App;
