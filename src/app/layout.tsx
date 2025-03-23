import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.scss'

const inter = Inter({ subsets: ['latin'], variable: '--primary-font' });

export const metadata: Metadata = {
	title: 'Slack',
	description: 'Slack',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${inter.variable}`}>{children}</body>
		</html>
	);
}
