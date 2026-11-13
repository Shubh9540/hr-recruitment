import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaUsers } from 'react-icons/fa';
import { CtaProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers':
      return <FaUsers />;
    default:
      return null;
  }
};

export const Cta = ({ data }: CtaProps) => {
  if (!data) return null;

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-[0_16px_40px_var(--color-shadow)]">
          <Image
            src={data.backgroundImage}
            alt={data.backgroundImageAlt}
            width={2172}
            height={724}
            unoptimized
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-primary-dark),var(--color-primary))] opacity-90" />
          <span className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full border-[28px] border-[var(--color-text-on-primary)] opacity-10" />
          <span className="absolute -right-14 -top-16 h-40 w-40 rounded-full border-[24px] border-[var(--color-text-on-primary)] opacity-10" />

          <div className="relative z-10 flex min-h-48 flex-col items-start gap-6 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:px-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-8 border-[var(--color-text-on-primary)] bg-[var(--color-bg-card)] text-3xl text-[var(--color-primary)] shadow-[0_8px_24px_var(--color-shadow-strong)]">
              {renderIcon(data.icon)}
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-medium leading-tight text-[var(--color-text-on-primary)] sm:text-3xl lg:text-4xl">
                {data.titleStart}{' '}
                <span className="font-extrabold">{data.highlightedTitle}</span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-on-primary)] opacity-90 sm:text-base">
                {data.description}
              </p>
            </div>

            <Link
              href={data.buttonUrl}
              className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--color-bg-card)] px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] shadow-[0_8px_24px_var(--color-shadow-strong)] transition-colors hover:bg-[var(--color-primary-light)] sm:w-auto"
            >
              <span>{data.buttonText}</span>
              <FaArrowRight aria-hidden="true" className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
