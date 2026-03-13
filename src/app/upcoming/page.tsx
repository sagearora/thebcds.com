import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { allEvents } from '@/data/events';

export default function UpcomingPage() {
  // Get today's date and set time to start of day for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Check if there's an event happening today
  const hasEventToday = allEvents.some(event => {
    const eventDate = new Date(event.dateValue);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate.getTime() === today.getTime();
  });
  
  // Events sorted by date for computing "previous event"
  const sortedByDate = [...allEvents].sort((a, b) => a.dateValue.getTime() - b.dateValue.getTime());

  // Find the next event that should be shown
  // Rule: Show the next upcoming event starting 1 day before the current event's date
  // If there's an event today, show the next event (it should have started showing yesterday)
  // On the day that's 1 day before an event, switch to showing the event after that one
  const nextEvent = sortedByDate
    .filter(event => {
      const eventDate = new Date(event.dateValue);
      eventDate.setHours(0, 0, 0, 0);
      
      // If there's an event today, show the next event (eventDate > today)
      if (hasEventToday) {
        return eventDate > today;
      }
      
      // Check if today is exactly 1 day before any event, and get that event's date
      let eventOneDayBefore: Date | null = null;
      for (const e of allEvents) {
        const eDate = new Date(e.dateValue);
        eDate.setHours(0, 0, 0, 0);
        const oneDayBefore = new Date(eDate);
        oneDayBefore.setDate(oneDayBefore.getDate() - 1);
        if (oneDayBefore.getTime() === today.getTime()) {
          eventOneDayBefore = eDate;
          break;
        }
      }
      
      // If today is 1 day before an event, show events after that event (not the event itself)
      if (eventOneDayBefore) {
        return eventDate > eventOneDayBefore;
      }
      
      // Otherwise, show event starting 1 day before the *previous* event's date
      const eventIndex = sortedByDate.findIndex(e => e.id === event.id);
      const prevEvent = eventIndex > 0 ? sortedByDate[eventIndex - 1] : null;
      let showFrom: Date;
      if (prevEvent) {
        showFrom = new Date(prevEvent.dateValue);
        showFrom.setHours(0, 0, 0, 0);
        showFrom.setDate(showFrom.getDate() - 1);
      } else {
        showFrom = new Date(0); // Epoch - always in the past
      }
      // Show if today is >= showFrom and event hasn't passed
      return showFrom <= today && eventDate >= today;
    })[0];

  if (!nextEvent) {
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
                style={{ backgroundColor: nextEvent.accent }}
              >
                <div className="text-center">
                  {nextEvent.isTBC ? (
                    <>
                      <div className="text-4xl font-bold mb-2">
                        TBC
                      </div>
                      <div className="text-xl opacity-90">
                        {nextEvent.dateValue.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-6xl font-bold mb-2">
                        {nextEvent.dateValue.getUTCDate()}
                      </div>
                      <div className="text-xl opacity-90">
                        {nextEvent.dateValue.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })}
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
                      {nextEvent.type}
                    </div>
                    <h2 className="text-4xl font-bold text-[var(--c-ink)]">
                      {nextEvent.title}
                    </h2>

                    {nextEvent.slug === 'plp-changing-times' &&
                      nextEvent.primarySpeakerImage &&
                      nextEvent.primarySpeakerName && (
                        <div className="flex items-center gap-4 pt-2">
                          <div className="relative h-14 w-14 rounded-full overflow-hidden shadow-[var(--shadow-card)]">
                            <Image
                              src={nextEvent.primarySpeakerImage}
                              alt={nextEvent.primarySpeakerName}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="eyebrow text-[var(--c-mid-grey)]">Featuring</div>
                            <div className="text-sm font-medium text-[var(--c-ink)]">
                              {nextEvent.primarySpeakerName}
                            </div>
                          </div>
                        </div>
                      )}

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {nextEvent.registrationUrl && (
                        <Link
                          href={nextEvent.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] text-lg eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
                        >
                          Register Now
                        </Link>
                      )}

                      {nextEvent.slug === 'plp-changing-times' && (
                        <Link
                          href="/events/plp-changing-times"
                          className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-pill)] border border-[var(--c-ink)] text-[var(--c-ink)] text-xs uppercase tracking-[0.16em] hover:bg-[var(--c-ink)] hover:text-[var(--c-paper)] transition-all"
                        >
                          Learn more
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-lg text-[var(--c-steel)] leading-relaxed">
                    {nextEvent.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[var(--c-cloud)]">
                    <div className="space-y-2">
                      <div className="eyebrow text-[var(--c-mid-grey)]">Date</div>
                      <div className="text-base font-medium text-[var(--c-ink)]">{nextEvent.date}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="eyebrow text-[var(--c-mid-grey)]">Time</div>
                      <div className="text-base font-medium text-[var(--c-ink)]">{nextEvent.time}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="eyebrow text-[var(--c-mid-grey)]">Location</div>
                      <div className="text-base font-medium text-[var(--c-ink)]">{nextEvent.location}</div>
                    </div>
                    {nextEvent.ceCredits && (
                      <div className="space-y-2">
                        <div className="eyebrow text-[var(--c-mid-grey)]">Credits</div>
                        <div className="text-base font-medium text-[var(--c-ink)]">{nextEvent.ceCredits}</div>
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

