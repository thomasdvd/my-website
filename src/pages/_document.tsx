// In _document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

// https://nextjs.org/docs/basic-features/script

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script
					id={process.env.NEXT_PUBLIC_MICROANALYTICS_ID}
					src="https://microanalytics.io/js/script.js"
					strategy="beforeInteractive"
					data-host="https://microanalytics.io"
					data-dnt="false"
				/>
			</body>
		</Html>
	);
}
