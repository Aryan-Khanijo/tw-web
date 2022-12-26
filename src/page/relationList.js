import { useEffect, useState } from "react";
import { FetchUserAPIResponse } from "../utils/api";
import UserListView from "../components/user";
import Loader from "../components/loader";


const RelationList = ({ Name }) => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [message, setMessage] = useState(null);
	const [str, setStr] = useState(Name);



	useEffect(() => {
		const getUsers = async () => {
			const response = await FetchUserAPIResponse(`/${Name}`, 'GET', null);
			if (response.status === 200) {
				console.log(response.data.data);
				setUsers(response.data.data);
			} else if (response.status === 204) {
				setMessage(`No ${Name} Found`);
			} else {
				setMessage('Something went wrong');
			}
			setLoading(false);
		}
		setStr(Name.split(" ").map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase()).join(" "))
		getUsers();
	}, [Name]);

	return (
		<>
			<h1>{str}</h1>
			{loading ? (
				<Loader />
			) : (
				message ? (
					<p>{message}</p>
				) : (
					<>
						<div>
							{users.map(user => (
								<UserListView user={user} id={user.user_id} />
							))}
						</div>
					</>
				)
			)}
		</>
	)
}

export default RelationList;
