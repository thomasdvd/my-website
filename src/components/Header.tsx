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
			const scrolling = window.scrollY > 20;
			setScrollActive(scrolling);
			if (!scrolling) setActiveLink(null);
		});
	}, []);

	// BUG, on a tall screen the about page can never be active

	return (
		<header
			className={
				'fixed top-0 z-10 flex h-16 w-full items-center justify-between px-4 transition-all' +
				(scrollActive
					? ' bg-white text-black shadow-md'
					: ' bg-gradient-to-r from-dark to-dark-blue pt-4 text-white')
			}
		>
			<div className="mx-auto flex w-[72rem] max-w-6xl items-center justify-between">
				<Logo fill={scrollActive ? 'black' : 'white'} />

				<div className="text:base flex items-baseline font-medium transition-all md:ml-10 md:space-x-16 md:text-xl">
					{links.map((l) => (
						<LinkScroll
							/* allows two links to have active at the same time */
							/* manually bypassing with state so that there is only one Link active */
							activeClass="x"
							offset={l === 'projects' ? -20 : -120}
							key={l}
							to={l}
							spy={true}
							smooth={true}
							duration={300}
							onSetActive={() => {
								setActiveLink(l);
							}}
							className={
								'link relative my-2 inline-block cursor-pointer ' +
								(activeLink === l ? 'active' : '')
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
