import { FetchUserAPIResponse } from '../utils/api';
import { useCallback, useState } from 'react';
import '../static/css/createTweet.css';


const CreateTweet = () => {

	const [tweet, setContent] = useState('');
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
	const [message, setMessage] = useState('');

	const handleContentChange = (e) => {
		setContent(e.target.value);
	}


	const PostTweet = useCallback(async() => {
		const data = {
			tweet,
			user_id: user.user_id
		};
		const response = await FetchUserAPIResponse('/tweets', 'POST', data);
		if (response.status === 201) {
			setMessage('Tweet Posted');
			document.querySelector('.tweet').value = '';

		} else {
			setMessage('Something went wrong');
		}
	}, [tweet, user]);



	return (
		<div className='tweet'>
			<label className='tweet'>Create Tweet</label><br />
			<label className='tweet-message'>{message}</label><br />
			<textarea className='tweet'  onChange={(e) => {handleContentChange(e)}} rows="5" cols="50"></textarea><br />
			<div className="login-btn" onClick={PostTweet}>Submit</div>
		</div>

	)
}

export default CreateTweet;