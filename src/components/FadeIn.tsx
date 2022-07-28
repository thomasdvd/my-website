import { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface Props {
	children: ReactNode;
	delay?: number;
	once?: boolean;
}

export default function FadeInWhenVisible({
	children,
	delay = 0,
	once = true,
}: Props) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once }}
			transition={{ duration: 0.5, delay }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0.1, y: 30 },
			}}
		>
			{children}
		</motion.div>
	);
}
