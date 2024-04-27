import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <h3>
      {settings.data.side_text}
      <nav>
        <ul className="flex">
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink field={link} className="p-3">
                {label}
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
