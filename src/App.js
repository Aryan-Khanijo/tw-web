import './App.css';
import './static/css/base.css';
import LoginSignUpPage from './page/loginSignUpPage';
import NavBar from './components/navbar';
import IndexPage from './page/indexPage';
import { useState, useEffect } from 'react';
import NotFound from './components/notFound';
import HomePage from './page/homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Searchbar from './components/searchBar';
import MyTweetsPage from './page/mytweets';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		setIsAuthenticated(localStorage.getItem('authorized'));
	}, []);
	return (
		<Router>
			<div className="app">
				<NavBar />
				<Searchbar />
				<Routes>
					<Route path='/' element={<IndexPage />} />
					<Route path="/login" element={<LoginSignUpPage />} />
					{isAuthenticated ? (
						<>
							{/* <Route path="/profile" element={<ProfilePage />} /> */}
							<Route path="/mytweets" element={<MyTweetsPage />} />
							<Route path="/home" element={<HomePage />} />
						</>
					) : (
						<Route path="*" element={<NotFound />} />
					)}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
