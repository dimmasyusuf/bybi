import type { Metadata } from 'next';
import Fonts from '@/assets/fonts';
import Providers from '@/providers';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Bybi',
  description: 'A Personal Blog by Habibi Zaidatul Mamuriyah',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('font-sans antialiased', Fonts)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
