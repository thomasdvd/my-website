import { VscGithub } from 'react-icons/vsc';

export default function Callout() {
	return (
		<a
			href="https://github.com/thomasdvd/my-website"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="flex items-center justify-center space-x-4 text-xl">
				<div className="text-accent underline">
					checkout this website on github
				</div>
				<VscGithub />
			</div>
		</a>
	);
}
