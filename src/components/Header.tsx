import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <h3>
      <Link href="/">{settings.data.side_text}</Link>
      <nav>
        <ul className="flex">
          {settings.data.navigation.map(({ link, lable }) => (
            <li key={lable}>
              <PrismicNextLink field={link} className="p-3">
                {lable}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
        {/* <ul>
          {settings.data.navigation.map(({ link, label }) => {
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>;
          })}
        </ul> */}
      </nav>
    </h3>
  );
}
