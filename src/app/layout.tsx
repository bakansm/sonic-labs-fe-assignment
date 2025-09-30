import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';

const urbanist = Urbanist({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  description: 'Sonic-Labs Frontend take home assignment',
  title: 'Sonic FE Assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${urbanist.variable} antialiased`}>{children}</body>
    </html>
  );
}
