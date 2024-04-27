import { createClient } from '@/prismicio';
import Link from 'next/link';

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <h3>
      <Link href="/">{settings.data.side_text}</Link>
    </h3>
  );
}
