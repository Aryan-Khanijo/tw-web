import React, { useState, useEffect, useCallback } from 'react';

import '../static/css/navbar.css';

const NavBar = () => {

	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [login, setLogin] = useState(false);
	const [path, setPath] = useState(null);

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));
	}, []);

	useEffect(() => {
		setPath(window.location.pathname);
	}, []);

	useEffect(() => {
		if (path === '/login') {
			setLogin(true);
		} else {
			setLogin(false);
		}
	}, [path]);

	useEffect(() => {
		if (user) {
			setIsAuthenticated(true);
		}
	}, [user]);

	const logout = useCallback(() => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('authorized');
		setIsAuthenticated(false);
	}, []);

	return (
		<>
		<div className="sidenav">
				{isAuthenticated ? (
					<>
						<a className='navbar' href='/home'>Home</a>
						<a className='navbar' href='/mytweets'>My Tweets</a>
						<a className='navbar' href='/profile'>Profile</a>
						<a className='navbar' href='/' onClick={logout}>Logout</a>
					</>
				) : (
					login ? (
						<></>
					) :
						<>
							<a className='navbar' href='/login'>Login</a>
						</>
				)}
			</div>
		</>



	)
}

export default NavBar;