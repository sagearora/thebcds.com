import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { allEvents } from '@/data/events';

export default function UpcomingPage() {
  // Get the January 27, 2026 event specifically
  const secondEvent = allEvents.find(event => 
    event.dateValue.getTime() === new Date('2026-01-27').getTime()
  );

  if (!secondEvent) {
    return (
      <>
        <Header />
        <section className="min-h-screen flex items-center justify-center bg-[var(--c-paper)]">
          <div className="container text-center">
            <h1 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)] mb-4">
              NO UPCOMING EVENT
            </h1>
            <p className="text-lg text-[var(--c-steel)] mb-8">
              There is no second upcoming event scheduled at this time.
            </p>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-10 py-5 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] text-lg eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
            >
              View All Events
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end justify-start bg-gradient-to-br from-[var(--c-royal-purple)] to-[var(--c-electric-pink)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative z-10 container pb-20 pt-32 w-full">
          <div className="space-y-6">
            <div className="eyebrow text-[var(--c-neon)]">
              Next Upcoming Event
            </div>
            <h1 className="display-hero text-[clamp(3rem,9vw,7rem)] text-[var(--c-paper)] leading-[0.9]">
              UPCOMING
              <br />
              <span className="text-[var(--c-neon)]">EVENT</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--c-cloud)] max-w-2xl leading-relaxed">
              Join us for this exciting upcoming event. Don't miss out on this opportunity to learn, network, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-24 bg-[var(--c-paper)]">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Event Color Block */}
              <div
                className="lg:w-64 p-12 flex items-center justify-center text-white"
                style={{ backgroundColor: secondEvent.accent }}
              >
                <div className="text-center">
                  {secondEvent.isTBC ? (
                    <>
                      <div className="text-4xl font-bold mb-2">
                        TBC
                      </div>
                      <div className="text-xl opacity-90">
                        {secondEvent.dateValue.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-6xl font-bold mb-2">
                        {secondEvent.dateValue.getDate()}
                      </div>
                      <div className="text-xl opacity-90">
                        {secondEvent.dateValue.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-1 p-8 lg:p-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--c-cloud)] text-xs eyebrow">
                      {secondEvent.type}
                    </div>
                    <h2 className="text-4xl font-bold text-[var(--c-ink)]">
                      {secondEvent.title}
                    </h2>
                    {secondEvent.registrationUrl && (
                      <Link
                        href={secondEvent.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] text-lg eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
                      >
                        Register Now
                      </Link>
                    )}
                  </div>

                  <p className="text-lg text-[var(--c-steel)] leading-relaxed">
                    {secondEvent.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[var(--c-cloud)]">
                    <div className="space-y-2">
                      <div className="eyebrow text-[var(--c-mid-grey)]">Date</div>
                      <div className="text-base font-medium text-[var(--c-ink)]">{secondEvent.date}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="eyebrow text-[var(--c-mid-grey)]">Time</div>
                      <div className="text-base font-medium text-[var(--c-ink)]">{secondEvent.time}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="eyebrow text-[var(--c-mid-grey)]">Location</div>
                      <div className="text-base font-medium text-[var(--c-ink)]">{secondEvent.location}</div>
                    </div>
                    {secondEvent.ceCredits && (
                      <div className="space-y-2">
                        <div className="eyebrow text-[var(--c-mid-grey)]">Credits</div>
                        <div className="text-base font-medium text-[var(--c-ink)]">{secondEvent.ceCredits}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-24 bg-[var(--c-cloud)]">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-10 py-5 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] text-lg eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
            >
              View All Events
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-10 py-5 rounded-[var(--radius-pill)] border-2 border-[var(--c-ink)] text-[var(--c-ink)] text-lg eyebrow hover:bg-[var(--c-ink)] hover:text-[var(--c-paper)] transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

