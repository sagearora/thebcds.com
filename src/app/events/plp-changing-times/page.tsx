import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { allEvents } from '@/data/events';

export default function PlpChangingTimesPage() {
  const event = allEvents.find((evt) => evt.slug === 'plp-changing-times' || evt.id === 6);

  if (!event) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-24 bg-[var(--c-paper)]">
          <div className="container">
            <h1 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)]">
              Event not found
            </h1>
            <p className="mt-4 text-[var(--c-steel)]">
              We couldn&apos;t find details for this event. Please return to the events page.
            </p>
            <div className="mt-8">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-pill)] border border-[var(--c-ink)] text-[var(--c-ink)] text-xs uppercase tracking-[0.16em] hover:bg-[var(--c-ink)] hover:text-[var(--c-paper)] transition-all"
              >
                Back to events
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-br from-[var(--c-ink)] via-[var(--c-royal-purple)] to-[#8FB800] text-[var(--c-paper)] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 container max-w-6xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="eyebrow text-[var(--c-neon)]">
                Category 1 Core Course
              </div>
              <h1 className="display-hero text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] max-w-5xl">
                PLP: Changing times... Changing needs
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
              <div className="flex-1 space-y-6">
                <p className="text-lg md:text-xl text-[var(--c-cloud)] max-w-2xl leading-relaxed">
                  Join {event.primarySpeakerName ?? 'our expert speakers'} for an in-depth, Category 1
                  PLP course focused on navigating evolving professional liability expectations in
                  modern practice.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-1">
                    <div className="eyebrow text-[var(--c-cloud)] opacity-80">Date</div>
                    <div className="text-sm font-medium">{event.date}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="eyebrow text-[var(--c-cloud)] opacity-80">Time</div>
                    <div className="text-sm font-medium">{event.time}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="eyebrow text-[var(--c-cloud)] opacity-80">Location</div>
                    <div className="text-sm font-medium">{event.location}</div>
                  </div>
                  {event.ceCredits && (
                    <div className="space-y-1 sm:col-span-3">
                      <div className="eyebrow text-[var(--c-cloud)] opacity-80">CE Credits</div>
                      <div className="text-sm font-medium">{event.ceCredits}</div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  {event.registrationUrl && (
                    <Link
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] text-sm uppercase tracking-[0.18em] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
                    >
                      Register now
                    </Link>
                  )}
                  <Link
                    href="/plp/Category%201%20Core%20Course%20-%20PLP%20Changing%20times...Changing%20needs.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] border border-[var(--c-paper)] text-[var(--c-paper)] text-sm uppercase tracking-[0.18em] hover:bg-[var(--c-paper)] hover:text-[var(--c-ink)] transition-all"
                  >
                    Download course PDF
                  </Link>
                </div>
              </div>

              <div className="w-full lg:max-w-md lg:self-stretch">
                <div className="bg-[var(--c-paper)] text-[var(--c-ink)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-6 sm:p-8 space-y-4 max-w-md ml-auto lg:ml-0">
                  <div className="eyebrow text-[var(--c-mid-grey)]">At a glance</div>
                  <p className="text-sm text-[var(--c-steel)] leading-relaxed">
                    A focused evening course designed for dentists who want to stay ahead of changing
                    PLP requirements, understand real-world case studies, and protect their practice
                    with confidence.
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-[var(--c-steel)]">
                    <li>• Category 1, 3 CE credits</li>
                    <li>• Practical, case-driven discussion</li>
                    <li>• Q&amp;A time with experienced speakers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-[var(--c-paper)]">
        <div className="container max-w-6xl">
          <div className="mb-8">
            <div className="eyebrow text-[var(--c-electric-pink)] mb-3">
              Course Overview
            </div>
            <h2 className="display-section text-[clamp(2rem,4vw,3rem)] text-[var(--c-ink)]">
              Changing times, changing needs
            </h2>
          </div>

          <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-8 md:p-10 space-y-6">
            <p className="text-base md:text-lg text-[var(--c-steel)] leading-relaxed">
              Professional liability protection (PLP) continues to evolve as dentistry adapts to new
              technologies, patient expectations, and regulatory updates. This Category 1 course is
              designed to help you understand how these changes affect your everyday clinical
              decision-making, documentation, communication, and risk management.
            </p>
            <p className="text-base md:text-lg text-[var(--c-steel)] leading-relaxed">
              Through real-world scenarios and practical discussion, you&apos;ll leave with a
              clearer understanding of how to protect yourself and your team while continuing to
              deliver excellent patient care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[var(--c-ink)]">
                  You&apos;ll learn how to:
                </h3>
                <ul className="space-y-2 text-sm text-[var(--c-steel)]">
                  <li>• Recognize common PLP risk areas in day-to-day practice.</li>
                  <li>• Strengthen records and informed consent communication.</li>
                  <li>• Navigate complaints, claims, and college investigations.</li>
                  <li>• Apply lessons from recent PLP case examples.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[var(--c-ink)]">
                  Who should attend:
                </h3>
                <ul className="space-y-2 text-sm text-[var(--c-steel)]">
                  <li>• Dentists at any stage of practice.</li>
                  <li>• Associates and practice owners.</li>
                  <li>• Team members involved in communication and records.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20 bg-[var(--c-cloud)]">
        <div className="container max-w-6xl">
          <div className="mb-10">
            <div className="eyebrow text-[var(--c-royal-purple)] mb-3">
              Speakers
            </div>
            <h2 className="display-section text-[clamp(2rem,4vw,3rem)] text-[var(--c-ink)]">
              Meet your presenters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Peter Hong */}
            <article className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-8 space-y-5">
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)]">
                  <Image
                    src="/images/events/peter-hong.jpg"
                    alt="Dr. Peter Hong"
                    fill
                    sizes="(min-width: 768px) 80px, 64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--c-ink)]">
                    Dr. Peter Hong
                  </h3>
                  <p className="text-sm text-[var(--c-mid-grey)]">
                    PLP Speaker
                  </p>
                </div>
              </div>
              <p className="text-sm text-[var(--c-steel)] leading-relaxed">
                Dr. Hong brings extensive experience in professional liability and risk management,
                helping dentists understand how evolving expectations impact real clinical practice.
              </p>
              <Link
                href="/plp/BIO%20-%20Peter%20Hong.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[var(--radius-pill)] border border-[var(--c-ink)] text-[var(--c-ink)] text-xs uppercase tracking-[0.16em] hover:bg-[var(--c-ink)] hover:text-[var(--c-paper)] transition-all"
              >
                View full bio (PDF)
              </Link>
            </article>

            {/* Kiran Qureshi */}
            <article className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-8 space-y-5">
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)]">
                  <Image
                    src="/images/events/kiran-qureshi.jpg"
                    alt="Dr. Kiran Qureshi"
                    fill
                    sizes="(min-width: 768px) 80px, 64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--c-ink)]">
                    Dr. Kiran Qureshi
                  </h3>
                  <p className="text-sm text-[var(--c-mid-grey)]">
                    PLP Speaker
                  </p>
                </div>
              </div>
              <p className="text-sm text-[var(--c-steel)] leading-relaxed">
                Dr. Qureshi offers a grounded, practical perspective on navigating PLP questions,
                documentation, and communication with patients and colleagues.
              </p>
              <Link
                href="/plp/BIO%20-%20Kiran%20Qureshi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[var(--radius-pill)] border border-[var(--c-ink)] text-[var(--c-ink)] text-xs uppercase tracking-[0.16em] hover:bg-[var(--c-ink)] hover:text-[var(--c-paper)] transition-all"
              >
                View full bio (PDF)
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--c-ink)] to-[var(--c-royal-purple)]">
        <div className="container max-w-6xl text-center space-y-6">
          <div className="eyebrow text-[var(--c-neon)]">
            Secure your seat
          </div>
          <h2 className="display-section text-[clamp(2.2rem,5vw,3.5rem)] text-[var(--c-paper)]">
            Don&apos;t miss this Category 1 PLP evening
          </h2>
          <p className="text-lg text-[var(--c-cloud)] max-w-2xl mx-auto">
            Space is limited. Reserve now to make sure you and your team stay current on evolving
            professional liability expectations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {event.registrationUrl && (
              <Link
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] text-sm uppercase tracking-[0.18em] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
              >
                Register now
              </Link>
            )}
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] border border-[var(--c-paper)] text-[var(--c-paper)] text-sm uppercase tracking-[0.18em] hover:bg-[var(--c-paper)] hover:text-[var(--c-ink)] transition-all"
            >
              View all events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

