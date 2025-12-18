import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/globals.css';

const clashGrotesk = localFont({
  src: [
    {
      path: '../fonts/ClashGrotesk-Variable.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Salt AI - Funding Decentralized AI',
  description: 'A new economic primitive for funding decentralized AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${clashGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

