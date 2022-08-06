import { useEffect, useState } from 'react';

import { Link as LinkScroll } from 'react-scroll';

import Logo from './icons/Logo';

const links = ['skills', 'projects', 'about'] as const;

type Link = typeof links[number];

export default function Header() {
	const [activeLink, setActiveLink] = useState<Link | null>(null);
	const [scrollActive, setScrollActive] = useState(false);
	const [isAtBottom, setIsAtBottom] = useState(false);

	useEffect(() => {
		// isAtBottom serves in case of large screens
		// about section is not tall enough to trigger
		// it's state as active,
		window.addEventListener('scroll', () => {
			const scrolling = window.scrollY > 20;
			const bottom =
				Math.ceil(window.innerHeight + window.scrollY) >=
				document.documentElement.scrollHeight;
			setScrollActive(scrolling);
			if (!scrolling) setActiveLink(null);

			if (bottom) {
				setIsAtBottom(true);
			} else {
				setIsAtBottom(false);
			}
		});
	}, []);

	useEffect(() => {
		if (window.innerWidth > 800 && window.innerHeight > 1000) {
			if (isAtBottom && activeLink !== 'about') setActiveLink('about');
			if (!isAtBottom && activeLink === 'about') setActiveLink('projects');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAtBottom]);

	return (
		<header
			className={
				'fixed top-0 z-10 flex h-16 w-full items-center justify-between px-4 transition-all' +
				(scrollActive
					? ' bg-white text-black shadow-md'
					: ' bg-dark pt-4 text-white')
			}
		>
			<div className="mx-auto flex w-[72rem] max-w-6xl items-center justify-between">
				<Logo fill={scrollActive ? '#334155' : 'white'} />

				<div className="text:base flex items-baseline space-x-4 font-medium transition-all md:ml-10 md:space-x-16 md:text-xl">
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
