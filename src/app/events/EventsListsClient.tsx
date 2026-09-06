'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { allEvents } from '@/data/events';
import { getUpcomingPastEvents } from '@/lib/eventDates';

export default function EventsListsClient() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const { upcoming: upcomingEvents, past: pastEvents } = useMemo(
    () => (now ? getUpcomingPastEvents(allEvents, now) : { upcoming: [], past: [] }),
    [now],
  );

  if (!now) {
    return (
      <section className="py-24 bg-[var(--c-paper)]">
        <div className="container text-center">
          <p className="text-[var(--c-steel)] eyebrow">Loading events…</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-24 bg-[var(--c-paper)]">
        <div className="container">
          <div className="mb-16">
            <div className="eyebrow text-[var(--c-electric-pink)] mb-4">Upcoming Events</div>
            <h2 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)]">
              WHAT&apos;S COMING UP
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="group bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  <div
                    className="lg:w-48 p-12 flex items-center justify-center text-white"
                    style={{ backgroundColor: event.accent }}
                  >
                    <div className="display-section text-[5rem] opacity-50">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex-1 p-8 lg:p-12">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--c-cloud)] text-xs eyebrow">
                          {event.type}
                        </div>
                        <h3 className="text-3xl font-bold text-[var(--c-ink)]">{event.title}</h3>

                        {event.slug === 'plp-changing-times' &&
                          event.primarySpeakerImage &&
                          event.primarySpeakerName && (
                            <div className="flex items-center gap-4 pt-2">
                              <div className="relative h-14 w-14 rounded-full overflow-hidden shadow-[var(--shadow-card)]">
                                <Image
                                  src={event.primarySpeakerImage}
                                  alt={event.primarySpeakerName}
                                  fill
                                  sizes="56px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="space-y-1">
                                <div className="eyebrow text-[var(--c-mid-grey)]">Featuring</div>
                                <div className="text-sm font-medium text-[var(--c-ink)]">
                                  {event.primarySpeakerName}
                                </div>
                              </div>
                            </div>
                          )}

                        {event.venueImage && (
                          <div className="flex items-center gap-4 pt-2">
                            <div className="relative h-16 w-28 shrink-0 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)]">
                              <Image
                                src={event.venueImage}
                                alt={event.location}
                                fill
                                sizes="112px"
                                className="object-cover"
                              />
                            </div>
                            <div className="space-y-1">
                              <div className="eyebrow text-[var(--c-mid-grey)]">Venue</div>
                              <div className="text-sm font-medium text-[var(--c-ink)]">{event.location}</div>
                            </div>
                          </div>
                        )}

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          {event.registrationUrl && (
                            <Link
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
                            >
                              Register Now
                            </Link>
                          )}

                          {event.slug && (
                            <Link
                              href={`/e/${event.slug}`}
                              className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-pill)] border border-[var(--c-ink)] text-[var(--c-ink)] text-xs uppercase tracking-[0.16em] hover:bg-[var(--c-ink)] hover:text-[var(--c-paper)] transition-all"
                            >
                              Learn more
                            </Link>
                          )}

                          {event.learnMoreUrl && (
                            <Link
                              href={event.learnMoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-pill)] border border-[var(--c-ink)] text-[var(--c-ink)] text-xs uppercase tracking-[0.16em] hover:bg-[var(--c-ink)] hover:text-[var(--c-paper)] transition-all"
                            >
                              View flyer
                            </Link>
                          )}
                        </div>
                      </div>

                      <p className="text-base text-[var(--c-steel)] leading-relaxed">{event.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                        <div className="space-y-1">
                          <div className="eyebrow text-[var(--c-mid-grey)]">Date</div>
                          <div className="text-sm font-medium text-[var(--c-ink)]">{event.date}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="eyebrow text-[var(--c-mid-grey)]">Time</div>
                          <div className="text-sm font-medium text-[var(--c-ink)]">{event.time}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="eyebrow text-[var(--c-mid-grey)]">Location</div>
                          <div className="text-sm font-medium text-[var(--c-ink)]">{event.location}</div>
                        </div>
                        {event.ceCredits && (
                          <div className="space-y-1">
                            <div className="eyebrow text-[var(--c-mid-grey)]">Credits</div>
                            <div className="text-sm font-medium text-[var(--c-ink)]">{event.ceCredits}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {pastEvents.length > 0 && (
        <section className="py-24 bg-[var(--c-cloud)]">
          <div className="container">
            <div className="mb-16">
              <div className="eyebrow text-[var(--c-royal-purple)] mb-4">Past Events</div>
              <h2 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)]">
                RECENT HIGHLIGHTS
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all overflow-hidden opacity-75"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div
                      className="lg:w-48 p-12 flex items-center justify-center text-white"
                      style={{ backgroundColor: event.accent }}
                    >
                      <div className="display-section text-[5rem] opacity-30">
                        {String(pastEvents.length - index).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="flex-1 p-8 lg:p-12">
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="space-y-2">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--c-cloud)] text-xs eyebrow">
                              {event.type}
                            </div>
                            <h3 className="text-3xl font-bold text-[var(--c-ink)]">{event.title}</h3>
                          </div>
                        </div>

                        <p className="text-base text-[var(--c-steel)] leading-relaxed">{event.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                          <div className="space-y-1">
                            <div className="eyebrow text-[var(--c-mid-grey)]">Date</div>
                            <div className="text-sm font-medium text-[var(--c-ink)]">{event.date}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="eyebrow text-[var(--c-mid-grey)]">Time</div>
                            <div className="text-sm font-medium text-[var(--c-ink)]">{event.time}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="eyebrow text-[var(--c-mid-grey)]">Location</div>
                            <div className="text-sm font-medium text-[var(--c-ink)]">{event.location}</div>
                          </div>
                          {event.ceCredits && (
                            <div className="space-y-1">
                              <div className="eyebrow text-[var(--c-mid-grey)]">Credits</div>
                              <div className="text-sm font-medium text-[var(--c-ink)]">{event.ceCredits}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className={`py-24 ${pastEvents.length > 0 ? 'bg-[var(--c-paper)]' : 'bg-[var(--c-cloud)]'}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="display-section text-[clamp(3rem,7vw,5rem)] text-[var(--c-royal-purple)]">
                7
              </div>
              <div className="eyebrow text-[var(--c-mid-grey)]">MEETINGS</div>
              <p className="text-sm text-[var(--c-steel)]">Scheduled for 2026–2027</p>
            </div>
            <div className="space-y-4">
              <div className="display-section text-[clamp(3rem,7vw,5rem)] text-[var(--c-electric-pink)]">14</div>
              <div className="eyebrow text-[var(--c-mid-grey)]">CE POINTS</div>
              <p className="text-sm text-[var(--c-steel)]">Across the season</p>
            </div>
            <div className="space-y-4">
              <div className="display-section text-[clamp(3rem,7vw,5rem)]" style={{ color: '#8FB800' }}>
                3
              </div>
              <div className="eyebrow text-[var(--c-mid-grey)]">CORE 1 CE POINTS</div>
              <p className="text-sm text-[var(--c-steel)]">March 30 PLP session</p>
            </div>
            <div className="space-y-4">
              <div className="display-section text-[clamp(3rem,7vw,5rem)] text-[var(--c-royal-purple)]">7</div>
              <div className="eyebrow text-[var(--c-mid-grey)]">DINNERS INCLUDED</div>
              <p className="text-sm text-[var(--c-steel)]">Connect with colleagues</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
