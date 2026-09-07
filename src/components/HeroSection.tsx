import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="home-hero home-shell">
      <div className="home-hero-copy">
        <p className="home-label">
          <span /> Brant County Dental Society
        </p>
        <h1>
          Good dentistry.
          <br />
          Great people.
          <br />
          <em>Stronger together.</em>
        </h1>
        <p className="home-intro">
          Your local community. Your next conversation. Your opportunity to
          grow. Connecting dental professionals across Brant, Haldimand, and
          Norfolk.
        </p>
        <div className="home-actions">
          <Link href="/events" className="home-button">
            Discover our events <span aria-hidden="true">↗</span>
          </Link>
          <Link href="#membership" className="home-text-link">
            Explore membership <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <div className="home-hero-note">
          <span aria-hidden="true">✦</span> Rooted in community. Looking ahead.
        </div>
      </div>
      <div className="home-constellation" aria-hidden="true">
        <div className="home-orbit home-orbit-one" />
        <div className="home-orbit home-orbit-two" />
        <div className="home-orbit home-orbit-three" />
        <div className="home-orbit-center">
          <span>BCDS</span>
          <i>
            Our strength
            <br />
            is each other.
          </i>
          <b>EST. 1901</b>
        </div>
        <span className="home-orbit-tag tag-learn">
          ↗ <span>Keep learning</span>
        </span>
        <span className="home-orbit-tag tag-connect">
          ✦ <span>Find your people</span>
        </span>
        <span className="home-orbit-tag tag-grow">
          ◎ <span>Grow together</span>
        </span>
        <span className="home-orbit-spark">✦</span>
        <span className="home-art-caption">
          A SHARED PASSION. A LASTING CONNECTION.
        </span>
      </div>
    </section>
  );
}
