'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaChartLine, FaHandshake, FaUsers } from 'react-icons/fa';
import { ImpactCounterProps, ImpactProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers':
      return <FaUsers />;
    case 'FaHandshake':
      return <FaHandshake />;
    case 'FaBriefcase':
      return <FaBriefcase />;
    case 'FaChartLine':
      return <FaChartLine />;
    default:
      return null;
  }
};

export const ImpactCounter = ({ value, start }: ImpactCounterProps) => {
  const targetValue = Number.parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[\d,]/g, '');
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!start || Number.isNaN(targetValue)) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrentValue(targetValue);
      return;
    }

    let animationFrame = 0;
    let startTime = 0;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / 1800, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(Math.round(targetValue * easedProgress));

      if (progress < 1) animationFrame = window.requestAnimationFrame(updateCounter);
    };

    animationFrame = window.requestAnimationFrame(updateCounter);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [start, targetValue]);

  return (
    <>
      {currentValue.toLocaleString('en-US')}
      {suffix}
    </>
  );
};

export const Impact = ({ data }: ImpactProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStartCounters(true);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 rounded-3xl border border-[var(--color-border-card)] bg-[var(--color-bg-light)] px-5 py-6 shadow-[0_12px_36px_var(--color-shadow-soft)] sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {data.stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-4 border-[var(--color-border-alt)] py-4 sm:px-4 lg:border-r lg:px-6 lg:py-0 lg:last:border-r-0"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-2xl text-[var(--color-primary)] sm:h-18 sm:w-18 sm:text-3xl">
                {renderIcon(stat.icon)}
              </div>

              <div className="min-w-0">
                <strong className="block text-3xl font-extrabold leading-none text-[var(--color-primary)] sm:text-4xl">
                  <ImpactCounter value={stat.value} start={startCounters} />
                </strong>
                <span className="mt-2 block text-sm font-medium leading-5 text-[var(--color-text)] sm:text-base">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
