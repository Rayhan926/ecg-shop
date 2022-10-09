import Image from 'next/image';
import Link from 'next/link';

const SiteLogo = () => {
  return (
    <Link href={'/'}>
      <a>
        <Image
          src={'/img/ecg-logo.png'}
          alt="EarthCore Group"
          width={160}
          height={127}
        />
      </a>
    </Link>
  );
};

export default SiteLogo;
