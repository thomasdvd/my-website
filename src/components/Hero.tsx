import FadeInWhenVisible from './FadeIn';

export default function Hero() {
	return (
		<FadeInWhenVisible>
			<div className="mt-20 flex justify-between text-white">
				<div>
					<div className="text-2xl">Hey 👋, I am David</div>

					<div className="text-xl md:text-2xl mt-4 md:mr-40">
						A full-stack web developer focused on enterprise applications that
						integrate seamlessly with any system. Always keen to learn new
						skills.
					</div>
				</div>

				<figure className="w-40 h-40 bg-gray-300 rounded-full shrink-0 border-accent border-4" />
			</div>
		</FadeInWhenVisible>
	);
}
