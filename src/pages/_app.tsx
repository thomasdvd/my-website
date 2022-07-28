import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';

const title = 'David Thomas';
const description = 'Full Stack web developer';

const SEO: DefaultSeoProps = {
	title,
	description,
	canonical: 'https://thomasdvd.com',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://thomasdvd.com',
		title,
		description,
	},
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
