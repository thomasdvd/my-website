import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'src/components/Header';
import Hero from 'src/components/Hero';
import Skills from 'src/components/Skills';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>David</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="w-full h-screen mx-auto bg-gradient-to-r from-dark to-dark-blue">
				<Header />
				<Hero />
			</section>

			<Skills />

			<section>about</section>

			<section>contact</section>
		</>
	);
};

export default Home;
