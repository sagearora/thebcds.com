import SitePage from "@/components/SitePage";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import EventsListsClient from "./EventsListsClient";
import EventsMembershipBanner from "@/components/EventsMembershipBanner";

export default function EventsPage() {
  return (
    <SitePage>
      <PageHero
        label="The BCDS calendar · 2026–2027"
        title={
          <>
            Make connections.
            <br />
            <em>Keep growing.</em>
          </>
        }
        description="Seven meetings. Fourteen CE points. Seven dinners. A season of fresh perspectives and familiar faces, all included in your 2026–2027 membership."
      >
        <Link href="#calendar" className="home-button home-button-gold">
          Explore the calendar <span aria-hidden="true">↓</span>
        </Link>
      </PageHero>
      <EventsMembershipBanner />
      <EventsListsClient />
      <section className="home-cta">
        <div className="home-cta-ring" aria-hidden="true" />
        <div className="home-shell home-reveal">
          <p className="home-label">Stay in the loop</p>
          <h2>
            Good things.
            <br />
            <em>In your inbox.</em>
          </h2>
          <p>
            Upcoming events, registration updates, and news from your community.
          </p>
          <div className="home-actions">
            <Link
              href="https://brantcountydentalsociety.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-button home-button-gold"
            >
              Subscribe to our newsletter <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
