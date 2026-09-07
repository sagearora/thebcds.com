"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { allEvents } from "@/data/events";
import { getNextFeaturedEvent } from "@/lib/eventDates";

export default function UpcomingEventPreview() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setNow(new Date()));
    const timer = setInterval(() => setNow(new Date()), 60_000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, []);
  const nextEvent = useMemo(
    () => (now ? getNextFeaturedEvent(allEvents, now) : null),
    [now],
  );

  return (
    <section className="home-events" id="next-event">
      <div className="home-shell">
        <div className="home-section-heading home-reveal">
          <div>
            <p className="home-label">02 / The next connection</p>
            <h2>
              Make room for
              <br />
              <em>something good.</em>
            </h2>
          </div>
          <Link href="/events" className="home-text-link">
            Explore all events <span aria-hidden="true">↗</span>
          </Link>
        </div>
        {!now ? (
          <p className="home-event-empty" role="status">
            Finding your next opportunity to connect…
          </p>
        ) : nextEvent ? (
          <article className="home-event-card">
            <div className="home-event-date">
              <span className="home-label">Save the date</span>
              <strong>
                {nextEvent.isTBC ? "TBC" : nextEvent.dateValue.getDate()}
              </strong>
              <span>
                {nextEvent.dateValue.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <div className="home-event-date-art" aria-hidden="true">
                ✦
              </div>
              <small>Learn. Connect. Be inspired.</small>
            </div>
            <div className="home-event-content">
              <span className="home-event-type">{nextEvent.type}</span>
              <h3>{nextEvent.title}</h3>
              <p>{nextEvent.description}</p>
              <dl className="home-event-details">
                <div>
                  <dt>Time</dt>
                  <dd>{nextEvent.time}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{nextEvent.location}</dd>
                </div>
                {nextEvent.ceCredits && (
                  <div>
                    <dt>CE credits</dt>
                    <dd>{nextEvent.ceCredits}</dd>
                  </div>
                )}
              </dl>
              <div className="home-actions">
                {nextEvent.registrationUrl && (
                  <Link
                    href={nextEvent.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-button"
                  >
                    Reserve your place <span aria-hidden="true">↗</span>
                  </Link>
                )}
                {nextEvent.slug && (
                  <Link
                    href={`/e/${nextEvent.slug}`}
                    className="home-text-link"
                  >
                    Event details <span aria-hidden="true">↗</span>
                  </Link>
                )}
                {nextEvent.learnMoreUrl && (
                  <Link
                    href={nextEvent.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-text-link"
                  >
                    View flyer <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </div>
            </div>
          </article>
        ) : (
          <div className="home-event-empty">
            <h3>More good things are on the way.</h3>
            <p>
              Explore our events and check back for the next opportunity to
              connect.
            </p>
            <Link href="/events" className="home-text-link">
              Browse events <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
