import { useCallback, useState } from "react";
import { FetchAPIResponse, FetchUserAPIResponse } from "../utils/api";
import { useNavigate } from "react-router-dom";

const LoginForm = ({submit}) => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const Navigate = useNavigate();

	const login = useCallback(async () => {
		console.log('Logging in');
		const data = {
			username,
			password
		}
		const response = await FetchAPIResponse('/auth/login', 'POST', data);
		console.log(response);
		if(response.status === 200) {
			submit(true);
			localStorage.setItem('token', response.data.data.access_token);
			localStorage.setItem('user', JSON.stringify(response.data.data.user));
			localStorage.setItem('authorized', true);
			let ids = null;
			const followingResp = await FetchUserAPIResponse('/following', 'GET');
			if (followingResp?.data?.data)
				ids = followingResp?.data?.data?.map((user) => { return user.user_id });
			if (ids)
				localStorage.setItem('following', ids);
			setTimeout(() => {
				Navigate('/home');
			}, 2000);
		} else if (response.status === 401) {
			alert('Invalid username or password');
		} else {
			alert('Something went wrong');
		}
	}, [username, password, submit, Navigate]);

	const handleUsernameChange = useCallback((e) => {
		setUsername(e.target.value);
	},[]);
	const handlePasswordChange = useCallback((e) => {
		setPassword(e.target.value);
	},[]);



	return (
		<div className="login-form-item login-log-in">
			<div className="login-table">
				<div className="login-table-cell">
					<input name="Username" required placeholder="Username / Email" type="text" onChange={(e) => {handleUsernameChange(e)}} />
					<input name="Password" required placeholder="Password" type="Password" onChange={(e) => {handlePasswordChange(e)}} />
					<div className="login-btn" onClick={login}>
						Log in
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginForm;