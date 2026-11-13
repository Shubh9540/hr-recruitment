import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { HeroProps } from '@/types/templates.types';

export const Hero = ({ data }: HeroProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#f8f7ff]">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col px-4 py-8 sm:px-6 md:py-10 lg:hidden">
        <div className="min-w-0 max-w-xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#9b72f4]" />
            <p className="min-w-0 break-words text-xs font-bold uppercase tracking-[0.14em] text-[#9b72f4] sm:tracking-[0.18em]">
              {data.eyebrow}
            </p>
          </div>

          <h1 className="break-words text-3xl font-extrabold leading-tight tracking-tight text-[#151a3b] sm:text-4xl md:text-5xl">
            {data.titleStart}{' '}
            <span className="text-[#4e20d4]">{data.highlightedTitle}</span>
            {data.titleEnd && <span> {data.titleEnd}</span>}
          </h1>

          <p className="mt-4 break-words text-sm leading-6 text-[#596078] sm:text-base sm:leading-7 md:text-lg">
            {data.description}
          </p>

          <Link
            href={data.buttonUrl}
            className="mt-6 inline-flex w-full max-w-full items-center justify-center gap-3 rounded-xl bg-[#4e20d4] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4e20d4]/20 transition-colors duration-200 hover:bg-[#3512ab] sm:w-auto sm:px-6"
          >
            <span>{data.buttonText}</span>
            <FaArrowRight aria-hidden="true" className="text-xs" />
          </Link>
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-80 lg:h-auto">
        <Image
          src={data.backgroundImage}
          alt={data.backgroundImageAlt}
          width={1960}
          height={802}
          priority
          unoptimized
          sizes="100vw"
          className="h-full w-full select-none object-cover object-right lg:h-auto lg:object-center"
        />

        <div className="absolute inset-0 z-10 hidden items-center lg:flex">
          <div className="mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-[42%] xl:max-w-[40%]">
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#9b72f4]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b72f4] xl:text-sm">
                  {data.eyebrow}
                </p>
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-[#151a3b] xl:text-6xl">
                {data.titleStart}{' '}
                <span className="text-[#4e20d4]">{data.highlightedTitle}</span>
                {data.titleEnd && <span> {data.titleEnd}</span>}
              </h1>

              <p className="mt-4 max-w-md text-base leading-7 text-[#596078] xl:text-lg">
                {data.description}
              </p>

              <div className="mt-6 flex items-center xl:mt-7">
                <Link
                  href={data.buttonUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#4e20d4] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4e20d4]/20 transition-colors duration-200 hover:bg-[#3512ab] xl:px-8"
                >
                  <span>{data.buttonText}</span>
                  <FaArrowRight aria-hidden="true" className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
