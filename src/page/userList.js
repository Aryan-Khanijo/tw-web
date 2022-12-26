import { useEffect, useState } from "react";
import { FetchAPIResponse } from "../utils/api";
import UserListView from "../components/user";
import Loader from "../components/loader";


const UserList = ({ Name }) => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [message, setMessage] = useState(null);
	const [page, setPage] = useState(1);




	useEffect(() => {
		const getUsers = async () => {
			const response = await FetchAPIResponse(`/user?$page=${page}&$limit=10&$order=-created_at`, 'GET', null);
			if (response.status === 200) {
				console.log(response.data.data);
				setUsers(response.data.data);
				setPage(page + 1);
			} else if (response.status === 204) {
				setMessage(`No User Found`);
			} else {
				setMessage('Something went wrong');
			}
			setLoading(false);
		}
		getUsers();
	}, []);

	return (
		<>
			<h1>Users</h1>
			{loading ? (
				<Loader />
			) : (
				message ? (
					<p>{message}</p>
				) : (
					<>
						<div>
							{users.map(user => (
								<UserListView user={user} id={user.id}/>
							))}
						</div>
					</>
				)
			)}
		</>
	)
}

export default UserList;
