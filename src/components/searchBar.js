
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { FetchAPIResponse } from '../utils/api';
const Searchbar = () => {



	const search = useCallback(() => {

		const getUsers = async () => {
			const name = document.querySelector('.search').value;
			const response = await FetchAPIResponse(`/user?$name=${name}`, 'GET', null);
			if (response.status === 200) {
				console.log(response.data.data);
				
				// setUsers(response.data.data);
			} else if (response.status === 204) {
				// setMessage(`No ${Name} Found`);
				console.log('No user found');
			} else {
				console.log('Something went wrong');
			}
			// setLoading(false);
		}
		getUsers();
	}, []);

	return (
		<form>
			<input className='search' type="text" placeholder="Search" />
				<button className='search' onClick={search}><FontAwesomeIcon icon={faSearch}/></button>
		</form>

	);
}

export default Searchbar;