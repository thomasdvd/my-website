import Image from 'next/image';
import FadeInWhenVisible from './FadeIn';

function SkillCard({ name, size }: { name: string; size: number }) {
	return (
		<FadeInWhenVisible>
			<div className="pt-2 flex flex-col items-center">
				<Image alt={name} src={`/${name}.svg`} width={size} height={size} />
				<text className="italic py-2">{name}</text>
			</div>
		</FadeInWhenVisible>
	);
}

function SmallSkillCard({
	name,
	size,
	index,
}: {
	name: string;
	size: number;
	index: number;
}) {
	return (
		<FadeInWhenVisible delay={index / 10}>
			<div className="m-2 p-4 md:p-6 w-28 rounded-md bg-gray-100 opacity-80 flex flex-col items-center border hover:border-accent hover:shadow-lg">
				<Image alt={name} src={`/${name}.svg`} width={size} height={size} />
				<text className="italic pt-2">{name}</text>
			</div>
		</FadeInWhenVisible>
	);
}

export default function Skills() {
	return (
		<>
			<section
				id="skills"
				className="p-2 -mt-20 w-[20rem] md:w-[40rem] mx-auto rounded-md shadow-md bg-white"
			>
				<h1 className="-mt-10 text-xl italic text-white">specialized in:</h1>
				<div className="mt-5 flex flex-col md:flex-row justify-around">
					<SkillCard name={'react'} size={100} />
					<SkillCard name={'nodejs'} size={100} />
					<SkillCard name={'postgres'} size={100} />
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-6 lg:px-16">
				<h2 className="my-8 text-2xl italic">Other tech I use frequently:</h2>

				<div className="flex flex-wrap space-x-2 md:justify-between">
					{[
						'graphql',
						'ubuntu',
						'nginx',
						'docker',
						'nextjs',
						'hasura',
						'typescript',
					].map((skill, i) => (
						<SmallSkillCard key={skill} name={skill} size={50} index={i} />
					))}
				</div>
			</section>
		</>
	);
}
