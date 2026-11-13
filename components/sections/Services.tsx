import React from 'react';
import Link from 'next/link';
import {
  FaArrowRight,
  FaUsers,
  FaChartBar,
  FaCog,
  FaChalkboardTeacher,
  FaUserShield,
  FaHandshake,
  FaClipboardCheck,
  FaChartLine,
  FaWallet,
  FaUsersCog,
  FaSitemap,
  FaLightbulb,
} from 'react-icons/fa';
import { ServiceCardProps, ServicesProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers':
      return <FaUsers />;
    case 'FaChartBar':
      return <FaChartBar />;
    case 'FaCog':
      return <FaCog />;
    case 'FaChalkboardTeacher':
      return <FaChalkboardTeacher />;
    case 'FaUserShield':
      return <FaUserShield />;
    case 'FaHandshake':
      return <FaHandshake />;
    case 'FaClipboardCheck':
      return <FaClipboardCheck />;
    case 'FaChartLine':
      return <FaChartLine />;
    case 'FaWallet':
      return <FaWallet />;
    case 'FaUsersCog':
      return <FaUsersCog />;
    case 'FaSitemap':
      return <FaSitemap />;
    case 'FaLightbulb':
      return <FaLightbulb />;
    default:
      return <FaUsers />;
  }
};

export const ServiceCard = ({ service, linkText }: ServiceCardProps) => {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-6 shadow-[0_10px_30px_var(--color-shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-accent)] hover:shadow-[0_16px_36px_var(--color-shadow)] sm:p-7">
      <div>
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-3xl text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-text-on-primary)]">
          {renderIcon(service.icon)}
        </div>

        <Link href={service.url} className="block">
          <h3 className="mb-2 text-lg font-bold text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-primary)] sm:text-xl">
            {service.title}
          </h3>
        </Link>

        <p className="text-sm leading-6 text-[var(--color-text)] sm:text-base">{service.description}</p>
      </div>

      <div className="mt-5">
        <Link
          href={service.url}
          className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-primary)] transition-all group-hover:gap-4 sm:text-base"
        >
          <span>{linkText}</span>
          <FaArrowRight aria-hidden="true" className="text-xs" />
        </Link>
      </div>
    </article>
  );
};

export const Services = ({ data, limit, showButton = true }: ServicesProps) => {
  if (!data) return null;

  const serviceLimit = typeof limit === 'number' ? limit : showButton ? data.homepageLimit : undefined;
  const visibleServices = typeof serviceLimit === 'number' ? data.services.slice(0, serviceLimit) : data.services;

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-alt)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] sm:text-sm">
              {data.subtitle}
            </span>
          </div>

          <h2 className="flex flex-col items-center gap-2 text-3xl font-extrabold leading-none tracking-tight text-[var(--color-heading)] sm:gap-3 sm:text-4xl lg:text-5xl">
            <span>{data.title1}</span>
            <span className="text-[var(--color-primary)]">{data.highlightedTitle}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => (
            <ServiceCard key={service.id} service={service} linkText={data.linkText} />
          ))}
        </div>

        {showButton && (
          <div className="mt-8 flex justify-center">
            <Link
              href={data.buttonUrl}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-primary)] px-8 py-3.5 text-sm font-semibold text-[var(--color-text-on-primary)] shadow-[0_10px_24px_var(--color-shadow-strong)] transition-colors duration-200 hover:bg-[var(--color-primary-dark)] sm:w-auto"
            >
              <span>{data.buttonText}</span>
              <FaArrowRight aria-hidden="true" className="text-xs" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
