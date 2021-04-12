import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePicture from '../../assets/img/jassdev.png';

const Header = () => {
	return (
		<header className="navbar w-full">
			<NavLink to ="/" className="profile flex  justify-between items-center cursor-pointer">
				<figure className="w-20 rounded-full overflow-hidden">
					<img className="w-full" src={profilePicture} alt="profile" />
				</figure>
				<div className="block">
					<span className="text-yellow-300 px-3 font-bold text-2xl">
						JassDev
					</span>
				</div>
			</NavLink>

			<ul className="flex justify-evenly w-80">
				<li className="">
					<NavLink to="/" activeClassName="selected" className="link">
						Inicio
					</NavLink>
				</li>
				<li className="">
					<NavLink to="/projects" activeClassName="selected" className="link">
						Proyectos
					</NavLink>
				</li>
				<li className="">
					<NavLink to="/aboutme" activeClassName="selected" className="link">
						Sobre mi
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
