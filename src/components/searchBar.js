
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Searchbar = () => {
	return (
		<form>
			<input type="text" placeholder="Search" />
				<button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
		</form>

	);
}

export default Searchbar;