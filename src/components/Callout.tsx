import { VscGithub } from 'react-icons/vsc';

export default function Callout() {
	return (
		<a
			href="https://github.com/thomasdvd/my-website"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="text-xl flex justify-center space-x-4 items-center">
				<div className="text-accent underline">
					checkout this website on github
				</div>
				<VscGithub />
			</div>
		</a>
	);
}
