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
		console.log('register() in App.js called with info: ', registerInfo);
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
			console.log(registerResponse);
			const registerJson = await registerResponse.json()
			console.log(registerJson);
		} catch(err) {
			if(err) {
				console.log(err);
			}
		}
	}

	login = (loginInfo) => {
			
	}

	render() {
	  	return (
		    <div className="App">
		    	{ 
			    	this.state.loggedIn 
			    	? 
			    	<AccountContainer /> 
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
