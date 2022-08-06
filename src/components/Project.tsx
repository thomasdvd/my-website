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
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-2 pt-4 pb-16 md:py-16 md:px-6 lg:px-16 xl:flex-row">
				<div className="relative left-0 p-2 opacity-80 md:p-6">
					<div className="mb-4">
						{nameAsLink ? (
							<a
								href="https://app.villatrans.it"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-end space-x-2 text-2xl font-bold text-white underline"
							>
								<text>{name}</text>
								<HiExternalLink />
							</a>
						) : (
							<p className="text-2xl font-bold text-white">{name}</p>
						)}
					</div>

					<p className="w-[20rem] rounded-md bg-gray-300 py-2 px-4 text-justify text-base text-dark shadow-lg md:w-[32rem] md:text-xl">
						{description}
					</p>

					<div className="mt-1 flex w-[20rem] flex-wrap md:w-[32rem]">
						{techStack.map((tech) => (
							<text
								key={tech}
								className="m-2 rounded-md border-2 border-accent px-2 py-0.5 text-sm text-white opacity-90 md:text-base"
							>
								{tech}
							</text>
						))}
					</div>
				</div>

				<figure className="h-80 w-[20rem] shrink-0 rounded-lg bg-gray-200 md:w-[32rem]"></figure>
			</div>
		</FadeInWhenVisible>
	);
}
