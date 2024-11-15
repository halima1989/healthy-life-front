// layout.tsx
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="fr">
      <body className={`${inter.className} text-gray-400`}>
        <Toaster position="top-right" />

        <div>{children}</div>
      </body>
    </html>
  );
}

