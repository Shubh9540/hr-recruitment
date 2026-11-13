import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data }: BreadcrumbProps) => {
  if (!data) return null;

  return (
    <section className="relative flex min-h-64 w-full min-w-0 max-w-full items-center justify-center overflow-hidden lg:min-h-72">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--color-primary)]/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8 lg:py-12">
        <h1 className="break-words text-3xl font-bold leading-tight text-[var(--color-text-on-primary)] sm:text-4xl lg:text-5xl">
          {data.title}
        </h1>

        <nav aria-label={data.ariaLabel} className="mt-5">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-[var(--color-text-on-primary)] sm:text-base">
            {data.paths.map((path, index) => {
              const isLastPath = index === data.paths.length - 1;

              return (
                <li key={path.id} className="flex items-center gap-2">
                  {path.url && !isLastPath ? (
                    <Link href={path.url} className="transition-opacity hover:opacity-75">
                      {path.label}
                    </Link>
                  ) : (
                    <span aria-current={isLastPath ? 'page' : undefined}>{path.label}</span>
                  )}

                  {!isLastPath && <FaChevronRight aria-hidden="true" className="text-xs opacity-80" />}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};
