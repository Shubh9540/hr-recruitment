'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaArrowRight,
  FaClipboardCheck,
  FaHeadset,
  FaShieldAlt,
} from 'react-icons/fa';
import { QuotePageProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHeadset':
      return <FaHeadset />;
    case 'FaClipboardCheck':
      return <FaClipboardCheck />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    default:
      return null;
  }
};

export const QuotePage = ({ data, servicesData }: QuotePageProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data || !servicesData?.services.length) return null;

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-section)] py-8 lg:py-12">
      <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:px-8">
        <div className="min-w-0">
          <div className="relative min-h-[480px] overflow-hidden rounded-2xl bg-[var(--color-bg-light)] sm:min-h-[560px]">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="translate-x-8 scale-110 object-cover object-top sm:translate-x-16 sm:scale-125"
            />

            <div className="absolute left-5 right-5 top-5 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-5 shadow-[0_16px_44px_var(--color-shadow)] sm:left-7 sm:right-auto sm:top-7 sm:w-[46%] sm:max-w-xs sm:p-6">
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)] sm:text-sm">
                {data.overlaySubtitle}
              </span>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-3xl">
                {data.overlayTitleStart}{' '}
                <span className="text-[var(--color-primary)]">{data.overlayHighlightedTitle}</span>
              </h2>
              <span className="mt-4 block h-0.5 w-10 bg-[var(--color-primary)]" />
              <p className="mt-5 text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.overlayDescription}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.features.map((feature) => (
              <article key={feature.id} className="rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-5 text-center shadow-[0_8px_24px_var(--color-shadow-soft)]">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-2xl text-[var(--color-primary)]">
                  {renderIcon(feature.icon)}
                </span>
                <h3 className="mt-4 text-base font-bold text-[var(--color-heading)]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-5 text-[var(--color-text)]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            event.currentTarget.reset();
            setSubmitted(true);
          }}
          className="h-fit rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-5 shadow-[0_12px_36px_var(--color-shadow-soft)] sm:p-7 lg:p-8"
        >
          <span className="inline-flex rounded-full bg-[var(--color-primary-light)] px-5 py-2 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)] sm:text-sm">
            {data.form.subtitle}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {data.form.titleStart}{' '}
            <span className="text-[var(--color-primary)]">{data.form.highlightedTitle}</span>
          </h1>
          <span className="mt-4 block h-0.5 w-10 bg-[var(--color-primary)]" />
          <p className="mt-5 text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.form.description}</p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-4">
              <span className="sr-only">{data.form.firstNameLabel}</span>
              <input name="firstName" required placeholder={data.form.firstNamePlaceholder} className="w-full min-w-0 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
            </label>

            <label className="rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-4">
              <span className="sr-only">{data.form.lastNameLabel}</span>
              <input name="lastName" required placeholder={data.form.lastNamePlaceholder} className="w-full min-w-0 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
            </label>

            <label className="rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-4">
              <span className="sr-only">{data.form.emailLabel}</span>
              <input type="email" name="email" required placeholder={data.form.emailPlaceholder} className="w-full min-w-0 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
            </label>

            <label className="rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-4">
              <span className="sr-only">{data.form.phoneLabel}</span>
              <input type="tel" name="phone" required placeholder={data.form.phonePlaceholder} className="w-full min-w-0 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
            </label>

            <label className="rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-4 sm:col-span-2">
              <span className="sr-only">{data.form.serviceLabel}</span>
              <select name="service" required defaultValue="" className="w-full min-w-0 bg-transparent text-sm text-[var(--color-heading)] outline-none">
                <option value="" disabled>{data.form.servicePlaceholder}</option>
                {servicesData.services.map((service) => (
                  <option key={service.id} value={service.id}>{service.title}</option>
                ))}
              </select>
            </label>

            <label className="rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-4 py-4 sm:col-span-2">
              <span className="sr-only">{data.form.requirementsLabel}</span>
              <textarea name="requirements" required rows={6} placeholder={data.form.requirementsPlaceholder} className="w-full min-w-0 resize-none bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
            </label>
          </div>

          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-primary)] px-8 py-4 font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)]">
            {data.form.submitText}
            <FaArrowRight aria-hidden="true" />
          </button>

          {submitted && (
            <p role="status" className="mt-4 text-sm font-semibold text-[var(--color-primary)]">{data.form.successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};
