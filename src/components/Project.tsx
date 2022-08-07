/* eslint-disable indent */
import Image from 'next/image';
import { useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import FadeInWhenVisible from './FadeIn';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

interface Props {
	name: string;
	nameAsLink: boolean;
	description: string;
	techStack: Array<string>;
	images: Array<string>;
}

export default function Project({
	name,
	nameAsLink,
	description,
	techStack,
	images,
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

					<div className="flex flex-col items-center lg:flex-row">
						<Carousel images={images} />

						<div className="lg:ml-4">
							<p className="w-[20rem] rounded-md bg-gray-300 py-2 px-4 text-justify text-base text-dark shadow-lg md:w-[32rem] md:text-xl">
								{description}
							</p>

							<div className="mt-1 flex w-[20rem] flex-wrap md:w-[32rem]">
								{techStack.map((tech) => (
									<p
										key={tech}
										className="m-2 rounded-md border-2 border-accent px-2 py-0.5 text-sm text-white opacity-90 md:text-base"
									>
										{tech}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</FadeInWhenVisible>
	);
}

const Carousel = ({ images }: { images: Array<string> }) => {
	const [activeImage, setActiveImage] = useState<string>(images[0] as string);

	const next = () => {
		const activeIndex = images.indexOf(activeImage);
		if (activeIndex + 1 > images.length - 1) {
			setActiveImage(images[0] as string);
		} else {
			setActiveImage(images[activeIndex + 1] as string);
		}
	};

	const previous = () => {
		const activeIndex = images.indexOf(activeImage);
		if (activeIndex - 1 < 0) {
			setActiveImage(images[images.length - 1] as string);
		} else {
			setActiveImage(images[activeIndex - 1] as string);
		}
	};

	return (
		<div className="relative my-4">
			<div className="relative h-[12rem] w-[20rem] overflow-hidden rounded-lg md:h-[18rem] md:w-[30rem]">
				{images.map((image) => (
					<Image
						priority
						layout="fill"
						key={image}
						src={`/${image}.png`}
						className={
							'transition-transform' +
							(activeImage === image
								? ' translate-x-0'
								: images.indexOf(activeImage) - images.indexOf(image) > 0
								? ' -translate-x-full'
								: ' translate-x-full')
						}
						alt="..."
					/>
				))}
			</div>

			{/* Slider indicators */}
			<div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
				{images.map((image) => (
					<button
						key={image}
						type="button"
						className={
							'h-3 w-3 rounded-full' +
							(activeImage === image ? ' bg-accent' : ' bg-slate-100')
						}
						aria-current="false"
						aria-label={image}
						onClick={() => setActiveImage(image)}
					/>
				))}
			</div>

			{/* Slider controls */}
			<button
				type="button"
				className="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
				onClick={() => previous()}
			>
				<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
					<FaChevronCircleLeft />
				</span>
			</button>

			<button
				type="button"
				className="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
				onClick={() => next()}
			>
				<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
					<FaChevronCircleRight />
				</span>
			</button>
		</div>
	);
};
