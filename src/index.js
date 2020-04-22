import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from 'components/Home'
import Users from 'components/Users'
import Chat from 'components/Chat'

import './css/reset.css';
import './css/index.css';
import './css/chat.css';

const App = () => {
	return (
		<Router>
			<Route exact exact activeClassName="active"path="/" component={Home} />
			<Route activeClassName="active" path="/users" component={Users} />
			<Route activeClassName="active" path="/chat" component={Chat} />

		</Router>
		
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
