import Link from 'next/link';
import { allEvents, Event } from '@/data/events';

export default function UpcomingEventPreview() {
  // Get the next upcoming event
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = allEvents.filter(event => {
    if (event.isTBC) return true; // TBC events are always upcoming
    return event.dateValue >= today;
  }).sort((a, b) => a.dateValue.getTime() - b.dateValue.getTime());

  const nextEvent = upcomingEvents[0];

  if (!nextEvent) {
    return null;
  }

  return (
    <section className="py-24 bg-[var(--c-cloud)]">
      <div className="container">
        <div className="mb-12">
          <div className="eyebrow text-[var(--c-electric-pink)] mb-4">
            Next Event
          </div>
          <h2 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)]">
            JOIN US NEXT
          </h2>
        </div>

        <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Event Color Block */}
            <div
              className="lg:w-48 p-12 flex items-center justify-center text-white"
              style={{ backgroundColor: nextEvent.accent }}
            >
              <div className="text-center">
                {nextEvent.isTBC ? (
                  <>
                    <div className="text-2xl font-bold mb-2">
                      TBC
                    </div>
                    <div className="text-lg opacity-90">
                      {nextEvent.dateValue.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-4xl font-bold mb-2">
                      {nextEvent.dateValue.getDate()}
                    </div>
                    <div className="text-lg opacity-90">
                      {nextEvent.dateValue.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Event Details */}
            <div className="flex-1 p-8 lg:p-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--c-cloud)] text-xs eyebrow">
                    {nextEvent.type}
                  </div>
                  <h3 className="text-3xl font-bold text-[var(--c-ink)]">
                    {nextEvent.title}
                  </h3>
                  {nextEvent.registrationUrl && (
                    <Link
                      href={nextEvent.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
                    >
                      Register Now
                    </Link>
                  )}
                </div>

                <p className="text-base text-[var(--c-steel)] leading-relaxed">
                  {nextEvent.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="space-y-1">
                    <div className="eyebrow text-[var(--c-mid-grey)]">Time</div>
                    <div className="text-sm font-medium text-[var(--c-ink)]">{nextEvent.time}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="eyebrow text-[var(--c-mid-grey)]">Location</div>
                    <div className="text-sm font-medium text-[var(--c-ink)]">{nextEvent.location}</div>
                  </div>
                  {nextEvent.ceCredits && (
                    <div className="space-y-1">
                      <div className="eyebrow text-[var(--c-mid-grey)]">Credits</div>
                      <div className="text-sm font-medium text-[var(--c-ink)]">{nextEvent.ceCredits}</div>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-sm text-[var(--c-steel)] hover:text-[var(--c-royal-purple)] transition-colors"
                  >
                    View all events
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

