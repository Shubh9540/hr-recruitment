import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBriefcase,
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaGraduationCap,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { TeamDetailProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaYoutube':
      return <FaYoutube />;
    case 'FaTwitter':
      return <FaTwitter />;
    default:
      return null;
  }
};

export const TeamDetail = ({ data, member }: TeamDetailProps) => {
  if (!data || !member) return null;

  const nameParts = member.name.split(' ');
  const firstName = nameParts[0];
  const remainingName = nameParts.slice(1).join(' ');
  const firstDescription = data.firstDescriptionTemplate
    .replaceAll('{{name}}', member.name)
    .replaceAll('{{role}}', member.role);
  const secondDescription = data.secondDescriptionTemplate
    .replaceAll('{{name}}', member.name)
    .replaceAll('{{role}}', member.role);

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="relative mx-auto w-full max-w-xl p-3 sm:p-5">
            <span className="absolute left-0 top-0 h-2/5 w-4/5 rounded-3xl bg-[var(--color-primary-light)]" />
            <div className="relative overflow-hidden rounded-3xl border-8 border-[var(--color-bg-light)] bg-[var(--color-bg-light)] shadow-[0_16px_40px_var(--color-shadow-soft)]">
              <Image
                src={member.image}
                alt={member.imageAlt}
                width={1254}
                height={1254}
                priority
                unoptimized
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="aspect-square h-auto w-full object-cover object-top"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[var(--color-primary-light)] px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
              {data.subtitle}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              {firstName}{' '}
              {remainingName && <span className="text-[var(--color-primary)]">{remainingName}</span>}
            </h2>
            <p className="mt-1 text-lg font-medium text-[var(--color-text)] sm:text-xl">{member.role}</p>
            <span className="mt-4 block h-0.5 w-10 bg-[var(--color-primary)]" />

            <p className="mt-5 text-sm leading-7 text-[var(--color-text)] sm:text-base">{firstDescription}</p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)] sm:text-base">{secondDescription}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {data.socialLinks.map((socialLink) => (
                <Link
                  key={socialLink.id}
                  href={socialLink.url}
                  aria-label={socialLink.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-accent)] bg-[var(--color-bg-light)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)]"
                >
                  {renderSocialIcon(socialLink.icon)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] shadow-[0_12px_36px_var(--color-shadow-soft)] md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 lg:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-border-accent)] bg-[var(--color-primary-light)] text-xl text-[var(--color-primary)]">
                <FaBriefcase aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-heading)]">{data.experienceTitle}</h3>
                <span className="mt-2 block h-0.5 w-8 bg-[var(--color-primary)]" />
              </div>
            </div>
            <p className="mt-5 text-2xl font-bold text-[var(--color-primary)]">{data.experienceValue}</p>
            <p className="mt-1 text-sm text-[var(--color-text)] sm:text-base">{data.experienceSuffix}</p>
          </div>

          <div className="border-y border-[var(--color-border-card)] p-6 md:border-l md:border-t-0 lg:border-y-0 lg:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-border-accent)] bg-[var(--color-primary-light)] text-xl text-[var(--color-primary)]">
                <FaGraduationCap aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-heading)]">{data.expertiseTitle}</h3>
                <span className="mt-2 block h-0.5 w-8 bg-[var(--color-primary)]" />
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {data.expertise.map((item) => (
                <li key={item.id} className="flex items-start gap-2 text-sm leading-5 text-[var(--color-text)]">
                  <FaCheckCircle aria-hidden="true" className="mt-0.5 flex-shrink-0 text-[var(--color-primary)]" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:col-span-2 md:border-t md:border-[var(--color-border-card)] lg:col-span-1 lg:border-l lg:border-t-0 lg:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-border-accent)] bg-[var(--color-primary-light)] text-xl text-[var(--color-primary)]">
                <FaEnvelope aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-heading)]">{data.contactTitle}</h3>
                <span className="mt-2 block h-0.5 w-8 bg-[var(--color-primary)]" />
              </div>
            </div>
            <div className="mt-5 space-y-4 text-sm text-[var(--color-text)] sm:text-base">
              <Link href={data.phoneUrl} className="flex items-start gap-3 transition-colors hover:text-[var(--color-primary)]">
                <FaPhoneAlt aria-hidden="true" className="mt-1 flex-shrink-0 text-[var(--color-primary)]" />
                <span>{data.phone}</span>
              </Link>
              <Link href={data.emailUrl} className="flex items-start gap-3 break-all transition-colors hover:text-[var(--color-primary)]">
                <FaEnvelope aria-hidden="true" className="mt-1 flex-shrink-0 text-[var(--color-primary)]" />
                <span>{data.email}</span>
              </Link>
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt aria-hidden="true" className="mt-1 flex-shrink-0 text-[var(--color-primary)]" />
                <span>{data.address}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
