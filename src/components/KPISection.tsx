import { anniversary } from "@/data/anniversary";

export default function KPISection() {
  return (
    <section className="home-stats" aria-label="Our community in numbers">
      <div className="home-shell home-stats-grid">
        <p>
          A long history.
          <br />
          <em>A living community.</em>
        </p>
        <div>
          <strong>
            {anniversary.years}
            <span> years</span>
          </strong>
          <p>Of connection & progress</p>
        </div>
        <div>
          <strong>
            44<span>+</span>
          </strong>
          <p>Dentists across our region</p>
        </div>
        <div>
          <strong>8</strong>
          <p>Events to connect each year</p>
        </div>
      </div>
    </section>
  );
}
