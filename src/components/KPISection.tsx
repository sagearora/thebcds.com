export default function KPISection() {
  return (
    <section className="py-24 bg-[var(--c-paper)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="display-section text-[clamp(3rem,7vw,5rem)] text-[var(--c-royal-purple)]">
              85+
            </div>
            <div className="eyebrow text-[var(--c-mid-grey)]">
              MEMBERS
            </div>
            <p className="text-base text-[var(--c-steel)]">
              Dentists, hygienists, and dental professionals across Ontario
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="display-section text-[clamp(3rem,7vw,5rem)] text-[var(--c-electric-pink)]">
              25+
            </div>
            <div className="eyebrow text-[var(--c-mid-grey)]">
              YEARS
            </div>
            <p className="text-base text-[var(--c-steel)]">
              Building community and advancing dental excellence
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="display-section text-[clamp(3rem,7vw,5rem)]" style={{ color: '#8FB800' }}>
              8
            </div>
            <div className="eyebrow text-[var(--c-mid-grey)]">
              EVENTS YEARLY
            </div>
            <p className="text-base text-[var(--c-steel)]">
              Educational sessions, networking, and professional development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

