# react-app-accounts
React App that will be fetching data from our Flask API Tutorial

This react tutorial is intended for those who have some base understanding and familiarity with running react apps and creating components. The purpose of this tutorial is to go over connecting an API (that you hopefully and may have particulary created from our Flask API Tutorial repository in OAmara GitHub)

First Start by creating a react app:
	in console run: 'create-react-app (insert new repository name HERE that will be contianing your react app)'

	Create a .env.development file that will be storing your back-end key from the (Flask Tutorial Accounts App) API. In this case it will be your localhost port since we are in development and not yet deployed. We will name this variable REACT_APP_API_URL and will use process.env.REACT_APP_API_URL to retrieve this environment variable within our react app. (look at notes.md file)

	Delete unused portions of react-app such as all info relating to logo, goodbye sweet react logo 😥.

	Create a functional react component in a new folder within the src folder. This file will contain our fetch call to the (Flask Accounts App) API. Import this component in main app.js component that is rendering on the Virtual DOM.

	After your new component is rendering, create the fetch call to the API.
	Here you will notice that there is an error with accessing the fetch due to a CORS policy 🤔. (look at notes.md for more information regarding CORS policy)

	We will be installing (flask_cors) module for our API. See Flask API Tutorial notes for details. This will enable our API server to connect to other specified origins.

	SEMANTIC UI -- fun library of Graphical UI components that are very easy to use and customize...fun stuff
	-	https://react.semantic-ui.com/views/card/
		install by running in console: 'npm install semantic-ui-react semantic-ui-css'

	Create AccountList component, pass state into it with props and utilize props to display data onto component.

	Create component that holds form for creating new accounts. Form should have same properties as seen in JSON data. Import into AccountContainer, component holding overall state. 

