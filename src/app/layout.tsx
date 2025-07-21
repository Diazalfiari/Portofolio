import './globals.css';
import type { ReactNode } from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Diazalfiari Portfolio',
  description: 'Interactive Portfolio built with Next.js & TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}