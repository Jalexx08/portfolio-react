import React from 'react';

const Card = ({ photo, name, url , desc}) => {

	return (
		<div className="card flex flex-col justify-between">
			<div className="overflow-hidden w-3/6 mx-auto p-5">
				<img src={photo} alt={name} className="w-full"/>
			</div>
			<div className="px-6 py-4">
				<h2 className="subtitle font-bold text-xl mb-2">{name}</h2>
				<p className="paragraph">{ desc }</p>
			</div>
			<div className="py-4 text-center">
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					className="btn btn-blue btn-blue:hover"
				>
					Ver
				</a>
			</div>
		</div>
	);
};

export default Card;
