// 1 unit = 4px: gap-1, py-2, px-4
import {Header} from '@/sections/Header';
import {Hero} from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
    </>
  );
}
