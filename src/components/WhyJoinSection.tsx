export default function WhyJoinSection() {
  return (
    <section className="py-24 bg-[var(--c-paper)]">
      <div className="container">
        <div className="text-center space-y-6 mb-16">
          <div className="eyebrow text-[var(--c-electric-pink)]">
            Top Benefits
          </div>
          <h2 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)]">
            WHY BECOME A
            BCDS MEMBER?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Continuing Education Value */}
          <div className="bg-gradient-to-br from-[#8B5CF6] via-[var(--c-royal-purple)] to-[var(--c-electric-pink)] p-12 rounded-[var(--radius-card)] text-[var(--c-paper)] space-y-6 shadow-lg">
            <div className="display-section text-[clamp(3rem,7vw,5rem)] opacity-50">
              01
            </div>
            <h3 className="text-3xl font-bold">Continuing Education Value</h3>
            <div className="space-y-4 text-lg opacity-90">
              <p className="font-semibold">
                Up to 21 CE points and 3 Core Category 1 CE credits included.
              </p>
              <p>
                Access up to 5 cutting-edge lectures throughout the membership year, 
                designed to keep you current and confident in your clinical practice.
              </p>
            </div>
          </div>

          {/* Networking & Community */}
          <div className="bg-gradient-to-br from-[#10B981] via-[#8FB800] to-[#F59E0B] p-12 rounded-[var(--radius-card)] text-[var(--c-ink)] space-y-6 shadow-lg">
            <div className="display-section text-[clamp(3rem,7vw,5rem)] opacity-30">
              02
            </div>
            <h3 className="text-3xl font-bold">Networking & Community</h3>
            <div className="space-y-4 text-lg opacity-80">
              <p>
                Connect with colleagues who are committed to excellence in dentistry. 
                Meet the ODA President and gain updates directly from the association.
              </p>
              <p>
                Be part of a supportive, local professional community that elevates 
                your practice and career.
              </p>
            </div>
          </div>

          {/* Exclusive Member Value */}
          <div className="bg-gradient-to-br from-[var(--c-electric-pink)] via-[#EC4899] to-[#F97316] p-12 rounded-[var(--radius-card)] text-[var(--c-paper)] space-y-6 shadow-lg">
            <div className="display-section text-[clamp(3rem,7vw,5rem)] opacity-50">
              03
            </div>
            <h3 className="text-3xl font-bold">Exclusive Member Value</h3>
            <div className="space-y-4 text-lg opacity-90">
              <p className="font-semibold">
                Up to 7 meals included (est. value: $700).
              </p>
              <p>
                Membership now extends value through collaboration with the 
                Haldimand–Norfolk Dental Society, expanding access to events and 
                networking opportunities across the region.
              </p>
            </div>
          </div>

          {/* Community Impact */}
          <div className="bg-gradient-to-br from-[var(--c-blue)] via-[#3B82F6] to-[#6366F1] p-12 rounded-[var(--radius-card)] text-[var(--c-paper)] space-y-6 shadow-lg">
            <div className="display-section text-[clamp(3rem,7vw,5rem)] opacity-50">
              04
            </div>
            <h3 className="text-3xl font-bold">Community Impact</h3>
            <div className="space-y-4 text-lg opacity-90">
              <p>
                Participate in community outreach events to promote oral health 
                awareness in Brant County.
              </p>
              <p>
                Make a meaningful difference in your community while building your 
                professional reputation and network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

