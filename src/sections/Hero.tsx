import ArrowIcon from '@/assets/arrow-right.svg';
import cogImg from '@/assets/cog.png';
import cylinderImg from '@/assets/cylinder.png';
import noodele from '@/assets/noodle.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="pt-16 pb-20 md:pt-16 md:pb-28 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          
          {/* Left Text Column */}
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter py-2 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-4">
              Pathway to productivity
            </h1>

            <p className="text-xl text-[#010D3E] tracking-tight mt-4 py-2 max-w-[500px]">
              Celebrate the joy of accomplishment with an app designed to track your progress, 
              motivate your efforts, and celebrate your successes.
            </p>

            <div className="flex gap-3 items-center mt-8">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text flex items-center gap-1">
                <span>Learn more</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="mt-16 md:mt-0 md:h-[600px] md:flex-1 relative ">
            <Image
              src={cogImg}
              width={500}
              height={500}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-0 md:top-0 lg:left-15"
            />
            <Image
              src={cylinderImg}
              width={200}
              height={200}
              alt="Cylinder image"
              className="hidden md:block absolute -top-10 -left-32 "
            />
            <Image
              src={noodele}
              width={200}
              height={200}
              alt="Noodle image"
              className="hidden md:block absolute -bottom-44 -right-0 md:rotate-[30deg]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
