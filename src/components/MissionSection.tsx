import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Learn with purpose.",
    description:
      "Fresh perspectives, practical knowledge, and continuing education that moves your practice forward.",
    symbol: "↗",
  },
  {
    number: "02",
    title: "Connect beyond the clinic.",
    description:
      "Trade ideas, share experiences, and build relationships with people who understand your world.",
    symbol: "◎",
  },
  {
    number: "03",
    title: "Make a local difference.",
    description:
      "Support a stronger dental community and help shape the future of oral healthcare in Ontario.",
    symbol: "✦",
  },
];

export default function MissionSection() {
  return (
    <section className="home-section home-shell" id="community">
      <div className="home-section-heading home-reveal">
        <div>
          <p className="home-label">01 / Our community</p>
          <h2>
            More than a society.
            <br />
            <em>A place to belong.</em>
          </h2>
        </div>
        <div>
          <p>
            We believe the best ideas—and the strongest communities—grow when
            people come together. BCDS brings that belief to life.
          </p>
          <Link href="/executive" className="home-text-link">
            Meet the people behind BCDS <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="home-pillars">
        {pillars.map((pillar) => (
          <article className="home-pillar home-reveal" key={pillar.number}>
            <div className="home-pillar-top">
              <span>{pillar.number}</span>
              <span aria-hidden="true">{pillar.symbol}</span>
            </div>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
