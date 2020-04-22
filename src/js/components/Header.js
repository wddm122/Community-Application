import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = ({heading}) => {

	return (
		<header>
			<nav class="header-nav">
				<ul>
					<li><Link exact activeClassName="active" to="/">Home</Link></li>
					<li><Link activeClassName="active" to="/users">Users</Link></li>
					<li><Link activeClassName="active" to="/chat">Chat</Link></li>
				</ul>
				<hr />
			</nav>
			{(heading) ? <h1>{heading}</h1> : `No heading`}
			
		</header>
		
	)
}

export default Header;
