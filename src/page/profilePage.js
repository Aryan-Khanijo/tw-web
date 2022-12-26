import React, { useState, useEffect } from 'react';
import '../static/css/profilepage.css';
import Profile from '../components/profile';

const ProfilePage = () => {

	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));
	}, []);

	return (
		<Profile profile={user} btn={false} />
	);
}

export default ProfilePage;