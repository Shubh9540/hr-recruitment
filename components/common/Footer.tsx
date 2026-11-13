import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaXTwitter':
      return <FaXTwitter />;
    default:
      return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="relative w-full min-w-0 max-w-full overflow-hidden bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-darker)] text-[var(--color-text-on-primary)]">
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-12">
        {/* Brand Info */}
        <div className="lg:pr-6">
          <Link href={data.logoUrl} className="inline-block" aria-label={data.logoAlt}>
            <div className="flex items-center gap-3">
              <Image
                src={data.logo}
                alt={data.logoAlt}
                width={280}
                height={80}
                className="h-14 w-auto brightness-0 invert object-contain"
              />
            </div>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-text-on-primary)] opacity-80">
            {data.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {data.socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg-main)]/10 text-xs text-[var(--color-text-on-primary)] transition-all hover:bg-[var(--color-bg-main)] hover:text-[var(--color-primary)]"
              >
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-bold text-[var(--color-text-on-primary)]">{data.quickLinksTitle}</h3>
          <span className="mt-2 block h-0.5 w-8 bg-[var(--color-bg-main)]/40" />
          <ul className="mt-4 space-y-2.5">
            {data.quickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-on-primary)] opacity-80 transition-opacity hover:opacity-100"
                >
                  <FaAngleRight className="text-xs text-[var(--color-text-on-primary)] opacity-60" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-base font-bold text-[var(--color-text-on-primary)]">{data.servicesTitle}</h3>
          <span className="mt-2 block h-0.5 w-8 bg-[var(--color-bg-main)]/40" />
          <ul className="mt-4 space-y-2.5">
            {data.servicesLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-on-primary)] opacity-80 transition-opacity hover:opacity-100"
                >
                  <FaAngleRight className="text-xs text-[var(--color-text-on-primary)] opacity-60" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-bold text-[var(--color-text-on-primary)]">{data.contactTitle}</h3>
          <span className="mt-2 block h-0.5 w-8 bg-[var(--color-bg-main)]/40" />

          <ul className="mt-4 space-y-3.5">
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-main)]/10 text-xs text-[var(--color-text-on-primary)]">
                <FaPhoneAlt />
              </span>
              <Link href={`tel:${data.contactInfo.phone.replace(/\s+/g, '')}`} className="text-sm text-[var(--color-text-on-primary)] opacity-90 transition-opacity hover:opacity-100">
                {data.contactInfo.phone}
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-main)]/10 text-xs text-[var(--color-text-on-primary)]">
                <FaEnvelope />
              </span>
              <Link href={`mailto:${data.contactInfo.email}`} className="text-sm text-[var(--color-text-on-primary)] opacity-90 transition-opacity hover:opacity-100">
                {data.contactInfo.email}
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-main)]/10 text-xs text-[var(--color-text-on-primary)]">
                <FaMapMarkerAlt />
              </span>
              <span className="text-sm leading-relaxed text-[var(--color-text-on-primary)] opacity-90">{data.contactInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-[var(--color-bg-main)]/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-[var(--color-text-on-primary)] opacity-70 sm:px-6 sm:text-sm lg:px-8">
          {data.copyrightText}
        </p>
      </div>
    </footer>
  );
};
