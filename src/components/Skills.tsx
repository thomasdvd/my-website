import Image from 'next/image';
import FadeInWhenVisible from './FadeIn';

export default function Skills() {
	return (
		<section className="m-8 max-w-screen-xl mx-auto">
			<h1 className="text-5xl text-dark font-bold my-16">Skills</h1>

			<FadeInWhenVisible>
				<div className="flex justify-between mx-8">
					<Image alt="react" src="/react.svg" width="150px" height="150px" />
					<Image alt="react" src="/nodejs.svg" width="150px" height="150px" />
					<Image alt="react" src="/postgres.svg" width="150px" height="150px" />
				</div>
			</FadeInWhenVisible>

			<h2 className="text-4xl my-16 italic">Other tech I use frequently:</h2>

			<FadeInWhenVisible>
				<div className="flex justify-between mx-2">
					<Image alt="react" src="/graphql.svg" width="60px" height="60px" />
					<Image alt="react" src="/ubuntu.svg" width="60px" height="60px" />
					<Image alt="react" src="/nginx.svg" width="60px" height="60px" />
					<Image alt="react" src="/docker.svg" width="60px" height="60px" />
					<Image alt="react" src="/nextjs.svg" width="60px" height="60px" />
					<Image alt="react" src="/hasura.svg" width="60px" height="60px" />
					<Image alt="react" src="/typescript.svg" width="60px" height="60px" />
				</div>
			</FadeInWhenVisible>
		</section>
	);
}
