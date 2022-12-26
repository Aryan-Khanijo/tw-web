import Feed from '../components/feed';
import NotFound from '../components/notFound';

const HomePage = () => {
	if(localStorage.getItem('authorized')) {
		return (<Feed url="/tweets/feed" />)
	} else {
		return (<NotFound />)
	}
}

export default HomePage;