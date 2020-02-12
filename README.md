# react-app-accounts
React App that will be fetching data from our Flask API Tutorial

First Start by creating a react app:
	in console run: 'create-react-app (insert new repository name HERE that will be contianing your react app)'

	Create a .env.development file that will be storing your back-end key from the (Flask Tutorial Accounts App) API. In this case it will be your localhost port since we are in development and not yet deployed. We will name this variable REACT_APP_API_URL and will use process.env.REACT_APP_API_URL to retrieve this environment variable within our react app.