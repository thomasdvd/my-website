import Logo from './icons/Logo';

export default function Header() {
	return (
		<header>
			<nav className="flex justify-between  py-4 text-white max-w-screen-xl mx-auto">
				<Logo />
				<ul className="text-3xl flex space-x-32 items-center">
					<li>Skills</li>
					<li>Projects</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}
