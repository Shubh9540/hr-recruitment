import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { TeamProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaTwitter':
      return <FaTwitter />;
    default:
      return null;
  }
};

export const Team = ({ data, limit, showButton = true }: TeamProps) => {
  if (!data) return null;

  const memberLimit = typeof limit === 'number' ? limit : showButton ? data.homepageLimit : undefined;
  const visibleMembers = typeof memberLimit === 'number' ? data.members.slice(0, memberLimit) : data.members;

  return (
    <section id="team" className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[var(--color-primary-light)] px-5 py-2">
            <span className="text-sm font-semibold text-[var(--color-primary)]">{data.subtitle}</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {data.title1}{' '}
            <span className="text-[var(--color-primary)]">{data.highlightedTitle}</span>
          </h2>

          <span className="mx-auto mt-3 block h-0.5 w-9 bg-[var(--color-primary)]" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleMembers.map((member) => (
            <article
              key={member.id}
              className="overflow-hidden rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-3 shadow-[0_10px_30px_var(--color-shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-accent)] hover:shadow-[0_16px_36px_var(--color-shadow)]"
            >
              <Link href={member.detailUrl} className="block overflow-hidden rounded-xl bg-[var(--color-bg-light)]">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  width={1254}
                  height={1254}
                  unoptimized
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] h-auto w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </Link>

              <div className="px-2 pb-2 pt-4 text-center">
                <h3 className="text-lg font-bold text-[var(--color-heading)]">
                  <Link href={member.detailUrl} className="transition-colors hover:text-[var(--color-primary)]">
                    {member.name}
                  </Link>
                </h3>
                <p className="mt-1 min-h-10 text-sm leading-5 text-[var(--color-text)]">{member.role}</p>

                <div className="mt-3 flex items-center justify-center gap-3">
                  {member.socialLinks.map((socialLink) => (
                    <Link
                      key={socialLink.id}
                      href={socialLink.url}
                      aria-label={socialLink.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-sm text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)]"
                    >
                      {renderIcon(socialLink.icon)}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {showButton && (
          <div className="mt-8 flex justify-center">
            <Link
              href={data.buttonUrl}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-3 font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)] sm:w-auto"
            >
              {data.buttonText}
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
