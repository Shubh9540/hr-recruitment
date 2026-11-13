import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { TopBarProps } from '@/types/templates.types';

const renderSocialIcon = (icon: string) => {
  switch (icon) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaYoutube':
      return <FaYoutube />;
    default:
      return null;
  }
};

export const TopBar = ({ data }: TopBarProps) => {
  if (!data) return null;

  return (
    <div className="hidden w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-subtle)] py-2.5 text-xs text-[var(--color-heading)] lg:block">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Contact info left */}
        <div className="flex items-center text-xs font-medium text-[var(--color-heading)]">
          {/* Phone */}
          <Link
            href={`tel:${data.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2.5 transition-colors hover:text-[var(--color-primary)]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-sm text-[var(--color-primary)] shadow-sm">
              <FaPhoneAlt />
            </span>
            <span>{data.phoneLabel || data.phone}</span>
          </Link>

          {/* Divider */}
          <span className="mx-4 h-4 w-px bg-[var(--color-border-muted)]" />

          {/* Email */}
          <Link
            href={`mailto:${data.email}`}
            className="flex items-center gap-2.5 transition-colors hover:text-[var(--color-primary)]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-sm text-[var(--color-primary)] shadow-sm">
              <FaEnvelope />
            </span>
            <span>{data.emailLabel || data.email}</span>
          </Link>

          {/* Divider */}
          <span className="mx-4 h-4 w-px bg-[var(--color-border-muted)]" />

          {/* Address */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-sm text-[var(--color-primary)] shadow-sm">
              <FaMapMarkerAlt />
            </span>
            <span>{data.address}</span>
          </div>
        </div>

        {/* Social links right */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 text-[var(--color-primary)]">
            {data.socialLinks.map((s) => (
              <Link
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-sm text-[var(--color-primary)] shadow-sm transition-all hover:scale-105 hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)]"
              >
                {renderSocialIcon(s.icon)}
              </Link>
            ))}
          </div>

          <span className="h-4 w-px bg-[var(--color-border-muted)]" />

          {data.followUsText && (
            <span className="text-xs font-medium text-[var(--color-heading)]">{data.followUsText}</span>
          )}
        </div>
      </div>
    </div>
  );
};

