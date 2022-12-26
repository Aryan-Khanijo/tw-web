import React, { useState, useEffect } from 'react';
import '../static/css/profilepage.css';
import Profile from '../components/profile';
import { FetchAPIResponse } from '../utils/api';
import Loader from '../components/loader';
const ProfilePage = (prop) => {

	const [user, setUser] = useState({});
	const [loader, setLoader] = useState(true);
	const [follow, setFollow] = useState(false);

	useEffect(() => {

		async function fetchUser() {
			const id = window.location.pathname.split('/')[2];
			const response = await FetchAPIResponse(`/user/${id}`, 'GET', null);
			setUser(response.data.data);
			let ids = localStorage.getItem('following')
			if(ids)
				ids = ids.split(',');
			console.log(ids);
			if (ids && ids.includes(id))
				setFollow(true);
			setLoader(false);
		}
		fetchUser();
	}, [localStorage.getItem('following')]);

	 

	return (
		<>
			{loader ? (
			<Loader />
		) : (
			<Profile profile={user} btn={true} follow={follow}/>
		)}
		</>
	);
}

export default ProfilePage;