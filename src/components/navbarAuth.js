import React, { useCallback } from 'react';
import Searchbar from './searchBar';
const AuthenticatedNavbar = () => {
	const logout = useCallback(() => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('authorized');
		;
	}, []);
	return (
		<>
			<div className='sidenav'>
				<a className='navbar' href='/home'>Home</a>
				<a className='navbar' href='/mytweets'>My Tweets</a>
				<a className='navbar' href='/profile'>Profile</a>
				<a className='navbar' href='/createtweet'>Tweet</a>
				<a className='navbar' href='/users'>Users</a>
				<a className='navbar' href='/' onClick={logout}>Logout</a>
			</div>
			{/* <Searchbar></Searchbar> */}
		</>

	)
};

export default AuthenticatedNavbar;