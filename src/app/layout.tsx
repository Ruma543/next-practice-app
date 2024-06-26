import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { createClient } from '@/prismicio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Next Practice App!!',
//   description: 'Generated by create next app',
// };
export async function generateMetadata(): Promise<Metadata> {
  // read route params
  const client = createClient();
  const settings = await client.getSingle('settings');
  // const id = params.id;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then(res => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: settings.data.side_text || 'next app fallback',
    description:
      settings.data.meta_description || 'next app description fallback',
    openGraph: {
      images: [settings.data.og_image.url || ''],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
