import './App.css';
import './static/css/base.css';
import { BrowserRouter as Router } from 'react-router-dom';

import BasePage from './page/basePage';

function App() {
	return (
		<Router>
			<BasePage />
		</Router>
	);
}

export default App;
