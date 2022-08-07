import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineShortText, MdOutlineViewHeadline } from 'react-icons/md';
import FadeInWhenVisible from './FadeIn';

export default function About() {
	const [isLong, setIsLong] = useState(false);

	const buttons = [
		{
			text: 'Short',
			icon: MdOutlineShortText,
			onClick: () => setIsLong(false),
			isActive: !isLong,
		},
		{
			text: 'Long',
			icon: MdOutlineViewHeadline,
			onClick: () => setIsLong(true),
			isActive: isLong,
		},
	];

	return (
		<FadeInWhenVisible>
			<p className="py-8 pb-16 text-4xl">About</p>

			<div className="flex flex-col items-center space-y-10 align-middle md:flex-row md:space-x-10">
				<div className="relative h-96 w-72 shrink-0 overflow-hidden rounded-md border-4 border-accent bg-gray-100 shadow-xl">
					<Image
						src="/me-about.jpg"
						alt="about picture"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				<div>
					<div
						className="mb-8 flex justify-center rounded-md md:justify-start"
						role="group"
					>
						{buttons.map((b, i) => (
							<button
								key={b.text}
								type="button"
								className={
									'inline-flex items-center border border-gray-200 py-2 px-4 text-sm font-medium text-gray-900' +
									' ' +
									(b.isActive ? 'bg-gray-200 text-accent' : 'bg-gray-100') +
									' ' +
									(i === 0 ? 'rounded-l-lg' : 'rounded-r-lg')
								}
								onClick={b.onClick}
							>
								<b.icon />
								{b.text}
							</button>
						))}
					</div>

					<div
						className={
							'text-justify text-lg transition-all ' +
							(isLong ? 'visible' : 'hidden')
						}
					>
						<FadeInWhenVisible once={false}>
							Born and raised in Slovakia, currently living and working in
							Verona,Italy. I have always been passionate about technology.
							After earning my degree in Economics, I sought the most efficient
							way to solve given problems through code.Since 2017 at my first
							job I have pro-actively started to improve internal processes
							using automation and specialized in data processing using mostly
							SQL later in late 2019 shifted to JAMstack applications. For the
							past few years I was engaged in all-stages of application design
							and it&apos;s development. Passionate about technology and systems
							that help users with their daily tasks. I enjoy working with data
							and aim to transform complex systems into an intuitive experience.
						</FadeInWhenVisible>
					</div>
					<div
						className={
							'text-justify text-lg transition-all ' +
							(!isLong ? 'visible' : 'hidden')
						}
					>
						<FadeInWhenVisible once={false}>
							{' '}
							After earning my degree in Economics, I sought the most efficient
							way to solve given problems through code. For the past few years I
							was engaged in all-stages of application design and it&apos;s
							development. Passionate about technology and systems that help
							users with their daily tasks. I enjoy working with data and aim to
							transform complex systems into an intuitive experience.
						</FadeInWhenVisible>
					</div>
				</div>
			</div>
		</FadeInWhenVisible>
	);
}
