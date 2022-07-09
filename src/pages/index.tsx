import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>David</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="text-6xl">My personal website</div>
		</>
	);
};

export default Home;
