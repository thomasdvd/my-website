import { useState } from 'react';
import { MdOutlineMenu, MdClose } from 'react-icons/md';

import Logo from './icons/Logo';

export default function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<div className="flex items-center justify-between h-16">
				<div className="w-full flex items-center justify-between">
					<Logo />

					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-12 text-white text-xl font-medium">
							<a href="#skills">Skills</a>
							<a href="#projects">Projects</a>
							<a href="#about">About</a>
							<a href="#contact">Contact</a>
						</div>
					</div>
				</div>

				<div className="md:hidden">
					<button className="text-white">
						{isOpen ? (
							<MdClose size={32} onClick={() => setIsOpen(false)} />
						) : (
							<MdOutlineMenu size={32} onClick={() => setIsOpen(true)} />
						)}
					</button>
				</div>
			</div>

			{isOpen && (
				<div
					className="md:hidden absolute bg-gradient-to-r from-dark to-dark-blue inset-x-0 border-white border-b-4 shadow-lg"
					id="mobile-menu"
				>
					<div className="flex flex-col items-center p-2 pb-3 space-y-4 text-white text-xl font-medium sm:px-3">
						<a href="#">Skills</a>
						<a href="#">Projects</a>
						<a href="#">About</a>
						<a href="#">Contact</a>
					</div>
				</div>
			)}
		</>
	);
}
