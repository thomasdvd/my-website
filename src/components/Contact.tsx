import Logo from './icons/Logo';

export default function Contact() {
	return (
		<div className="flex justify-between items-center">
			<Logo />
			<div className="flex space-x-10 w-1/2 -translate-x-1/4 text-gray-300 text-xl">
				<a>github</a>
				<a>linkedin</a>
				<a>email</a>
			</div>
		</div>
	);
}
