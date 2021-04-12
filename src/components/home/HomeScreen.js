import React from 'react';
import banner from '../../assets/img/portada.jpg';
import CV from '../../assets/img/CV.pdf';

const HomeScreen = () => {
	return (
		<div>
			<div className="container mx-auto mt-10">
				<h1 className="title">¡Hola y bienvenidos!</h1>
				<p className="paragraph">
					Mi nombre es Jhon Santana. Soy un desarollador Javascript FullStack en
					formación.
				</p>

				<div className="px-4 w-full bg-blue-700 flex justify-around mt-5 rounded-lg">
					<a
						className="link italic"
						href={CV}
						target="_blank"
						rel="noreferrer"
					>
						CV
					</a>
					<a
						className="link italic"
						href="https://github.com/Jalexx08"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
					<a
						className="link italic"
						href="https://www.linkedin.com/in/jhonalexsantana/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
					<a
						className="link italic"
						href="https://twitter.com/Alexx_1208"
						target="_blank"
						rel="noreferrer"
					>
						Twitter
					</a>
				</div>

				<div className="p-5 grid  sm:grid-cols-2  gap-5">
					<div className="w-full border-2 border-blue-400">
						<h2 className="subtitle">Hard Skills</h2>
						<hr className="border-blue-400" />
						<ul className="paragraph grid grid-cols-2 gap-2 my-5">
							<li>JavaScript</li>
							<li>Angular</li>
							<li>React</li>
							<li>NodeJs</li>
							<li>MongoDB</li>
							<li>MySQL</li>
							<li>HTML 5</li>
							<li>CSS3</li>
							<li>SASS</li>
							<li>Bootstrap</li>
							<li>Tailwind CSS</li>
							<li>Firestore/Firebase</li>
							<li>VS Code</li>
							<li>Linux/Ubuntu</li>
						</ul>
					</div>
					<div className="w-full border-2 border-blue-400">
						<h2 className="subtitle">Soft Skills</h2>
						<hr className="border-blue-400" />
						<ul className="paragraph grid grid-cols-2 gap-2 my-5">
							<li>Responsable</li>
							<li>Trabajo en equipo</li>
							<li>Creativo</li>
							<li>Amigable</li>
							<li>Proactivo</li>
							<li>Pensamiento crítico</li>
						</ul>
						{/* <p className="paragraph">
							Responsable, trabajo en equipo, creativo, amigable, proactivo,
							pensamiento crítico.
						</p> */}
					</div>
				</div>
				<div className="p-5">
					<img src={banner} alt="portada" className=" w-full" />
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
