import Image from 'next/image';
import { useEffect, useState } from 'react';
import FadeInWhenVisible from './FadeIn';

function shuffleArray(arr: Array<number>) {
	const array = [...arr];

	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j] as number;
		array[j] = temp as number;
	}

	return array;
}

export default function Hero({ scrollActive }: { scrollActive: boolean }) {
	const [ones, setOnes] = useState<Array<number>>(
		shuffleArray(Array.from(Array(320).keys())),
	);

	useEffect(() => {
		const shuffle = setInterval(() => {
			setOnes(() => shuffleArray(ones));
		}, 500);

		if (scrollActive) {
			clearInterval(shuffle);
			return;
		}

		return () => clearInterval(shuffle);
	}, [ones, scrollActive]);

	return (
		<section className="relative -z-20 mb-4 h-[34rem] w-full overflow-hidden bg-dark sm:mb-0">
			<div className="relative mx-auto max-w-6xl px-6 lg:px-16">
				<div className="absolute left-8 top-20 -z-10 flex flex-wrap text-accent">
					{ones.map((i) => (
						<div
							key={i}
							className={
								'm-5 h-1 w-1 justify-start rounded-lg transition-colors' +
								(i < 15 ? ' bg-slate-400' : ' bg-slate-800')
							}
						/>
					))}
				</div>

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

						<div className="relative ml-2 h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-accent bg-gray-300">
							<Image
								src="/me-hero.png"
								alt="profile picture"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</FadeInWhenVisible>
			</div>
		</section>
	);
}
