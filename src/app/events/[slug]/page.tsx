import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { allEvents } from '@/data/events';

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allEvents
    .filter((event) => event.slug !== 'plp-changing-times')
    .map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = allEvents.find((entry) => entry.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Header />

      <section className="relative min-h-[52vh] flex items-end justify-start bg-gradient-to-br from-[var(--c-steel)] to-[var(--c-ink)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 container pb-16 pt-32 w-full">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-[var(--c-neon)] text-xs eyebrow">
              {event.type}
            </div>
            <h1 className="display-section text-[clamp(2rem,6vw,4.25rem)] text-[var(--c-paper)] leading-tight">
              {event.title}
            </h1>
            <p className="text-lg text-[var(--c-cloud)] leading-relaxed">{event.description}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              {event.registrationUrl && (
                <Link
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
                >
                  Register now
                </Link>
              )}
              {event.learnMoreUrl && (
                <Link
                  href={event.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] border border-[var(--c-paper)] text-[var(--c-paper)] eyebrow hover:bg-[var(--c-paper)] hover:text-[var(--c-ink)] transition-all"
                >
                  View flyer
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--c-paper)]">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-8 md:p-10 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="eyebrow text-[var(--c-mid-grey)]">CE Credits</div>
                  <div className="text-sm font-medium text-[var(--c-ink)]">{event.ceCredits}</div>
                </div>
              )}
            </div>

            {event.detailBullets && event.detailBullets.length > 0 && (
              <div className="rounded-[var(--radius-card)] border border-[var(--c-cloud)] bg-[var(--c-paper)] p-6 md:p-7 space-y-4">
                <div className="eyebrow text-[var(--c-royal-purple)]">Event details</div>
                <ul className="space-y-2 text-sm md:text-base text-[var(--c-steel)]">
                  {event.detailBullets.map((detail) => (
                    <li key={detail} className="flex gap-2 leading-relaxed">
                      <span className="text-[var(--c-royal-purple)]" aria-hidden>
                        •
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(event.venueImage || event.primarySpeakerImage) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {event.venueImage && (
                  <article className="space-y-3">
                    <div className="eyebrow text-[var(--c-mid-grey)]">Venue</div>
                    <div className="relative h-48 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)]">
                      <Image
                        src={event.venueImage}
                        alt={event.location}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </article>
                )}

                {event.primarySpeakerImage && event.primarySpeakerName && (
                  <article className="space-y-3">
                    <div className="eyebrow text-[var(--c-mid-grey)]">Speaker</div>
                    <div className="flex items-center gap-4 rounded-[var(--radius-card)] border border-[var(--c-cloud)] p-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden shadow-[var(--shadow-card)]">
                        <Image
                          src={event.primarySpeakerImage}
                          alt={event.primarySpeakerName}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--c-ink)]">{event.primarySpeakerName}</p>
                        <p className="text-sm text-[var(--c-mid-grey)]">Featured speaker</p>
                      </div>
                    </div>
                  </article>
                )}
              </div>
            )}

            <div className="pt-2">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-pill)] border border-[var(--c-ink)] text-[var(--c-ink)] text-xs uppercase tracking-[0.16em] hover:bg-[var(--c-ink)] hover:text-[var(--c-paper)] transition-all"
              >
                Back to events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
