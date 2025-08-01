'use client';
import Image from 'next/image';

import HomeCardCollection from '@/components/homecard';
import { HeroSection } from './home';

const Homepage = () => {
  return (
    <>
      <div className="container-wrapper">

      <HeroSection />
    </div>

      <div className="container-wrapper">
        <div className="container py-6">
          <section className="overflow-hidden  rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
            <Image
              src="/examples/cards-light.png"
              width={1280}
              height={1214}
              alt="Cards"
              className="block dark:hidden"
            />
            <Image
              src="/examples/cards-dark.png"
              width={1280}
              height={1214}
              alt="Cards"
              className="hidden dark:block"
            />
          </section>
          <section
            className="hidden md:block  [&>div]:p-0 "
            style={
              {
                '--radius': '1rem',
              } as React.CSSProperties
            }
          >
            <div className="flex flex-col justify-center items-center my-12">
              <div className="px-8 rounded-2xl text-center">
                <h2 className="font-bold text-2xl md:text-4xl mb-4 tracking-tight text-neutral-900 dark:text-white">
                  Ready-to-Use UI Blocks
                </h2>
              </div>
            </div>

            <HomeCardCollection />
          </section>
        </div>
      </div>
    </>
  );
};

export default Homepage;
