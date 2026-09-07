"use client";
import { useMemo } from "react";
import Link from "next/link";
import SitePage from "@/components/SitePage";
import PageHero from "@/components/PageHero";
import EventCard from "@/components/EventCard";
import { useCurrentTime } from "@/components/useCurrentTime";
import { allEvents } from "@/data/events";
import { getNextFeaturedEvent } from "@/lib/eventDates";

export default function UpcomingPageClient() {
  const now = useCurrentTime();
  const event = useMemo(
    () => (now ? getNextFeaturedEvent(allEvents, now) : null),
    [now],
  );
  return (
    <SitePage>
      <PageHero
        label="Up next at BCDS"
        title={
          <>
            Your next evening.
            <br />
            <em>Well spent.</em>
          </>
        }
        description="Make time for fresh ideas, meaningful conversations, and your local dental community."
      />
      <section className="home-section home-shell">
        {!now ? (
          <p role="status">Loading your next event…</p>
        ) : event ? (
          <EventCard event={event} />
        ) : (
          <div className="home-event-empty">
            <h2>More connections are on the way.</h2>
            <p>
              There is no upcoming event scheduled at this time. Check back
              soon.
            </p>
          </div>
        )}
        <div className="home-actions">
          <Link href="/events" className="home-text-link">
            Explore the full calendar <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
