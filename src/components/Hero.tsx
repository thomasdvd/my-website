import FadeInWhenVisible from './FadeIn';

export default function Hero() {
	return (
		<section className="mb-4 h-[34rem] w-full bg-dark sm:mb-0">
			<div className="mx-auto max-w-6xl px-6 lg:px-16">
				<FadeInWhenVisible>
					<div className="flex pt-28 text-white sm:pt-36 md:pt-40">
						<div>
							<div className="text-2xl">Hey 👋, I am David</div>

							{/* TODO highlight words with accent color */}
							<div className="mt-4 text-base md:mr-40 md:text-2xl">
								A full-stack web developer focused on enterprise applications
								that integrate seamlessly with any system. Always keen to learn
								new skills.
							</div>
						</div>

						<figure className="ml-2 h-40 w-40 shrink-0 rounded-full border-4 border-accent bg-gray-300" />
					</div>
				</FadeInWhenVisible>
			</div>
		</section>
	);
}
