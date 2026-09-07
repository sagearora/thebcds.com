"use client";
import { useMemo } from "react";
import { allEvents } from "@/data/events";
import { getUpcomingPastEvents } from "@/lib/eventDates";
import { useCurrentTime } from "@/components/useCurrentTime";
import EventCard from "@/components/EventCard";

export default function EventsListsClient() {
  const now = useCurrentTime();
  const { upcoming, past } = useMemo(
    () =>
      now ? getUpcomingPastEvents(allEvents, now) : { upcoming: [], past: [] },
    [now],
  );
  return (
    <>
      <section className="home-section home-shell" id="calendar">
        <div className="home-section-heading">
          <div>
            <p className="home-label">01 / Coming together</p>
            <h2>
              Your next
              <br />
              <em>opportunity to connect.</em>
            </h2>
          </div>
          <a href="#past-events" className="home-text-link">
            Explore past events <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="site-event-list">
          {!now ? (
            <p role="status">Loading events…</p>
          ) : upcoming.length ? (
            upcoming.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="home-event-empty">
              More good things are on the way. Check back for upcoming events.
            </p>
          )}
        </div>
      </section>
      <section className="home-events" id="past-events">
        <div className="home-shell">
          <div className="home-section-heading">
            <div>
              <p className="home-label">02 / Shared experiences</p>
              <h2>
                A look back.
                <br />
                <em>Connections that last.</em>
              </h2>
            </div>
          </div>
          <div className="site-event-list">
            {past.map((event) => (
              <EventCard key={event.id} event={event} past />
            ))}
            {now && !past.length && (
              <p>Our past events will appear here as the season unfolds.</p>
            )}
          </div>
        </div>
      </section>
      <section className="home-stats">
        <div className="home-shell home-stats-grid">
          {[
            ["7", "Meetings in 2026–2027"],
            ["14", "CE points across the season"],
            ["3", "Core 1 CE points · PLP session"],
            ["7", "Dinners included"],
          ].map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
