export const projects = [
	{
		name: 'app.villatrans.it',
		nameAsLink: true,
		description:
			"Enterprise application that integrates with company's Transport Management System. Users can keep track of their vehicles in real-time and manage their orders.",
		techStack: ['nextjs', 'nodejs', 'postgresql', 'digital ocean', 'nginx'],
		images: ['vt-landing', 'vt-login', 'vt-map', 'vt-trip'],
	},
	{
		name: 'Warehouse extension',
		nameAsLink: false,
		description:
			'Manages inbound and outbound orders, provides overview of operations and allows printing of reports. Deployed on-premise ubuntu machines within a secure network',
		techStack: [
			'nextjs',
			'nodejs',
			'recharts',
			'puppeteer',
			'ejs',
			'postgresql',
			'cups',
			'docker',
		],
		images: ['whse-ogl', 'whse-oglin'],
	},
];
