import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Dr. Maya Reynolds Therapy',
  description:
    'Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA, providing therapy for adults navigating anxiety, panic, trauma, perfectionism, and professional burnout. In-person sessions in Santa Monica and secure telehealth across California.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
