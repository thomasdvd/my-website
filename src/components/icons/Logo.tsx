export default function Logo({ fill = 'white' }: { fill?: string }) {
	return (
		<div
			className="-translate-x-5 scale-50 cursor-pointer"
			onClick={() => {
				window.scrollTo(0, 0);
			}}
		>
			<svg
				width="102"
				height="76"
				viewBox="0 0 102 76"
				fill={fill}
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="39"
					y="47"
					width="39"
					height="18"
					transform="rotate(-180 39 47)"
					fill={fill}
				/>
				<rect
					x="59"
					y="76"
					width="20"
					height="76"
					transform="rotate(-180 59 76)"
					fill={fill}
				/>
				<path
					d="M64 76C74.0782 76 83.7437 71.9964 90.8701 64.8701C97.9964 57.7437 102 48.0782 102 38C102 27.9218 97.9964 18.2563 90.8701 11.1299C83.7437 4.00356 74.0782 3.01271e-07 64 -1.66103e-06L64 17.5228C69.4309 17.5228 74.6393 19.6802 78.4795 23.5205C82.3198 27.3607 84.4772 32.5691 84.4772 38C84.4772 43.4309 82.3198 48.6393 78.4795 52.4795C74.6393 56.3198 69.4309 58.4772 64 58.4772L64 76Z"
					fill="#E56B6F"
				/>
			</svg>
		</div>
	);
}
