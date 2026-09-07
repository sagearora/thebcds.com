import Link from "next/link";

export default function EventsMembershipBanner() {
  return (
    <aside
      className="events-membership"
      aria-labelledby="events-membership-title"
    >
      <div className="home-shell events-membership-layout">
        <div className="events-membership-seal" aria-hidden="true">
          <span>✦</span>
        </div>
        <div className="events-membership-copy">
          <p className="home-label">
            One membership. A whole season of connection.
          </p>
          <h2 id="events-membership-title">
            Every event. <em>Free for members.</em>
          </h2>
          <p>All events in our 2026–2027 calendar are free for BCDS members.</p>
        </div>
        <div className="events-membership-action">
          <p>Not a member?</p>
          <Link
            href="https://ontariodentalassociation.formstack.com/forms/bcds_membership_2026_2027"
            target="_blank"
            rel="noopener noreferrer"
            className="home-button"
          >
            Join today <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
