'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaQuoteRight, FaStar } from 'react-icons/fa';
import { TestimonialCardProps, TestimonialsProps } from '@/types/templates.types';

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article className="flex h-full flex-col gap-5 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-section)] p-4 shadow-[0_10px_30px_var(--color-shadow-soft)] sm:flex-row sm:p-5">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl bg-[var(--color-bg-light)] sm:w-[42%]">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          unoptimized
          sizes="(min-width: 768px) 260px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
        <div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-1 text-[var(--color-warning)]">
              {Array.from({ length: testimonial.rating }, (_, starNumber) => (
                <FaStar key={`${testimonial.id}-star-${starNumber + 1}`} aria-hidden="true" className="text-sm sm:text-base" />
              ))}
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-xl text-[var(--color-primary)]">
              <FaQuoteRight aria-hidden="true" />
            </span>
          </div>

          <p className="mt-4 text-sm italic leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">
            “{testimonial.quote}”
          </p>
        </div>

        <div className="mt-5">
          <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">{testimonial.name}</h3>
          <p className="mt-1 text-sm text-[var(--color-text-light)]">{testimonial.location}</p>
        </div>
      </div>
    </article>
  );
};

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialCount = data?.testimonials.length ?? 0;

  useEffect(() => {
    if (isPaused || testimonialCount <= 1 || !data) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonialCount);
    }, data.autoplayDelay);

    return () => window.clearInterval(intervalId);
  }, [data, isPaused, testimonialCount]);

  if (!data || testimonialCount === 0) return null;

  const nextIndex = (activeIndex + 1) % testimonialCount;

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + testimonialCount) % testimonialCount);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonialCount);
  };

  return (
    <section className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[var(--color-primary-light)] px-5 py-2">
            <span className="text-sm font-semibold text-[var(--color-primary)]">{data.subtitle}</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            <span className="block">{data.title1}</span>
            <span className="block text-[var(--color-primary)]">{data.highlightedTitle}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base">
            {data.description}
          </p>
        </div>

        <div
          aria-live="polite"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="md:hidden">
            <TestimonialCard testimonial={data.testimonials[activeIndex]} />
          </div>

          <div className="hidden grid-cols-2 gap-5 md:grid">
            <TestimonialCard testimonial={data.testimonials[activeIndex]} />
            <TestimonialCard testimonial={data.testimonials[nextIndex]} />
          </div>

          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={showPrevious}
              aria-label={data.previousLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)]"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {data.testimonials.map((testimonial, testimonialIndex) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveIndex(testimonialIndex)}
                  aria-label={`${data.slideLabel} ${testimonialIndex + 1}`}
                  aria-current={activeIndex === testimonialIndex}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === testimonialIndex
                      ? 'w-7 bg-[var(--color-primary)]'
                      : 'w-2.5 bg-[var(--color-border-muted)] hover:bg-[var(--color-primary-bright)]'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label={data.nextLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)]"
            >
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
