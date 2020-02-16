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
			    	<LoginRegisterForm /> 
		   		}
		    </div>
	  	);
	}
}

export default App;
