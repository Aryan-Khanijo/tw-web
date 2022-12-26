
import { useCallback, useState } from 'react';
import '../static/css/loginSignUp.css';
import SwitchForm from '../components/switchForm';
import LoginForm from '../components/loginForm';
import SignUpForm from '../components/signUpForm';

const LoginSignUpPage = (prop) => {

	const [contaianerClass, setContainerClass] = useState('login-container');
	console.log('here');
	const formSwitch = useCallback(() => {
		console.log('Switching form');
		if(contaianerClass.includes('log-in')) {
			setContainerClass(contaianerClass.replace(' login-log-in', ''));
		} else {
			setContainerClass(contaianerClass + ' login-log-in');
		}
	}, [contaianerClass]);

	
	const submit = useCallback((auth) => {
		console.log('Submitting form');
		setTimeout(() => {
			setContainerClass(contaianerClass + ' login-active');
			}, 250);
	}, [contaianerClass]);

	const signUpSwitchProps = {
		text: "Don't have an account?",
		switchForm: formSwitch,
		buttonText: "Sign up"
	};

	const loginSwitchProps = {
		text: "Have an account?",
		switchForm: formSwitch,
		buttonText: "Log in"
	};


	return (
		<div className={contaianerClass}>
			<div className="login-box"></div>
			<div className="login-container-forms">
				<div className="login-container-info">
					<SwitchForm prop={loginSwitchProps} />
					<SwitchForm prop={signUpSwitchProps} />
				</div>
				<div className="login-container-form">
					<LoginForm submit={submit} />
					<SignUpForm submit={submit} />
				</div>
			</div>
		</div>
	);
}

export default LoginSignUpPage;
