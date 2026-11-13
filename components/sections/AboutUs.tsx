import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaCog, FaHandshake, FaCheck, FaArrowRight } from 'react-icons/fa';
import { AboutUsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers':
      return <FaUsers />;
    case 'FaCog':
      return <FaCog />;
    case 'FaHandshake':
      return <FaHandshake />;
    default:
      return <FaCheck />;
  }
};

export const AboutUs = ({ data }: AboutUsProps) => {
  if (!data) return null;

  return (
    <section className="w-full overflow-hidden bg-[var(--color-bg-section)] py-8 lg:py-12">
      <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:px-8">
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <span className="absolute -left-12 -top-12 h-52 w-52 rounded-full border-[14px] border-[var(--color-primary-light)]" />
          <span className="absolute -bottom-10 -right-8 h-44 w-44 rounded-full bg-[var(--color-accent-pastel)]" />
          <span className="absolute -right-3 -top-4 h-7 w-7 rounded-full bg-[var(--color-accent-lighter)] shadow-lg shadow-[var(--color-shadow-strong)]" />
          <span className="absolute -left-12 top-1/3 h-20 w-20 bg-[radial-gradient(circle,_var(--color-primary)_2px,_transparent_2px)] [background-size:20px_20px]" />

          <div className="relative aspect-square overflow-hidden rounded-3xl border-[10px] border-[var(--color-bg-card)] shadow-[0_20px_60px_var(--color-shadow)] lg:aspect-[4/5]">
            <Image
              src={data.imageMain}
              alt={data.imageMainAlt}
              width={1254}
              height={1254}
              unoptimized
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-full w-full select-none object-cover object-center"
            />
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-0.5 w-9 bg-[var(--color-primary)]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] sm:text-sm">
                {data.subtitle}
              </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-[var(--color-heading)] sm:text-4xl xl:text-5xl">
            {data.title1}{' '}
            <span className="text-[var(--color-primary)]">{data.highlightedTitle}</span>{' '}
            {data.title2}
          </h2>

          <div className="mt-4 space-y-4 text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">
            {data.descriptions.map((description) => (
              <p key={description}>{description}</p>
            ))}
          </div>

          {data.features.length > 0 && (
            <div className="mt-6 flex flex-col gap-4">
              {data.features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-2xl text-[var(--color-primary)]">
                    {renderIcon(feature.icon)}
                  </span>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-[var(--color-heading)]">{feature.title}</h3>
                    <p className="mt-0.5 text-sm leading-5 text-[var(--color-text-slate)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {data.button?.url && data.button?.text && (
            <div className="mt-8">
              <Link
                href={data.button.url}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-primary)] px-8 py-3.5 text-sm font-semibold text-[var(--color-text-on-primary)] shadow-lg shadow-[var(--color-shadow-strong)] transition-colors duration-200 hover:bg-[var(--color-primary-dark)] sm:w-auto"
              >
                <span>{data.button.text}</span>
                <FaArrowRight aria-hidden="true" className="text-xs" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
