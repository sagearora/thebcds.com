import Link from 'next/link';
import { anniversary } from '@/data/anniversary';

export default function AnniversaryBanner() {
  return (
    <section className="anniversary" aria-labelledby="anniversary-title">
      <div className="anniversary-glow" aria-hidden="true" />
      <div className="container anniversary-layout">
        <div className="anniversary-emblem">
          <svg className="anniversary-orbits" viewBox="0 0 360 360" fill="none" aria-hidden="true">
            <circle cx="180" cy="180" r="166" stroke="currentColor" strokeOpacity=".18" />
            <circle cx="180" cy="180" r="151" stroke="currentColor" strokeOpacity=".3" strokeDasharray="1 12" />
            <g className="anniversary-orbit">
              <path d="M180 14a166 166 0 0 1 166 166" stroke="currentColor" strokeWidth="2" />
              <path d="m346 170 2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5Z" fill="currentColor" />
              <circle cx="14" cy="180" r="3" fill="currentColor" />
            </g>
          </svg>
          <span className="anniversary-number">{anniversary.years}</span>
          <span className="anniversary-years">Years together</span>
        </div>
        <div className="anniversary-copy">
          <div className="anniversary-kicker">
            <span className="anniversary-star" aria-hidden="true">✦</span>
            A milestone worth celebrating
          </div>
          <h2 id="anniversary-title">A legacy of care.<br /><span>A future we share.</span></h2>
          <p>Celebrating {anniversary.years} years of the Brant County Dental Society. Generations of connection, learning, and advancing dentistry—together.</p>
          <Link href="/events" className="anniversary-link">
            Be part of our next chapter <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="anniversary-dates" aria-label={`${anniversary.founded} to ${anniversary.year}`}>
          <span>{anniversary.founded}</span><span className="anniversary-date-line" aria-hidden="true" /><span>{anniversary.year}</span>
        </div>
      </div>
    </section>
  );
}
