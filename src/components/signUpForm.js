import { FetchAPIResponse } from "../utils/api";
import { useCallback, useState } from "react";
function SignUpForm(prop) {

	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const signUp = useCallback(async () => {
		console.log('Signing up');
		const data = {
			username,
			name,
			password
		};
		const response = await FetchAPIResponse('/auth/signup', 'POST', data);
		if (response.status === 201) {
			prop.submit();
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		}
		console.log(response);
	}, [username, name, password, prop]);

	const handleUsernameChange = useCallback((e) => {
		setUsername(e.target.value);
	}, []);

	const handleNameChange = useCallback((e) => {
		setName(e.target.value);
	}, []);

	const handlePasswordChange = useCallback((e) => {
		setPassword(e.target.value);
	}, []);


	return (
		<div className="login-form-item login-sign-up">
			<div className="login-table">
				<div className="login-table-cell">
					<input name="email" placeholder="Email" type="text" onChange={(e) => {handleUsernameChange(e)}} />
					<input name="fullName" placeholder="Full Name" type="text" onChange={(e) => {handleNameChange(e)}} />
					<input name="Password" placeholder="Password" type="Password" onChange={(e) => {handlePasswordChange(e)}} />
					<div className="login-btn" onClick={signUp} >
						Sign up
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUpForm;