'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HeaderProps } from '@/types/templates.types';

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const isLinkActive = (url: string) => {
    const route = url.split('#')[0];

    if (url === '/') return pathname === '/';
    if (route === '/') return false;
    return pathname.startsWith(route);
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-full border-b border-[#ece7fb] bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-full min-w-0 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 flex-1 items-center lg:flex-none">
          <img
            src={data.logo}
            alt={data.logoAlt}
            className="h-10 w-auto max-w-full object-contain sm:h-14 lg:h-16 lg:max-w-[260px]"
          />
        </Link>

        {/* Desktop Navigation - Clean without dropdown chevrons */}
        <nav className="hidden h-full flex-1 items-center justify-center gap-7 lg:flex xl:gap-8">
          {data.navLinks.map((link) => {
            const isActive = isLinkActive(link.url);

            return (
              <div key={link.id} className="relative flex h-full items-center">
                <Link
                  href={link.url}
                  className={`text-[15px] font-semibold transition-colors duration-200 ${isActive
                      ? 'text-[var(--color-primary)]'
                      : 'text-[#20243d] hover:text-[var(--color-primary)]'
                    }`}
                >
                  {link.label}
                </Link>
                {/* Active indicator bar right under the text */}
                {isActive && (
                  <span className="absolute bottom-4 left-0 right-0 h-[2.5px] rounded-full bg-[var(--color-primary)]" />
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={data.contactButton.url}
            className="hidden items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[var(--color-primary)]/20 transition-all duration-200 hover:bg-[var(--color-primary-dark)] hover:shadow-lg lg:flex"
          >
            <span>{data.contactButton.text}</span>
            <span>&rarr;</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#ece7fb] text-lg text-[#20243d] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full w-full max-w-full overflow-x-hidden border-t border-[#ece7fb] bg-white p-4 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {data.navLinks.map((link) => {
              const isActive = isLinkActive(link.url);

              return (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-[#f3effd] px-3 py-3 text-sm font-medium transition-colors ${isActive
                      ? 'font-bold text-[var(--color-primary)]'
                      : 'text-[#20243d] hover:text-[var(--color-primary)]'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href={data.contactButton.url}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              <span>{data.contactButton.text}</span>
              <span>&rarr;</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
