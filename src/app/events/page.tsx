import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import EventsListsClient from './EventsListsClient';

export default function EventsPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[60vh] flex items-end justify-start bg-gradient-to-br from-[var(--c-royal-purple)] to-[var(--c-electric-pink)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 container pb-20 pt-32 w-full">
          <div className="space-y-6">
            <div className="eyebrow text-[var(--c-neon)]">BCDS Events · 2026–2027</div>
            <h1 className="display-hero text-[clamp(3rem,9vw,7rem)] text-[var(--c-paper)] leading-[0.9]">
              LEARN.
              <br />
              CONNECT.
              <br />
              <span className="text-[var(--c-neon)]">GROW.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--c-cloud)] max-w-2xl leading-relaxed">
              Connect, learn, and grow with seven meetings, 14 CE points, and seven dinners included
              in our 2026–2027 membership and event calendar.
            </p>
          </div>
        </div>
      </section>

      <EventsListsClient />

      <section className="py-32 bg-gradient-to-br from-[var(--c-ink)] to-[var(--c-royal-purple)]">
        <div className="container max-w-4xl text-center space-y-8">
          <div className="eyebrow text-[var(--c-neon)]">Stay Updated</div>
          <h2 className="display-section text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--c-paper)]">
            NEVER MISS
            <br />
            AN EVENT
          </h2>
          <p className="text-xl text-[var(--c-cloud)] max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming events, early bird registration,
            and exclusive member benefits.
          </p>
          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <Link
              href="https://brantcountydentalsociety.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] text-lg eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
            >
              Subscribe Now
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-10 py-5 rounded-[var(--radius-pill)] border-2 border-[var(--c-paper)] text-[var(--c-paper)] text-lg eyebrow hover:bg-[var(--c-paper)] hover:text-[var(--c-ink)] transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
