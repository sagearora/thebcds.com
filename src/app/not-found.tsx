import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col bg-[var(--c-ink)] text-[var(--c-paper)] pt-24">
        <section className="flex-1 flex items-center">
          <div className="relative w-full">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Neon halo */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,#E6FF3A_0,transparent_60%)]" />
            </div>

            <div className="relative container py-24 md:py-32">
              <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-center">
                <div className="space-y-8">
                  <div className="eyebrow text-[var(--c-neon)]">
                    Navigation error
                  </div>

                  <div className="space-y-4">
                    <p className="display-hero text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
                      404
                    </p>
                    <h1 className="display-section text-[clamp(1.75rem,3vw,2.5rem)] text-[var(--c-paper)]">
                      This page is not part of the program.
                    </h1>
                  </div>

                  <p className="max-w-xl text-base md:text-lg text-[var(--c-cloud)]">
                    You&apos;ve landed in an off-program slot. Let&apos;s get you
                    back to the sessions that matter most for your practice and
                    your patients.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center px-8 py-3 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
                    >
                      Back to home
                    </Link>
                    <Link
                      href="/events"
                      className="inline-flex items-center justify-center px-8 py-3 rounded-[var(--radius-pill)] border border-[var(--c-paper)] text-[var(--c-paper)] eyebrow hover:bg-[var(--c-paper)] hover:text-[var(--c-ink)] transition-all"
                    >
                      View upcoming events
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-[var(--radius-card)] border border-white/10 bg-[radial-gradient(circle_at_top,#6B2DFF_0,transparent_55%),radial-gradient(circle_at_bottom,#FF4AB7_0,transparent_55%),linear-gradient(135deg,#101010,#1F2933)] shadow-[var(--shadow-card)] p-6 md:p-8 flex flex-col gap-6">
                    <div className="space-y-1">
                      <p className="eyebrow text-[var(--c-neon)]">
                        Quick navigation
                      </p>
                      <p className="text-sm text-[var(--c-cloud)] opacity-80">
                        Choose where you&apos;d like to head next.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 text-sm md:text-base">
                      <Link
                        href="/events"
                        className="group flex items-center justify-between rounded-[var(--radius-soft)] bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                      >
                        <span>Explore all events</span>
                        <span className="eyebrow text-[var(--c-neon)] group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </Link>
                      <Link
                        href="/executive"
                        className="group flex items-center justify-between rounded-[var(--radius-soft)] bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                      >
                        <span>Meet the executive team</span>
                        <span className="eyebrow text-[var(--c-neon)] group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </Link>
                      <Link
                        href="https://ontariodentalassociation.formstack.com/forms/bcds_membership_2025_2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-[var(--radius-soft)] bg-[var(--c-neon)] text-[var(--c-ink)] px-4 py-3 hover:shadow-[var(--shadow-elevated)] transition-all"
                      >
                        <span>Become a BCDS member</span>
                        <span className="eyebrow group-hover:translate-x-0.5 transition-transform">
                          ↗
                        </span>
                      </Link>
                    </div>

                    <p className="text-[11px] text-[var(--c-cloud)]/70 leading-relaxed">
                      If you believe this page should exist, feel free to reach
                      out to the BCDS executive team so we can get it scheduled
                      into the program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

