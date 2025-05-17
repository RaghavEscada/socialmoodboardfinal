import { Playfair_Display, Cormorant_Garamond, Italiana } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

const italiana = Italiana({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italiana',
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${italiana.variable}`}>
      <body>{children}</body>
    </html>
  );
} 