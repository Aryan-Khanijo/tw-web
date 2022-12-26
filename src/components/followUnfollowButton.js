import React, { useState, useCallback } from 'react';
import { FetchUserAPIResponse } from '../utils/api';


const FollowUnfollowButton = ({ isFollowing, id }) => {

	const [followed, setFollowed] = useState(isFollowing);

	const followUser = useCallback(async() => {
		const data = {
			followed_id: id
		};
		const response = await FetchUserAPIResponse('/follow', 'POST', data);
		const ids = localStorage.getItem('following');
		if(ids){
			const newIds = ids.split(',');
			if (!newIds.includes(id))
				newIds.push(id);
			localStorage.setItem('following', newIds);
		}	
		else {
			localStorage.setItem('following', id);
		}
		
		console.log(response);
		setFollowed(true);
	}, [id]);

	const unfollowUser = useCallback(async() => {
		const data = {
			followed_id: id
		};
		const response = await FetchUserAPIResponse('/unfollow', 'POST', data);
		const ids = localStorage.getItem('following').split(',');
		const newIds = ids.filter((newid) => newid != id);
		if(newIds.length)
			localStorage.setItem('following', newIds);
		else
			localStorage.removeItem('following');
		console.log(response);
		setFollowed(false);
	}, [id]);

	return (
		<>
			{followed ? (
				<div className="follow-btn" onClick={unfollowUser}> Unfollow </div>
			) : (
				<div className="follow-btn" onClick={followUser}> Follow </div>
			)}
		</>
	)
}

export default FollowUnfollowButton;