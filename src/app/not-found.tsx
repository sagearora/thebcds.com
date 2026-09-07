import Link from "next/link";
import SitePage from "@/components/SitePage";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <SitePage>
      <PageHero
        label="404 / A little off course"
        title={
          <>
            Let’s find
            <br />
            <em>your way back.</em>
          </>
        }
        description="This page may have moved, or the link may be out of date. There’s still plenty to explore in our community."
      >
        <Link href="/" className="home-button home-button-gold">
          Back to home <span aria-hidden="true">↗</span>
        </Link>
        <Link href="/events" className="home-text-link">
          Explore events <span aria-hidden="true">↗</span>
        </Link>
      </PageHero>
      <section className="home-section home-shell">
        <p className="home-label">A familiar face can help</p>
        <h2 className="site-help-title">Looking for something specific?</h2>
        <Link href="/executive" className="home-text-link">
          Connect with the executive team <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </SitePage>
  );
}
