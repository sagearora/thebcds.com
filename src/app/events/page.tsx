import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function EventsPage() {
  const allEvents = [
    {
      id: 1,
      title: 'What Matters to YOU and your Practice?',
      date: 'September 30, 2025',
      dateValue: new Date('2025-09-30'),
      time: '6:30 PM',
      location: 'The Olde School Restaurant',
      type: 'Meeting',
      description: 'Join us for an engaging discussion about what matters most to you and your dental practice.',
      accent: 'var(--c-royal-purple)',
    },
    {
      id: 2,
      title: 'Meet the ODA President and ODA Update',
      date: 'October 30, 2025',
      dateValue: new Date('2025-10-30'),
      time: '6:30 PM',
      location: 'The Olde School Restaurant',
      type: 'Networking',
      description: 'Networking opportunity with the ODA President. Get the latest updates from the Ontario Dental Association.',
      accent: 'var(--c-electric-pink)',
    },
    {
      id: 3,
      title: 'Demystifying the Digital Workflow: From Scanning to Milling In Office',
      date: 'November 25, 2025',
      dateValue: new Date('2025-11-25'),
      time: '6:30 PM',
      location: 'The Olde School Restaurant',
      type: 'Workshop',
      description: 'Learn about the complete digital workflow from scanning to in-office milling. Discover how to streamline your practice with modern digital technologies.',
      accent: '#8FB800',
    },
    {
      id: 4,
      title: 'Practical Orthodontics with Dr. Deborah O\'Reilly',
      date: 'January 27, 2026',
      dateValue: new Date('2026-01-27'),
      time: '6:30 PM',
      location: 'The Olde School Restaurant',
      type: 'Lecture',
      description: 'Join Dr. Deborah O\'Reilly for an informative session on practical orthodontic techniques and applications.',
      accent: 'var(--c-royal-purple)',
    },
    {
      id: 5,
      title: 'Minimally Invasive Caries Management & Periodontal Disease Management',
      date: 'February 24, 2026',
      dateValue: new Date('2026-02-24'),
      time: '6:30 PM',
      location: 'The Olde School Restaurant',
      type: 'Lecture',
      description: 'Explore modern approaches to minimally invasive caries management and effective periodontal disease management strategies.',
      accent: 'var(--c-electric-pink)',
    },
    {
      id: 6,
      title: 'PLP: Changing times... Changing needs — Dr. Peter Hong',
      date: 'March 31, 2026',
      dateValue: new Date('2026-03-31'),
      time: '6:00 PM',
      location: 'The Olde School Restaurant',
      type: 'CE Event',
      description: 'Category 1 — 3 CE points. Join Dr. Peter Hong for an insightful presentation on Professional Liability Protection and adapting to changing times.',
      ceCredits: '3 CE Credits (Category 1)',
      accent: '#8FB800',
    },
    {
      id: 7,
      title: 'BCDS Community Outreach Event for Oral Health Month',
      date: 'April 2026 (Date TBC)',
      dateValue: new Date('2026-04-01'), // Use first of month for TBC dates
      time: 'TBC',
      location: 'TBC',
      type: 'Community Event',
      description: 'Join us for our community outreach initiative during Oral Health Month. Help us promote oral health awareness in our community.',
      accent: 'var(--c-royal-purple)',
      isTBC: true,
    },
    {
      id: 8,
      title: 'Essential Practice Pearls & BCDS Elections Night',
      date: 'May 26, 2026',
      dateValue: new Date('2026-05-26'),
      time: '6:30 PM',
      location: 'The Olde School Restaurant',
      type: 'Annual Meeting',
      description: 'Essential practice pearls for your dental practice, followed by BCDS elections. Don\'t miss this important annual event.',
      accent: 'var(--c-electric-pink)',
    },
  ];

  // Separate events into upcoming and past based on current date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

  const upcomingEvents = allEvents.filter(event => {
    if (event.isTBC) return true; // TBC events are always upcoming
    return event.dateValue >= today;
  }).sort((a, b) => a.dateValue.getTime() - b.dateValue.getTime());

  const pastEvents = allEvents.filter(event => {
    if (event.isTBC) return false; // TBC events are never past
    return event.dateValue < today;
  }).sort((a, b) => b.dateValue.getTime() - a.dateValue.getTime()); // Sort past events newest first

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end justify-start bg-gradient-to-br from-[var(--c-royal-purple)] to-[var(--c-electric-pink)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative z-10 container pb-20 pt-32 w-full">
          <div className="space-y-6">
            <div className="eyebrow text-[var(--c-neon)]">
              BCDS Events
            </div>
            <h1 className="display-hero text-[clamp(3rem,9vw,7rem)] text-[var(--c-paper)] leading-[0.9]">
              LEARN.
              <br />
              CONNECT.
              <br />
              <span className="text-[var(--c-neon)]">GROW.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--c-cloud)] max-w-2xl leading-relaxed">
              Join us for world-class continuing education, networking opportunities, and
              professional development events throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-[var(--c-paper)]">
        <div className="container">
          <div className="mb-16">
            <div className="eyebrow text-[var(--c-electric-pink)] mb-4">
              Upcoming Events
            </div>
            <h2 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)]">
              WHAT'S COMING UP
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="group bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Event Number/Color Block */}
                  <div
                    className="lg:w-48 p-12 flex items-center justify-center text-white"
                    style={{ backgroundColor: event.accent }}
                  >
                    <div className="display-section text-[5rem] opacity-50">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-8 lg:p-12">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--c-cloud)] text-xs eyebrow">
                          {event.type}
                        </div>
                        <h3 className="text-3xl font-bold text-[var(--c-ink)]">
                          {event.title}
                        </h3>
                        <button
                          className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
                        >
                          Register Now
                        </button>
                      </div>

                      <p className="text-base text-[var(--c-steel)] leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                        <div className="space-y-1">
                          <div className="eyebrow text-[var(--c-mid-grey)]">Date</div>
                          <div className="text-sm font-medium text-[var(--c-ink)]">{event.date}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="eyebrow text-[var(--c-mid-grey)]">Time</div>
                          <div className="text-sm font-medium text-[var(--c-ink)]">{event.time}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="eyebrow text-[var(--c-mid-grey)]">Location</div>
                          <div className="text-sm font-medium text-[var(--c-ink)]">{event.location}</div>
                        </div>
                        {event.ceCredits && (
                          <div className="space-y-1">
                            <div className="eyebrow text-[var(--c-mid-grey)]">Credits</div>
                            <div className="text-sm font-medium text-[var(--c-ink)]">{event.ceCredits}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-24 bg-[var(--c-cloud)]">
          <div className="container">
            <div className="mb-16">
              <div className="eyebrow text-[var(--c-royal-purple)] mb-4">
                Past Events
              </div>
              <h2 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)]">
                RECENT HIGHLIGHTS
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all overflow-hidden opacity-75"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Event Number/Color Block */}
                    <div
                      className="lg:w-48 p-12 flex items-center justify-center text-white"
                      style={{ backgroundColor: event.accent }}
                    >
                      <div className="display-section text-[5rem] opacity-30">
                        {String(pastEvents.length - index).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 p-8 lg:p-12">
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="space-y-2">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--c-cloud)] text-xs eyebrow">
                              {event.type}
                            </div>
                            <h3 className="text-3xl font-bold text-[var(--c-ink)]">
                              {event.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-base text-[var(--c-steel)] leading-relaxed">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                          <div className="space-y-1">
                            <div className="eyebrow text-[var(--c-mid-grey)]">Date</div>
                            <div className="text-sm font-medium text-[var(--c-ink)]">{event.date}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="eyebrow text-[var(--c-mid-grey)]">Time</div>
                            <div className="text-sm font-medium text-[var(--c-ink)]">{event.time}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="eyebrow text-[var(--c-mid-grey)]">Location</div>
                            <div className="text-sm font-medium text-[var(--c-ink)]">{event.location}</div>
                          </div>
                          {event.ceCredits && (
                            <div className="space-y-1">
                              <div className="eyebrow text-[var(--c-mid-grey)]">Credits</div>
                              <div className="text-sm font-medium text-[var(--c-ink)]">{event.ceCredits}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className={`py-24 ${pastEvents.length > 0 ? 'bg-[var(--c-paper)]' : 'bg-[var(--c-cloud)]'}`}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="display-section text-[clamp(3rem,7vw,5rem)] text-[var(--c-royal-purple)]">
                {upcomingEvents.length}
              </div>
              <div className="eyebrow text-[var(--c-mid-grey)]">
                UPCOMING EVENTS
              </div>
              <p className="text-sm text-[var(--c-steel)]">
                Scheduled for 2025-2026
              </p>
            </div>
            <div className="space-y-4">
              <div className="display-section text-[clamp(3rem,7vw,5rem)] text-[var(--c-electric-pink)]">
                8
              </div>
              <div className="eyebrow text-[var(--c-mid-grey)]">
                EVENTS YEARLY
              </div>
              <p className="text-sm text-[var(--c-steel)]">
                Educational sessions and networking
              </p>
            </div>
            <div className="space-y-4">
              <div className="display-section text-[clamp(3rem,7vw,5rem)]" style={{ color: '#8FB800' }}>
                3+
              </div>
              <div className="eyebrow text-[var(--c-mid-grey)]">
                CE CREDITS
              </div>
              <p className="text-sm text-[var(--c-steel)]">
                Available per event
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[var(--c-ink)] to-[var(--c-royal-purple)]">
        <div className="container max-w-4xl text-center space-y-8">
          <div className="eyebrow text-[var(--c-neon)]">
            Stay Updated
          </div>
          <h2 className="display-section text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--c-paper)]">
            NEVER MISS
            AN EVENT
          </h2>
          <p className="text-xl text-[var(--c-cloud)] max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming events, early bird
            registration, and exclusive member benefits.
          </p>
          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <button
              className="inline-flex items-center justify-center px-10 py-5 rounded-[var(--radius-pill)] bg-[var(--c-neon)] text-[var(--c-ink)] text-lg eyebrow hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
            >
              Subscribe Now
            </button>
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

