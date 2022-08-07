import Logo from './icons/Logo';

export default function Contact() {
	return (
		<div className="flex items-center justify-between">
			<Logo fill="white" />
			<div className="flex w-1/2 -translate-x-1/4 space-x-4 font-bold text-gray-200 underline md:space-x-10 md:text-xl">
				<a
					href="https://github.com/thomasdvd"
					target="_blank"
					rel="noopener noreferrer"
				>
					github
				</a>
				<a
					href="https://linkedin.com/in/thomasdvd"
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedin
				</a>
				<a
					href="mailto:david.thomas026@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					email
				</a>
			</div>
		</div>
	);
}
