import type { NextPage } from 'next';
import Head from 'next/head';
import About from 'src/components/About';
import Callout from 'src/components/Callout';
import Contact from 'src/components/Contact';

import Header from 'src/components/Header';
import Hero from 'src/components/Hero';
import Project from 'src/components/Project';
import Skills from 'src/components/Skills';
import { projects } from 'src/content/projects';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>David</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="w-full h-[30rem] bg-gradient-to-r from-dark to-dark-blue">
				<div className="px-6 lg:px-16 max-w-6xl mx-auto">
					<Header />
					<Hero />
				</div>
			</section>

			<Skills />

			<div className="mb-16" />

			<section
				id="projects"
				className="bg-gradient-to-r from-dark to-dark-blue"
			>
				<section className="max-w-6xl mx-auto text-4xl py-8 px-6 lg:px-16 text-white">
					Projects
				</section>
				{projects.map((p) => (
					<Project key={p.name} {...p} />
				))}
			</section>

			<section id="about" className="max-w-6xl mx-auto py-8 px-6 lg:px-16">
				<About />
			</section>

			<section className="border-y-2 border bg-gray-100 shadow-inner">
				<div className="max-w-6xl mx-auto py-4 px-6 lg:px-16">
					<Callout />
				</div>
			</section>

			<section className="bg-gradient-to-r from-dark to-dark-blue">
				<section className="max-w-6xl mx-auto px-6 lg:px16">
					<Contact />
				</section>
			</section>
		</>
	);
};

export default Home;
