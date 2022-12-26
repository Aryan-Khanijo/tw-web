import { Link } from "react-router-dom";
import FollowUnfollowButton from "./followUnfollowButton";

const Profile = ({ profile, btn, follow }) => {

	return (
		<div className="profile">
			<h1 className="name">{profile.name}</h1>
			<p className="email">{profile.username}</p>
			<div className="stats">
				<span className='stat'><span className="follower-count">{ profile.followers || 0}</span> <Link to='/followers'>followers</Link></span>
				<span className='stat'><span className="following-count">{ profile.following || 0}</span><Link to='/followings'>following</Link> </span>
			</div>
			{btn? <FollowUnfollowButton isFollowing={follow} id={profile.user_id}/> : <></>}
		</div>
	)
};

export default Profile;