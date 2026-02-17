import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'Lilac Template',
  description:
    'Professional therapy services in Minneapolis, MN. Specializing in self-esteem, relationships, and burnout. Book your first session today.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit antialiased">{children}</body>
    </html>
  );
}
