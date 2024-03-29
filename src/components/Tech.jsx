import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
	return (
		<>
			<div className="hidden md:flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((techno) => {
					return (
						<div className="w-28 aspect-square flex flex-col justify-center items-center" key={techno.name}>
							<BallCanvas icon={techno.icon} />
							<p className="font-medium text-gray-500">{techno.name}</p>
						</div>
					);
				})}
			</div>

			<div className="flex md:hidden flex-row flex-wrap justify-center gap-10">
				{
					technologies.map((techno) => {
						return (
							<div className="w-28 aspect-square flex flex-col justify-center items-center" key={techno.name}>
								<div>
									<img className='' src={techno.icon} alt={techno.name} />
								</div>
								<p className="font-medium text-gray-500">{techno.name}</p>
							</div>
						)
					})
				}
			</div>
		</>
	);
};

export default Tech;
