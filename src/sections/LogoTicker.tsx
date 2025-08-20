import acmeLogo from '@/assets/logo-acme.png';
import Image from 'next/image';
export const LogoTicker = () => {
  return (
    <div>
      <Image src={acmeLogo} alt="Acme Logo" />
    </div>
  );
};
