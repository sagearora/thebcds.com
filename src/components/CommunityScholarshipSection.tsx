'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  SCHOLARSHIP_DONATION_URL,
  SCHOLARSHIP_GOAL_CAD,
  SCHOLARSHIP_RAISED_CAD,
} from '@/data/scholarship';

const currency = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0,
});

function formatCad(n: number) {
  return currency.format(n);
}

/**
 * Progress bar semantics: aria-valuenow / min / max are dollars (same units).
 */
export default function CommunityScholarshipSection() {
  const pct = Math.min(
    100,
    (SCHOLARSHIP_RAISED_CAD / SCHOLARSHIP_GOAL_CAD) * 100,
  );
  const isPlaceholderDonation = SCHOLARSHIP_DONATION_URL === '#';

  return (
    <section
      id="community-scholarship"
      className="relative overflow-hidden bg-gradient-to-b from-[var(--c-cloud)] to-[var(--c-paper)] pt-28 pb-16 md:pt-32 md:pb-24"
      aria-labelledby="scholarship-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(107, 45, 255, 0.08) 0, transparent 45%), radial-gradient(circle at 80% 60%, rgba(255, 74, 183, 0.06) 0, transparent 40%)',
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <h2
            id="scholarship-heading"
            className="order-1 display-section text-[clamp(1.75rem,5vw,3rem)] text-[var(--c-ink)] leading-tight lg:col-start-1 lg:row-start-1"
          >
            <span className="block eyebrow mb-3 text-base text-[var(--c-royal-purple)]">
              Community scholarship
            </span>
            Raising the next generation of dental professionals—together
          </h2>

          <div className="order-2 flex flex-col items-center gap-4 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-self-center lg:self-center">
            <Thermometer
              raised={SCHOLARSHIP_RAISED_CAD}
              goal={SCHOLARSHIP_GOAL_CAD}
              percentFilled={pct}
            />
            <p className="max-w-sm text-center text-sm text-[var(--c-mid-grey)]">
              Includes a $3,000 grant already committed—help us reach our $7,000 goal as a
              society.
            </p>
          </div>

          <div className="order-3 space-y-6 lg:col-start-1 lg:row-start-2">
            <p className="text-lg text-[var(--c-steel)]">
              The Brant County Dental Society is about more than meetings and CE—we show up
              for our neighbours. In partnership with{' '}
              <strong className="font-semibold text-[var(--c-ink)]">
                Child and Family Services
              </strong>
              , we are pooling resources as a society to fund a scholarship for a young
              person pursuing a career in dental—whether that is hygiene, assisting,
              reception, dental school, or another path in oral health.
            </p>
            <p className="text-lg text-[var(--c-steel)]">
              Every dollar brings us closer to helping someone local take their next step.
              When our community thrives, we all do.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {isPlaceholderDonation ? (
                <span
                  className="inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-[var(--c-mid-grey)] px-8 py-4 text-[var(--c-paper)] eyebrow cursor-not-allowed opacity-90"
                  aria-disabled="true"
                  title="Donation link will be added soon"
                >
                  Contribute
                </span>
              ) : (
                <a
                  href={SCHOLARSHIP_DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-[var(--c-neon)] px-8 py-4 text-[var(--c-ink)] eyebrow transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]"
                >
                  Contribute
                </a>
              )}
              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border-2 border-[var(--c-ink)] px-8 py-4 text-[var(--c-ink)] eyebrow transition-colors hover:bg-[var(--c-ink)] hover:text-[var(--c-paper)]"
              >
                View events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Thermometer({
  raised,
  goal,
  percentFilled,
}: {
  raised: number;
  goal: number;
  percentFilled: number;
}) {
  const tickStops = [
    { label: '100%', value: 100 },
    { label: '75%', value: 75 },
    { label: '50%', value: 50 },
    { label: '25%', value: 25 },
    { label: '0%', value: 0 },
  ];

  return (
    <div
      className="flex items-center justify-center gap-5 md:gap-6"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={goal}
      aria-valuenow={raised}
      aria-label={`Scholarship fund progress: ${formatCad(raised)} of ${formatCad(goal)} raised`}
    >
      <div className="relative h-64 w-12 pr-1 text-right text-[11px] font-semibold tabular-nums tracking-wide text-[var(--c-mid-grey)]">
        {tickStops.map((tick) => (
          <span
            key={tick.value}
            className="absolute right-1 -translate-y-1/2"
            style={{ top: `${100 - tick.value}%` }}
          >
            {tick.label}
          </span>
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative h-64 w-16 overflow-hidden rounded-[999px] border border-[var(--c-steel)]/30 bg-white/55 backdrop-blur-sm shadow-[var(--shadow-card)]">
          <div className="pointer-events-none absolute inset-y-2 left-2 w-1.5 rounded-full bg-white/70" />
          <div className="absolute inset-0 px-2">
            {tickStops.map((tick) => (
              <div
                key={tick.value}
                className="absolute right-2 h-px w-3 -translate-y-1/2 bg-[var(--c-mid-grey)]/35"
                style={{ top: `${100 - tick.value}%` }}
                aria-hidden
              />
            ))}
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 origin-bottom rounded-[999px] bg-gradient-to-t from-[var(--c-royal-purple)] via-[var(--c-electric-pink)] to-[var(--c-neon)]"
            initial={{ height: '0%' }}
            animate={{ height: `${percentFilled}%` }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.45)]"
            initial={{ bottom: '0%' }}
            animate={{ bottom: `calc(${percentFilled}% - 6px)` }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          />
        </div>
      </div>

      <div className="flex min-w-[12.5rem] max-w-[13.5rem] flex-col gap-1 self-center rounded-2xl border border-[var(--c-steel)]/12 bg-white/65 px-4 py-4 text-left shadow-[var(--shadow-card)] backdrop-blur-sm">
        <span className="eyebrow text-[var(--c-royal-purple)]">Together so far</span>
        <span className="display-section text-4xl text-[var(--c-ink)] tabular-nums leading-none">
          {formatCad(raised)}
        </span>
        <span className="text-sm text-[var(--c-steel)]">
          Goal: <strong className="text-[var(--c-ink)]">{formatCad(goal)}</strong>
        </span>
        <span className="mt-1 rounded-[var(--radius-soft)] bg-[var(--c-neon)]/35 px-2 py-1 text-sm font-semibold text-[var(--c-ink)]">
          {percentFilled.toFixed(0)}% funded
        </span>
      </div>
    </div>
  );
}
