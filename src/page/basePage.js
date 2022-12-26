import LoginSignUpPage from './loginSignUpPage';
import NavBar from '../components/navbar';
import IndexPage from './indexPage';
import { useState, useCallback } from 'react';
import NotFound from '../components/notFound';
import HomePage from './homePage';
import { Routes, Route } from 'react-router-dom';
import AuthenticatedNavbar from '../components/navbarAuth';
import MyTweetsPage from './mytweets';
import ProfilePage from './profilePage';
import RelationList from './relationList';
import UserList from './userList';
import UserPage from './userPage';
import ProtectedRoute from '../utils/ProtectedRoute';
import CreateTweet from '../components/createTweet';

const BasePage = () =>{


	
	return (
		<div className="app">
				<Routes>
					<Route path='/' element={ <><NavBar/> <IndexPage /></>} />
					<Route path="/login" element={<LoginSignUpPage />} />
					<Route path="/home" element={<ProtectedRoute> <AuthenticatedNavbar /> <HomePage /> </ProtectedRoute>} />
					<Route path="/profile" element={<ProtectedRoute> <AuthenticatedNavbar />  <ProfilePage /> </ProtectedRoute>} />
					<Route path="/mytweets" element={<ProtectedRoute> <AuthenticatedNavbar /> <MyTweetsPage /> </ProtectedRoute>} />
					<Route path="/followers" element={<ProtectedRoute> <AuthenticatedNavbar /> <RelationList Name='followers' /> </ProtectedRoute>} />
					<Route path="/followings" element={<ProtectedRoute> <AuthenticatedNavbar />  <RelationList Name='following' /> </ProtectedRoute>} />
					<Route path="/users" element={<ProtectedRoute> <AuthenticatedNavbar />  <UserList /> </ProtectedRoute>} />
					<Route path="/user/:id" element={<ProtectedRoute> <AuthenticatedNavbar />  <UserPage /> </ProtectedRoute>} />
					<Route path="/createtweet" element={<ProtectedRoute> <AuthenticatedNavbar />  <CreateTweet /> </ProtectedRoute>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
	)
}

export default BasePage;