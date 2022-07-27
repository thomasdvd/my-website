import { HiExternalLink } from 'react-icons/hi';
import FadeInWhenVisible from './FadeIn';

interface Props {
	name: string;
	nameAsLink: boolean;
	description: string;
	techStack: Array<string>;
}

export default function Project({
	name,
	nameAsLink,
	description,
	techStack,
}: Props) {
	return (
		<FadeInWhenVisible>
			<div className="max-w-6xl mx-auto py-8 px-2 md:px-6 lg:px-16 flex flex-col items-center justify-center xl:flex-row">
				<div className="p-2 md:p-6 relative left-0 opacity-80">
					<p className="mb-4">
						{nameAsLink ? (
							<a
								href="https://app.villatrans.it"
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl font-bold text-white underline flex items-end space-x-2"
							>
								<text>{name}</text>
								<HiExternalLink />
							</a>
						) : (
							<p className="text-2xl font-bold text-white">{name}</p>
						)}
					</p>

					<p className="py-2 px-4 text-xl bg-gray-300 text-gray-900 rounded-md shadow-lg w-[24rem] md:w-[32rem] text-justify">
						{description}
					</p>

					<div className="flex flex-wrap mt-1">
						{techStack.map((tech) => (
							<text
								key={tech}
								className="m-2 px-2 py-0.5 bg-gray-600 rounded-md text-white opacity-90"
							>
								{tech}
							</text>
						))}
					</div>
				</div>

				<figure className="w-[24rem] md:w-[32rem] h-80 shrink-0 rounded-lg bg-gray-200"></figure>
			</div>
		</FadeInWhenVisible>
	);
}
