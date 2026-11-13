import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaAngleRight,
  FaChartBar,
  FaChartLine,
  FaEnvelope,
  FaFileSignature,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUsersCog,
} from 'react-icons/fa';
import { ServiceDetailProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhoneAlt':
      return <FaPhoneAlt />;
    case 'FaEnvelope':
      return <FaEnvelope />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    case 'FaUsersCog':
      return <FaUsersCog />;
    case 'FaChartBar':
      return <FaChartBar />;
    case 'FaFileSignature':
      return <FaFileSignature />;
    case 'FaChartLine':
      return <FaChartLine />;
    default:
      return null;
  }
};

export const ServiceDetail = ({ data, services }: ServiceDetailProps) => {
  if (!data || !services?.length) return null;

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
        <aside className="space-y-6">
          <div className="rounded-2xl bg-[var(--color-bg-section)] p-5 shadow-[0_10px_30px_var(--color-shadow-soft)] sm:p-6">
            <h2 className="text-2xl font-bold text-[var(--color-heading)]">{data.sidebarTitle}</h2>
            <span className="mt-3 block h-1 w-10 rounded-full bg-[var(--color-primary)]" />

            <nav className="mt-5">
              <ul className="space-y-2">
                {services.map((service) => {
                  const isActive = service.id === data.activeServiceId;

                  return (
                    <li key={service.id}>
                      <Link
                        href={service.url}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive
                          ? 'bg-[var(--color-primary)] text-[var(--color-text-on-primary)]'
                          : 'text-[var(--color-heading)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]'
                          }`}
                      >
                        <span>{service.title}</span>
                        <FaAngleRight aria-hidden="true" className="shrink-0" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-[0_10px_30px_var(--color-shadow-soft)]">
            <div className="relative h-72">
              <Image
                src={data.helpImage}
                alt={data.helpImageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 280px"
                className="object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-darker)] p-6 text-[var(--color-text-on-primary)]">
              <h2 className="text-2xl font-bold">{data.helpTitle}</h2>
              <p className="mt-3 text-sm leading-6 opacity-80">{data.helpDescription}</p>
              <ul className="mt-5 space-y-4">
                {data.contactItems.map((item) => (
                  <li key={item.id}>
                    <Link href={item.url} className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-main)] text-[var(--color-primary)]">
                        {renderIcon(item.icon)}
                      </span>
                      <span>
                        <span className="sr-only">{item.label}</span>
                        {item.value}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div>
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
            <Image
              src={data.mainImage}
              alt={data.mainImageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">{data.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {data.titleStart}{' '}
            <span className="text-[var(--color-primary)]">{data.highlightedTitle}</span>
          </h1>

          <div className="mt-5 space-y-4 text-base leading-7 text-[var(--color-text)]">
            {data.descriptions.map((description) => (
              <p key={description}>{description}</p>
            ))}
          </div>

          <div className="mt-8 grid min-w-0 grid-cols-1 items-center gap-6 rounded-2xl bg-[var(--color-bg-section)] p-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-heading)]">{data.approach.title}</h2>
              <span className="mt-3 block h-1 w-10 rounded-full bg-[var(--color-primary)]" />
              <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-text)] sm:text-base">
                {data.approach.descriptions.map((description) => (
                  <p key={description}>{description}</p>
                ))}
              </div>
            </div>
            <div className="relative h-56 overflow-hidden rounded-xl">
              <Image
                src={data.approach.image}
                alt={data.approach.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, 360px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)]">{data.keyServicesTitle}</h2>
            <span className="mt-3 block h-1 w-10 rounded-full bg-[var(--color-primary)]" />
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              {data.keyServices.map((item) => (
                <article key={item.id} className="flex items-start gap-4 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-2xl text-[var(--color-primary)]">
                    {renderIcon(item.icon)}
                  </span>
                  <div>
                    <h3 className="font-bold text-[var(--color-heading)]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-text)]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
