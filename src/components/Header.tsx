'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/executive', label: 'Executive' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--c-paper)] shadow-[var(--shadow-card)]'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="container">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/bcdslogo.png"
                alt="Brant County Dental Society"
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="eyebrow text-[var(--c-ink)] hover:text-[var(--c-royal-purple)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-all"
              >
                Join Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[var(--c-ink)] transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--c-ink)] transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--c-ink)] transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[var(--c-paper)] flex flex-col items-center justify-center gap-8 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-4xl font-black tracking-tight hover:text-[var(--c-royal-purple)] transition-colors"
              style={{
                fontFamily: 'var(--font-display)',
                animationDelay: `${index * 60}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/events"
            className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] eyebrow hover:shadow-[var(--shadow-elevated)] transition-all mt-4"
          >
            Join Us
          </Link>
        </div>
      )}
    </>
  );
}

