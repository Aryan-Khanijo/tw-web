import { Link } from 'react-router-dom';
import '../static/css/userList.css'

const UserListView = ({ user, id }) => {
	return (
		<div className="user" key={id}>
			<p className="user-text">
				<Link to={'/user/'+id}>{user.name}</Link>
			</p>
		</div>
	);
}

export default UserListView;