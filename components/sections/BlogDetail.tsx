import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaQuoteLeft, FaUser } from 'react-icons/fa';
import { BlogDetailProps } from '@/types/templates.types';

export const BlogDetail = ({ data, blogsData }: BlogDetailProps) => {
  if (!data || !blogsData?.blogs?.length || data.galleryImages.length < 3) return null;

  const featuredBlog = blogsData.blogs[0];
  const recentPosts = blogsData.blogs.slice(1, 5);

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <article className="min-w-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[var(--color-bg-light)]">
            <Image
              src={data.galleryImages[0].image}
              alt={data.galleryImages[0].imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-text-on-primary)]">
            <FaCalendarAlt aria-hidden="true" />
            <span>{featuredBlog.date}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {data.titleStart}{' '}
            <span className="text-[var(--color-primary)]">{data.highlightedTitle}</span>
          </h1>

          <div className="mt-5 flex items-center gap-3 border-b border-[var(--color-border)] pb-5 text-sm font-medium text-[var(--color-text)]">
            <FaUser aria-hidden="true" className="text-[var(--color-primary)]" />
            <span>{data.authorLabel}</span>
          </div>

          <p className="mt-6 text-sm leading-7 text-[var(--color-text)] sm:text-base">{data.paragraphs[0]}</p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text)] sm:text-base">{data.paragraphs[1]}</p>

          <blockquote className="mt-6 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-primary-light)] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <FaQuoteLeft aria-hidden="true" className="flex-shrink-0 text-4xl text-[var(--color-primary)]" />
              <div>
                <p className="text-sm leading-7 text-[var(--color-text)] sm:text-base">{data.quote.text}</p>
                <footer className="mt-4 font-bold text-[var(--color-primary)]">{data.quote.author}</footer>
              </div>
            </div>
          </blockquote>

          <p className="mt-6 text-sm leading-7 text-[var(--color-text)] sm:text-base">{data.paragraphs[2]}</p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative min-h-72 overflow-hidden rounded-2xl sm:row-span-2">
              <Image
                src={data.galleryImages[1].image}
                alt={data.galleryImages[1].imageAlt}
                fill
                sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-2xl sm:min-h-36">
              <Image
                src={data.galleryImages[2].image}
                alt={data.galleryImages[2].imageAlt}
                fill
                sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-[var(--color-text)] sm:text-base">{data.paragraphs[3]}</p>
        </article>

        <aside className="h-fit min-w-0 rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-5 shadow-[0_10px_30px_var(--color-shadow-soft)] lg:sticky lg:top-6">
          <h2 className="text-2xl font-bold text-[var(--color-heading)]">{data.recentPostsTitle}</h2>
          <span className="mt-3 block h-0.5 w-10 bg-[var(--color-primary)]" />

          <div className="mt-6 space-y-5">
            {recentPosts.map((post) => (
              <article key={post.id} className="grid min-w-0 grid-cols-[88px_minmax(0,1fr)] gap-4">
                <Link href={post.url} className="relative min-h-24 overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="88px"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="min-w-0">
                  <h3 className="line-clamp-3 text-sm font-bold leading-5 text-[var(--color-heading)]">
                    <Link href={post.url} className="transition-colors hover:text-[var(--color-primary)]">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-xs text-[var(--color-text-light)]">
                    <FaCalendarAlt aria-hidden="true" />
                    <span>{post.date}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};
