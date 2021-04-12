import React from 'react';
import Footer from './components/ui/Footer';
import AppRouter from './router/AppRouter';

const PortfolioApp = () => {
	return (
		<div>
			<AppRouter/>
			<Footer />
		</div>
	);
};

export default PortfolioApp;
