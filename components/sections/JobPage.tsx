'use client';

import React, { useRef, useState } from 'react';
import {
  FaArrowRight,
  FaBriefcase,
  FaChalkboardTeacher,
  FaChartBar,
  FaClipboardCheck,
  FaCog,
  FaCommentDots,
  FaEnvelope,
  FaFileAlt,
  FaHandshake,
  FaMapMarkerAlt,
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaUser,
  FaUsers,
} from 'react-icons/fa';
import { JobPageProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers':
      return <FaUsers />;
    case 'FaFileAlt':
      return <FaFileAlt />;
    case 'FaChalkboardTeacher':
      return <FaChalkboardTeacher />;
    case 'FaMoneyCheckAlt':
      return <FaMoneyCheckAlt />;
    case 'FaChartBar':
      return <FaChartBar />;
    case 'FaHandshake':
      return <FaHandshake />;
    case 'FaCog':
      return <FaCog />;
    case 'FaClipboardCheck':
      return <FaClipboardCheck />;
    default:
      return <FaBriefcase />;
  }
};

export const JobPage = ({ data, jobsData, initialPositionId }: JobPageProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const positionRef = useRef<HTMLSelectElement>(null);
  const initialPosition = jobsData?.jobs.find((job) => job.id === initialPositionId)?.title ?? '';
  const [selectedPosition, setSelectedPosition] = useState(initialPosition);
  const [selectedFileName, setSelectedFileName] = useState(data?.form.noFileText ?? '');
  const [submitted, setSubmitted] = useState(false);

  if (!data || !jobsData?.jobs.length) return null;

  const handleApply = (jobTitle: string) => {
    setSelectedPosition(jobTitle);
    setSubmitted(false);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => positionRef.current?.focus(), 400);
  };

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-section)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <span className="inline-flex rounded-full bg-[var(--color-primary-light)] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
            {jobsData.subtitle}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {jobsData.title1}{' '}
            <span className="text-[var(--color-primary)]">{jobsData.highlightedTitle}</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base">
            {jobsData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_350px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {jobsData.jobs.map((job) => (
              <article key={job.id} className="flex h-full flex-col rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-5 shadow-[0_10px_30px_var(--color-shadow-soft)]">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-2xl text-[var(--color-primary)]">
                    {renderIcon(job.icon)}
                  </span>
                  <div className="min-w-0 pt-1">
                    <h2 className="text-base font-bold leading-snug text-[var(--color-heading)]">{job.title}</h2>
                    <p className="mt-1 text-sm text-[var(--color-text)]">{job.company}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--color-text)]">
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt aria-hidden="true" className="text-[var(--color-primary)]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaBriefcase aria-hidden="true" className="text-[var(--color-primary)]" />
                    {job.employmentType}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-5 text-[var(--color-text)]">{job.description}</p>
                <button
                  type="button"
                  onClick={() => handleApply(job.title)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)] sm:w-auto sm:self-start"
                >
                  {jobsData.applyText}
                  <FaArrowRight aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="scroll-mt-28 rounded-2xl bg-[var(--color-bg-card-alt)] p-5 shadow-[0_10px_30px_var(--color-shadow-soft)] lg:sticky lg:top-28 sm:p-6"
          >
            <h2 className="text-3xl font-bold text-[var(--color-heading)]">{data.form.title}</h2>
            <span className="mt-3 block h-1 w-12 rounded-full bg-[var(--color-primary)]" />
            <p className="mt-5 text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.form.description}</p>

            <div className="mt-6 space-y-3">
              <label className="flex min-w-0 items-center gap-3 rounded-lg bg-[var(--color-bg-card)] px-4 py-3">
                <FaUser aria-hidden="true" className="shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.firstNameLabel}</span>
                <input name="firstName" required placeholder={data.form.firstNamePlaceholder} className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>
              <label className="flex min-w-0 items-center gap-3 rounded-lg bg-[var(--color-bg-card)] px-4 py-3">
                <FaUser aria-hidden="true" className="shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.lastNameLabel}</span>
                <input name="lastName" required placeholder={data.form.lastNamePlaceholder} className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>
              <label className="flex min-w-0 items-center gap-3 rounded-lg bg-[var(--color-bg-card)] px-4 py-3">
                <FaEnvelope aria-hidden="true" className="shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.emailLabel}</span>
                <input type="email" name="email" required placeholder={data.form.emailPlaceholder} className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>
              <label className="flex min-w-0 items-center gap-3 rounded-lg bg-[var(--color-bg-card)] px-4 py-3">
                <FaPhoneAlt aria-hidden="true" className="shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.phoneLabel}</span>
                <input type="tel" name="phone" required placeholder={data.form.phonePlaceholder} className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>
              <label className="flex min-w-0 items-center gap-3 rounded-lg bg-[var(--color-bg-card)] px-4 py-3">
                <FaBriefcase aria-hidden="true" className="shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.positionLabel}</span>
                <select
                  ref={positionRef}
                  name="position"
                  required
                  value={selectedPosition}
                  onChange={(event) => setSelectedPosition(event.target.value)}
                  className="w-auto min-w-0 flex-1 bg-transparent text-sm text-[var(--color-heading)] outline-none"
                >
                  <option value="">{data.form.positionPlaceholder}</option>
                  {jobsData.jobs.map((job) => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg bg-[var(--color-bg-card)] px-4 py-3">
                <FaFileAlt aria-hidden="true" className="shrink-0 text-[var(--color-text)]" />
                <span className="min-w-0 flex-1 truncate text-sm text-[var(--color-text)]">
                  {selectedFileName || data.form.resumeLabel}
                </span>
                <span className="shrink-0 rounded-md bg-[var(--color-primary-light)] px-3 py-2 text-xs font-semibold text-[var(--color-heading)]">{data.form.chooseFileText}</span>
                <input
                  type="file"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  aria-label={data.form.resumeLabel}
                  className="sr-only"
                  onChange={(event) => setSelectedFileName(event.target.files?.[0]?.name ?? data.form.noFileText)}
                />
              </label>
              <label className="flex min-w-0 items-start gap-3 rounded-lg bg-[var(--color-bg-card)] px-4 py-3">
                <FaCommentDots aria-hidden="true" className="mt-1 shrink-0 text-[var(--color-text)]" />
                <span className="sr-only">{data.form.messageLabel}</span>
                <textarea name="message" rows={4} placeholder={data.form.messagePlaceholder} className="w-auto min-w-0 flex-1 resize-none bg-transparent text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-text)]" />
              </label>
            </div>

            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-text-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)]">
              {data.form.submitText}
              <FaArrowRight aria-hidden="true" />
            </button>

            {submitted && (
              <p role="status" className="mt-4 text-sm font-semibold text-[var(--color-primary)]">{data.form.successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
