import React from 'react';
import Image from 'next/image';
import {
  FaUsers,
  FaCog,
  FaChartBar,
  FaShieldAlt,
  FaCheck,
} from 'react-icons/fa';
import { WhyChooseUsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers':
      return <FaUsers />;
    case 'FaCog':
      return <FaCog />;
    case 'FaChartBar':
      return <FaChartBar />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    default:
      return <FaCheck />;
  }
};

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;

  return (
    <section className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10 lg:px-8">
        <div className="flex w-full flex-col">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-0.5 w-9 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] sm:text-sm">
              {data.subtitle}
            </span>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-heading)] sm:text-5xl lg:text-5xl xl:text-6xl">
            <span className="block">{data.title1}</span>
            <span className="block text-[var(--color-primary)]">{data.highlightedTitle}</span>
            <span className="block">{data.title2}</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7 lg:text-lg">
            {data.description}
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.features.map((feature) => (
              <div
                key={feature.id}
                className="flex min-h-28 items-center gap-4 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-4 shadow-[0_10px_30px_var(--color-shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-accent)] hover:shadow-[0_14px_32px_var(--color-shadow)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-2xl text-[var(--color-primary)]">
                  {renderIcon(feature.icon)}
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-snug text-[var(--color-heading)] sm:text-base">{feature.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-text)] sm:text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <span className="absolute -right-10 -top-10 h-72 w-72 rounded-3xl bg-[var(--color-primary-light)]" />
          <span className="absolute -bottom-10 -right-10 h-24 w-24 bg-[radial-gradient(circle,_var(--color-primary)_2px,_transparent_2px)] [background-size:20px_20px]" />

          <div className="relative overflow-hidden rounded-3xl border-8 border-[var(--color-bg-card)] shadow-[0_20px_60px_var(--color-shadow)]">
            <Image
              src={data.imageMain}
              alt={data.imageAlt}
              width={1254}
              height={1254}
              unoptimized
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-square h-auto w-full select-none object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
