import Link from 'next/link';
import { Spotlight } from '@/components/ui/spotlight-new';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end justify-start bg-gradient-to-br from-[var(--c-steel)] to-[var(--c-ink)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Spotlight Effect */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(107, 45, 255, 0.18) 0, rgba(107, 45, 255, 0.10) 50%, rgba(107, 45, 255, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(255, 74, 183, 0.15) 0, rgba(255, 74, 183, 0.08) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(230, 255, 58, 0.12) 0, rgba(230, 255, 58, 0.06) 80%, transparent 100%)"
        translateY={-200}
        width={800}
        height={1600}
        smallWidth={300}
        duration={8}
        xOffset={150}
      />

      <div className="relative z-10 container pb-20 pt-32">
        <div className="space-y-6 max-w-4xl pb-24 md:pb-0">
          <div className="eyebrow text-[var(--c-neon)]">
            Brant County Dental Society
          </div>
          <h1 className="display-hero text-[clamp(3rem,9vw,8rem)] text-[var(--c-paper)] leading-[1.1]">
            UNITING AT THE
            <br />
            FRONTIER OF
            <br />
            <span className="text-[var(--c-neon)]">DENTISTRY</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--c-cloud)] max-w-2xl leading-relaxed">
            Growing and fostering a strong dental community. Bringing together thought leaders
            to tackle modern challenges facing dentistry across Ontario.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
            >
              View Events
            </Link>
            <Link
              href="/executive"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-pill)] border-2 border-[var(--c-paper)] text-[var(--c-paper)] eyebrow hover:bg-[var(--c-paper)] hover:text-[var(--c-ink)] transition-all"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[var(--c-cloud)] flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--c-neon)] animate-pulse" />
        </div>
      </div>
    </section>
  );
}

