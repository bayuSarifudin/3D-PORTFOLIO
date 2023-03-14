import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`${
				styles.paddingX
			} w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${
				scrolled ? 'bg-primary' : 'bg-transparent'
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2 active:scale-95"
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						alt="logo"
						className="w-9 aspect-square object-contain"
					/>
					<p className="text-white text-[18px] font-bold cursor-pointer flex">
						Bayu&nbsp;
						<span className="hidden md:block">
							|&nbsp;Frontend Developer
						</span>
					</p>
				</Link>

				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => {
						return (
							<li
								key={link.id}
								onClick={() =>
									setActive(link.title)
								}
								className={`${
									active === link.title
										? 'text-white'
										: 'text-secondary'
								} hover:text-white active:scale-95 text-[18px] font-medium cursor-pointer duration-150`}
							>
								<a href={`#${link.id}`}>
									{link.title}
								</a>
							</li>
						);
					})}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						onClick={() => setToggle(!toggle)}
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] aspect-square object-contain cursor-pointer"
					/>

					<div
						className={`${
							toggle ? 'flex' : 'hidden'
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4">
							{navLinks.map((link) => {
								return (
									<li
										key={link.id}
										onClick={() => {
											setToggle(
												!toggle
											);
											setActive(
												link.title
											);
										}}
										className={`${
											active ===
											link.title
												? 'text-white'
												: 'text-secondary'
										} font-poppins font-medium cursor-pointer text-[1rem]`}
									>
										<a
											href={`#${link.id}`}
										>
											{link.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
