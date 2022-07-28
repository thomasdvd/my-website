import { useEffect, useState } from 'react';

import { Link as LinkScroll } from 'react-scroll';

import Logo from './icons/Logo';

const links = ['skills', 'projects', 'about'] as const;

type Link = typeof links[number];

export default function Header() {
	const [activeLink, setActiveLink] = useState<Link | null>(null);
	const [scrollActive, setScrollActive] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrollActive(window.scrollY > 20);
		});
	}, []);

	return (
		<header
			className={
				'fixed top-0 z-30 flex h-16 w-full items-center justify-between px-4 transition-all' +
				(scrollActive
					? ' bg-white text-black shadow-md'
					: ' bg-gradient-to-r from-dark to-dark-blue pt-4 text-white')
			}
		>
			<div className="mx-auto flex w-[72rem] max-w-6xl items-center justify-between">
				<Logo fill={scrollActive ? 'black' : 'white'} />

				<div className="text:base ml-0 flex items-baseline space-x-1 font-medium md:ml-10 md:space-x-8 md:text-xl">
					{links.map((l) => (
						<LinkScroll
							activeClass="active"
							offset={-120}
							key={l}
							to={l}
							spy={true}
							smooth={true}
							duration={300}
							onSetActive={() => {
								setActiveLink(l);
							}}
							className={
								'animation-hover relative my-2 inline-block cursor-pointer py-2 px-4 ' +
								(activeLink === l ? 'animation-active ' : '')
							}
						>
							{l}
						</LinkScroll>
					))}
				</div>
			</div>
		</header>
	);
}
