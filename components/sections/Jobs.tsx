import React from 'react';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBriefcase,
  FaChalkboardTeacher,
  FaFileAlt,
  FaMapMarkerAlt,
  FaMoneyCheckAlt,
  FaUsers,
} from 'react-icons/fa';
import { JobsProps } from '@/types/templates.types';

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
    default:
      return <FaBriefcase />;
  }
};

export const Jobs = ({ data, limit }: JobsProps) => {
  if (!data) return null;

  const jobLimit = typeof limit === 'number' ? limit : data.homepageLimit;
  const visibleJobs = data.jobs.slice(0, jobLimit);

  return (
    <section id="jobs" className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-section)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex rounded-full bg-[var(--color-primary-light)] px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
                {data.subtitle}
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              {data.title1}{' '}
              <span className="text-[var(--color-primary)]">{data.highlightedTitle}</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base">
              {data.description}
            </p>
          </div>

          <Link
            href={data.buttonUrl}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[var(--color-border-accent)] px-7 py-3 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)] sm:w-auto"
          >
            <span>{data.buttonText}</span>
            <FaArrowRight aria-hidden="true" className="text-xs" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleJobs.map((job) => (
            <article
              key={job.id}
              className="group flex h-full flex-col rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-5 shadow-[0_10px_30px_var(--color-shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-accent)] hover:shadow-[0_16px_36px_var(--color-shadow)]"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-2xl text-[var(--color-primary)]">
                  {renderIcon(job.icon)}
                </span>

                <div className="min-w-0 pt-1">
                  <Link href={job.url}>
                    <h3 className="text-base font-bold leading-snug text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-primary)]">
                      {job.title}
                    </h3>
                  </Link>
                  <p className="mt-1 text-sm text-[var(--color-text)]">{job.company}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt aria-hidden="true" className="shrink-0 text-[var(--color-primary)]" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaBriefcase aria-hidden="true" className="shrink-0 text-[var(--color-primary)]" />
                  <span>{job.employmentType}</span>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-5 text-[var(--color-text)]">
                {job.description}
              </p>

              <Link
                href={job.url}
                className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-on-primary)] shadow-[0_8px_20px_var(--color-shadow-strong)] transition-colors hover:bg-[var(--color-primary-dark)] sm:w-auto sm:self-start"
              >
                <span>{data.applyText}</span>
                <FaArrowRight aria-hidden="true" className="text-xs" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
