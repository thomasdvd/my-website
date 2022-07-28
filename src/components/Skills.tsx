import Image from 'next/image';
import FadeInWhenVisible from './FadeIn';

function SkillCard({ name, size }: { name: string; size: number }) {
	return (
		<FadeInWhenVisible>
			<div className="flex flex-col items-center pt-2">
				<Image alt={name} src={`/${name}.svg`} width={size} height={size} />
				<text className="py-2 italic">{name}</text>
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
			<div
				className="m-2 flex w-28 flex-col items-center rounded-md border bg-gray-100 p-4 opacity-80 transition-all 
				hover:border-accent hover:shadow-lg "
			>
				<Image alt={name} src={`/${name}.svg`} width={size} height={size} />
				<p className="pt-2 italic">{name}</p>
			</div>
		</FadeInWhenVisible>
	);
}

export default function Skills() {
	return (
		<section id="skills" className="mb-20">
			<div className="mx-auto -mt-20 w-[20rem] rounded-md bg-white p-2 shadow-md md:w-[40rem]">
				<h1 className="-mt-10 text-xl italic text-white">specialized in:</h1>
				<div className="mt-5 flex flex-col justify-around md:flex-row">
					<SkillCard name={'react'} size={100} />
					<SkillCard name={'nodejs'} size={100} />
					<SkillCard name={'postgres'} size={100} />
				</div>
			</div>

			<div className="mx-auto max-w-6xl px-6 lg:px-16">
				<h2 className="my-8 text-2xl italic">Other tech I use frequently:</h2>

				<div className="flex flex-wrap md:justify-between">
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
			</div>
		</section>
	);
}
