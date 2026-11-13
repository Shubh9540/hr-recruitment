'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BlogCardProps, BlogsProps } from '@/types/templates.types';

export const BlogCard = ({ blog, readMoreText }: BlogCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--color-bg-card)] shadow-[0_8px_30px_var(--color-shadow)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden sm:h-64">
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-4 inline-flex items-center gap-2 rounded-t-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-text-on-primary)]">
          <FaCalendarAlt aria-hidden="true" />
          <span>{blog.date}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold leading-snug text-[var(--color-heading)] lg:text-2xl">
          {blog.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-text)] sm:text-base">
          {blog.description}
        </p>
        <Link
          href={blog.url}
          className="mt-5 inline-flex w-fit items-center gap-2 font-bold text-[var(--color-primary)] transition-all duration-300 hover:gap-3"
        >
          {readMoreText}
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export const Blogs = ({ data, limit, itemsPerPage = 9, showButton = true, showPagination = false }: BlogsProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data?.blogs?.length) return null;

  const blogLimit = typeof limit === 'number' ? limit : showButton ? data.homepageLimit : undefined;
  const availableBlogs = typeof blogLimit === 'number' ? data.blogs.slice(0, blogLimit) : data.blogs;
  const totalPages = Math.ceil(availableBlogs.length / itemsPerPage);
  const visibleBlogs = showPagination
    ? availableBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : availableBlogs;

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-section)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[var(--color-primary-light)] px-6 py-2 text-sm font-semibold text-[var(--color-primary)] sm:text-base">
            {data.subtitle}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {data.title1}{' '}
            <span className="relative inline-block text-[var(--color-primary)] after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-[var(--color-primary)]">
              {data.highlightedTitle}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--color-text)] sm:text-lg">
            {data.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} readMoreText={data.readMoreText} />
          ))}
        </div>

        {showPagination && totalPages > 1 && (
          <nav aria-label={data.pagination.pageLabel} className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              aria-label={data.pagination.previousLabel}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                aria-label={`${data.pagination.pageLabel} ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => setCurrentPage(page)}
                className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 font-semibold transition-colors ${
                  currentPage === page
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-text-on-primary)]'
                    : 'border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              aria-label={data.pagination.nextLabel}
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </nav>
        )}

        {showButton && (
          <div className="mt-10 flex items-center gap-6">
            <span className="h-px flex-1 bg-[var(--color-border)]" />
            <Link
              href={data.button.url}
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-text-on-primary)] shadow-[0_8px_24px_var(--color-shadow-strong)] transition-colors duration-300 hover:bg-[var(--color-primary-dark)] sm:px-8"
            >
              {data.button.text}
              <FaArrowRight aria-hidden="true" />
            </Link>
            <span className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
        )}
      </div>
    </section>
  );
};
