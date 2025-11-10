import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[var(--c-ink)] via-[var(--c-steel)] to-[var(--c-royal-purple)] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)',
          backgroundSize: '20px 20px',
        }} />
      </div>

      <div className="relative z-10 container max-w-4xl text-center space-y-8">
        <div className="eyebrow text-[var(--c-neon)]">
          Join the Movement
        </div>
        <h2 className="display-section text-[clamp(2.5rem,6vw,5rem)] text-[var(--c-paper)]">
          BE PART OF
          SOMETHING BIGGER
        </h2>
        <p className="text-xl text-[var(--c-cloud)] max-w-2xl mx-auto">
          Connect with dental professionals who are shaping the future of dentistry in Ontario.
          Join BCDS today.
        </p>
        <div className="flex flex-wrap gap-6 justify-center pt-8">
          <Link
            href="/events"
            className="inline-flex items-center justify-center px-10 py-5 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] text-lg eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
          >
            Upcoming Events
          </Link>
          <Link
            href="/executive"
            className="inline-flex items-center justify-center px-10 py-5 rounded-[var(--radius-pill)] border-2 border-[var(--c-paper)] text-[var(--c-paper)] text-lg eyebrow hover:bg-[var(--c-paper)] hover:text-[var(--c-ink)] transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

