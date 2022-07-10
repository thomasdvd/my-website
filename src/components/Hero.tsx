import FadeInWhenVisible from './FadeIn';
import HeroShape from './icons/HeroShape';

export default function Hero() {
	return (
		<section className="text-white">
			<div className="max-w-screen-xl mx-auto flex space-x-6">
				<div className="mt-48">
					<HeroShape />
				</div>

				<FadeInWhenVisible>
					<div className="mt-96">
						<div className="text-2xl">Hey, I am David 👋</div>
						<div className="text-8xl">Web Developer</div>
					</div>
				</FadeInWhenVisible>
			</div>
		</section>
	);
}
