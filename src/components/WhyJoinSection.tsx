const benefits = [
  {
    title: "Keep your curiosity alive.",
    tag: "Education",
    text: "Up to 21 CE points and 3 Core Category 1 CE credits included. Access up to 5 lectures throughout the membership year, designed to keep you current and confident in your clinical practice.",
  },
  {
    title: "Turn colleagues into connections.",
    tag: "Community",
    text: "Connect with colleagues who share your commitment to excellence. Meet the ODA President, hear updates from the association, and be part of a supportive local professional community.",
  },
  {
    title: "Get more from your membership.",
    tag: "Value",
    text: "Enjoy up to 7 meals included (estimated value: $700). Our collaboration with the Haldimand–Norfolk Dental Society expands access to events and networking opportunities across the region.",
  },
  {
    title: "Make an impact close to home.",
    tag: "Purpose",
    text: "Participate in community outreach events that promote oral health awareness in Brant County. Make a meaningful difference while building your professional reputation and network.",
  },
];

export default function WhyJoinSection() {
  return (
    <section
      className="home-section home-shell home-membership"
      id="membership"
    >
      <div className="home-membership-intro home-reveal">
        <p className="home-label">03 / Membership</p>
        <h2>
          Invest in yourself.
          <br />
          <em>
            Belong to
            <br />
            something bigger.
          </em>
        </h2>
        <p>
          Good company. Meaningful learning. Real value. Discover what being a
          BCDS member can bring to your professional life.
        </p>
        <span className="home-member-seal" aria-hidden="true">
          ✦
        </span>
      </div>
      <div className="home-benefits home-reveal">
        {benefits.map((benefit, index) => (
          <details
            className="home-benefit"
            key={benefit.tag}
            open={index === 0}
          >
            <summary>
              <span className="home-benefit-index">0{index + 1}</span>
              <span>
                <small>{benefit.tag}</small>
                <h3>{benefit.title}</h3>
              </span>
              <span className="home-benefit-toggle" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{benefit.text}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
