import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
export const Header = () => {
  return(
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='flex items-center justify-center py-3 bg-black text-white text-sm gap-3'>
        <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
      <div className='inline-flex items-center gap-1'>
        <p>Get started for free</p>
        <ArrowRight className='w-4 h-4 inline-flex justify-center items-center' />
      </div>
    </div>
    <div className='py-4'>
      <div className='container pl-5'>
        <div className='flex items-center justify-between'>
          <Image src={Logo} alt="Logo" height={40} width={40}/>
          <MenuIcon className='w-5 h-5 md:hidden'/>
          <nav className='hidden md:flex items-center gap-6 text-black/60'>
            <a href="">About</a>
            <a href="">Features</a>
            <a href="">Customers</a>
            <a href="">Updates</a>
            <a href="">Help</a>
            <button className='bg-black text-white py-2 px-4 rounded inline-flex align-center justify-center tracking-tight'>Get for free</button>
          </nav>
        </div>
        
      </div>
    </div>
    </header>
    
  );
};
