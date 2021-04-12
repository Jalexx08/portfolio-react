import React from 'react';
import Card from '../card/Card';
import { projects } from '../../data/projects';

const projectsImg = require.context('../../assets/img/projects', true);

const ProjectScreen = () => {
	// console.log(projectsImg('./project-dositec.png').default);

	return (
		<div className="container mx-auto">
			<h1 className="title">Proyectos</h1>
			<div className="my-5 flex flex-wrap -mx-2">
				{/*w-full sm:w-1/2 lg:w-1/3 px-2 my-2 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{projects.map((project) => (
						<Card
							key={project.id}
							photo={projectsImg(`./${project.id}.png`).default}
							{...project}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectScreen;
