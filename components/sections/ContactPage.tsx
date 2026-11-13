'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCommentDots,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
} from 'react-icons/fa';
import { ContactPageProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    case 'FaPhoneAlt':
      return <FaPhoneAlt />;
    case 'FaEnvelope':
      return <FaEnvelope />;
    default:
      return null;
  }
};

export const ContactPage = ({ data }: ContactPageProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {data.contactItems.map((item) => (
            <article
              key={item.id}
              className="flex items-center gap-5 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-6 shadow-[0_10px_30px_var(--color-shadow-soft)]"
            >
              <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-2xl text-[var(--color-primary)]">
                {renderIcon(item.icon)}
              </span>
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-[var(--color-heading)] sm:text-xl">{item.title}</h2>
                {item.url ? (
                  <Link href={item.url} className="mt-2 block break-words text-sm leading-6 text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base">
                    {item.value}
                  </Link>
                ) : (
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text)] sm:text-base">{item.value}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid min-w-0 grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="relative mx-auto w-full max-w-xl p-3 sm:p-5 lg:max-w-none">
            <span className="absolute left-0 top-0 h-2/5 w-4/5 rounded-3xl bg-[var(--color-primary-light)]" />
            <div className="relative h-full min-h-96 overflow-hidden rounded-3xl border-8 border-[var(--color-bg-light)] shadow-[0_16px_40px_var(--color-shadow-soft)] lg:min-h-full">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              event.currentTarget.reset();
              setSubmitted(true);
            }}
            className="rounded-2xl bg-[var(--color-bg-card)] p-5 shadow-[0_10px_30px_var(--color-shadow-soft)] sm:p-7"
          >
            <span className="inline-flex rounded-full bg-[var(--color-primary-light)] px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
              {data.form.subtitle}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              {data.form.titleStart}{' '}
              <span className="text-[var(--color-primary)]">{data.form.highlightedTitle}</span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.form.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex items-center gap-3 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-3">
                <FaUser aria-hidden="true" className="flex-shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.firstNameLabel}</span>
                <input name="firstName" required placeholder={data.form.firstNamePlaceholder} className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-3">
                <FaUser aria-hidden="true" className="flex-shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.lastNameLabel}</span>
                <input name="lastName" required placeholder={data.form.lastNamePlaceholder} className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-3 sm:col-span-2">
                <FaEnvelope aria-hidden="true" className="flex-shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.emailLabel}</span>
                <input type="email" name="email" required placeholder={data.form.emailPlaceholder} className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-3">
                <FaPhoneAlt aria-hidden="true" className="flex-shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.phoneLabel}</span>
                <input type="tel" name="phone" required placeholder={data.form.phonePlaceholder} className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-3">
                <FaMapMarkerAlt aria-hidden="true" className="flex-shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.countryLabel}</span>
                <select name="country" required defaultValue="" className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none">
                  <option value="" disabled>{data.form.countryPlaceholder}</option>
                  {data.form.countries.map((country) => (
                    <option key={country.id} value={country.value}>{country.label}</option>
                  ))}
                </select>
              </label>

              <label className="flex items-start gap-3 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-3 sm:col-span-2">
                <FaCommentDots aria-hidden="true" className="mt-1 flex-shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.messageLabel}</span>
                <textarea name="message" required rows={5} placeholder={data.form.messagePlaceholder} className="w-auto min-w-0 flex-1 resize-none bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>
            </div>

            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-primary)] px-8 py-3.5 font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)] sm:w-auto">
              {data.form.submitText}
              <FaArrowRight aria-hidden="true" />
            </button>

            {submitted && (
              <p role="status" className="mt-4 text-sm font-semibold text-[var(--color-primary)]">{data.form.successMessage}</p>
            )}
          </form>
        </div>
      </div>

      <div className="relative mt-10 min-h-[420px] w-full overflow-hidden bg-[var(--color-primary-light)]">
        <iframe
          src={data.mapUrl}
          title={data.mapTitle}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </section>
  );
};
