import Image from 'next/image';
import banner from '../../public/banner.jpg';
export default function Home() {
  return (
    <div>
      <Image
        src={banner}
        alt="banner"
        sizes="100vw"
        placeholder="blur"
        // width={1000}
        // height={1000}
        style={{
          width: '100%',
          height: 'auto',
        }}
        priority
      ></Image>
    </div>
  );
}
