import Link from "next/link";

export default function CTASection() {
  return (
    <section className="home-cta">
      <div className="home-cta-ring" aria-hidden="true" />
      <div className="home-shell home-reveal">
        <p className="home-label">Your next chapter starts here</p>
        <h2>
          There’s a place
          <br />
          for <em>you</em> here.
        </h2>
        <p>
          Join a community that moves dentistry forward.
          <br />
          One connection at a time.
        </p>
        <div className="home-actions">
          <Link
            href="https://ontariodentalassociation.formstack.com/forms/bcds_membership_2026_2027"
            target="_blank"
            rel="noopener noreferrer"
            className="home-button home-button-gold"
          >
            Become a member <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/executive" className="home-text-link">
            Meet your executive team <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
