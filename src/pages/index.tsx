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

			<Header />
			<Hero />

			<Skills />

			<section id="projects" className="bg-dark py-16">
				<section className="mx-auto max-w-6xl px-6 text-4xl text-white lg:px-16">
					Projects
					{projects.map((p) => (
						<Project key={p.name} {...p} />
					))}
				</section>
			</section>

			<section
				id="about"
				className="mx-auto mb-16 max-w-6xl py-16 px-6 lg:px-16"
			>
				<About />
			</section>

			<section className="border border-y-2 bg-gray-100 shadow-inner">
				<div className="mx-auto max-w-6xl py-12 px-6 lg:px-16">
					<Callout />
				</div>
			</section>

			<section className="bg-dark py-4">
				<section className="lg:px16 mx-auto max-w-6xl px-6">
					<Contact />
				</section>
			</section>
		</>
	);
};

export default Home;
