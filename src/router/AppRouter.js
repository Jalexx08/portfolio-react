import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/ui/Header';
import HomeScreen from '../components/home/HomeScreen';
import ProjectScreen from '../components/project/ProjectScreen';
import AboutmeScreen from '../components/aboutme/AboutmeScreen';

const AppRouter = () => {
	return (
		<Router>
			<Header />
			<div>
				<Switch>
					<Route exact path="/">
						<HomeScreen />
					</Route>
					<Route exact path="/projects">
						<ProjectScreen />
					</Route>
					<Route exact path="/aboutme">
						<AboutmeScreen />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
