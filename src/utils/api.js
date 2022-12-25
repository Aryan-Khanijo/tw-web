import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_API_URL;

const getHeaders = (token) => {
	let headers = {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	};

	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	return headers;

}

const FetchUserAPIResponse = async (url, method, data) => {
	const user  = JSON.parse(localStorage.getItem('user')) || null;
	if (user) {
		const response = await FetchAPIResponse(`/user/${user.user_id}${url}`, method, data);
		return response;
	}
}

const FetchAPIResponse = async (url, method, data) => {
	const token = localStorage.getItem('token') || null;
	const headers = getHeaders(token);
	const response = await axios({
		method: method,
		url: url,
		data,
		baseURL,
		headers
	});
	return response;
}

export { FetchAPIResponse, FetchUserAPIResponse };