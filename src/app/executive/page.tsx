import SitePage from "@/components/SitePage";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function ExecutivePage() {
  const executiveTeam = [
    {
      name: "Dr. Jon Mahn",
      role: "President",
      email: "president@brantcountydentalsociety.com",
      image: "/images/executive/jon-manh.jpg",
      borderColor: "var(--c-royal-purple)",
    },
    {
      name: "Dr. Mike Veer",
      role: "Vice-President",
      email: "vp@thebcds.com",
      image: "/images/executive/mike-veer.png",
      borderColor: "var(--c-electric-pink)",
    },
    {
      name: "Dr. Nader Jahshan",
      role: "Secretary",
      email: "secretary@thebcds.com",
      image: "/images/executive/nader.jpeg",
      borderColor: "var(--c-royal-purple)",
    },
    {
      name: "Dr. Jennifer Gurney-Ozog",
      role: "ODA Representative to General Council",
      email: "odarep@brantcountydentalsociety.com",
      image: "/images/executive/jennifer-gurney.jpg",
      borderColor: "var(--c-electric-pink)",
    },
    {
      name: "Joe Schacher",
      role: "Outreach Coordinator",
      email: "outreach@thebcds.com",
      image: "/images/executive/joe-Schacher.jpg",
      borderColor: "#8FB800",
    },
    {
      name: "Dr. Saj Arora",
      role: "Tech + Buzz Creator",
      email: "media@brantcountydentalsociety.com",
      image: "/images/executive/saj-arora.jpg",
      borderColor: "var(--c-royal-purple)",
    },
  ];

  return (
    <SitePage>
      <PageHero
        label="The people behind BCDS"
        title={
          <>
            Local leadership.
            <br />
            <em>Shared purpose.</em>
          </>
        }
        description="Meet the professionals giving their time, expertise, and energy to a stronger dental community."
      />
      <section className="home-section home-shell">
        <div className="home-section-heading home-reveal">
          <div>
            <p className="home-label">Your executive team</p>
            <h2>
              Good people.
              <br />
              <em>Here for you.</em>
            </h2>
          </div>
          <p>
            Have a question or an idea? Start a conversation with the people
            helping our society move forward.
          </p>
        </div>
        <div className="site-team-grid">
          {executiveTeam.map((member) => (
            <article key={member.email} className="site-person home-reveal">
              <div className="site-person-image">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="site-person-copy">
                <p className="home-label">{member.role}</p>
                <h3>{member.name}</h3>
                <a href={`mailto:${member.email}`} className="home-text-link">
                  {member.email} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="home-cta">
        <div className="home-cta-ring" aria-hidden="true" />
        <div className="home-shell">
          <p className="home-label">Let’s start a conversation</p>
          <h2>
            Your ideas.
            <br />
            <em>Our next chapter.</em>
          </h2>
          <p>
            Have questions or want to get involved? We would love to hear from
            you.
          </p>
          <div className="home-actions">
            <a
              href="mailto:hello@brantcountydentalsociety.com"
              className="home-button home-button-gold"
            >
              Say hello <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
