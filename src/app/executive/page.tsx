import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

export default function ExecutivePage() {
  const executiveTeam = [
    {
      name: 'Dr. Jon Mahn',
      role: 'President',
      email: 'president@thebcds.com',
      image: '/images/executive/jon-manh.jpg',
      borderColor: 'var(--c-royal-purple)',
    },
    {
      name: 'Dr. Mike Veer',
      role: 'Vice-President',
      email: 'vp@thebcds.com',
      image: null,
      borderColor: 'var(--c-electric-pink)',
    },
    {
      name: 'Dr. George Chan',
      role: 'Treasurer',
      email: 'treasurer@thebcds.com',
      image: null,
      borderColor: '#8FB800',
    },
    {
      name: 'Dr. Nader Jahshan',
      role: 'Secretary',
      email: 'secretary@thebcds.com',
      image: '/images/executive/nader.jpeg',
      borderColor: 'var(--c-royal-purple)',
    },
    {
      name: 'Dr. Jennifer Gurney-Ozog',
      role: 'ODA Representative to General Council',
      email: 'odarep@thebcds.com',
      image: null,
      borderColor: 'var(--c-electric-pink)',
    },
    {
      name: 'Joe Schacher',
      role: 'Outreach Coordinator',
      email: 'outreach@thebcds.com',
      image: '/images/executive/joe-Schacher.jpg',
      borderColor: '#8FB800',
    },
    {
      name: 'Dr. Saj Arora',
      role: 'Tech + Buzz Creator',
      email: 'saj@aroradental.com',
      image: '/images/executive/saj-arora.jpg',
      borderColor: 'var(--c-royal-purple)',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end justify-start bg-gradient-to-br from-[var(--c-neon)] via-[var(--c-electric-pink)] to-[var(--c-royal-purple)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative z-10 container pb-20 pt-32 w-full">
          <div className="space-y-6">
            <div className="eyebrow text-[var(--c-ink)]">
              Leadership Team
            </div>
            <h1 className="display-hero text-[clamp(3rem,9vw,7rem)] text-[var(--c-ink)] leading-[0.9]">
              MEET THE
              <br />
              <span className="text-[var(--c-paper)]">EXECUTIVE</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--c-ink)] max-w-2xl leading-relaxed">
              Dedicated professionals leading BCDS with vision, expertise, and a commitment
              to advancing dentistry across Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team Grid */}
      <section className="pt-32 pb-24 bg-[var(--c-paper)]">
        <div className="container">
          <div className="mb-16">
            <div className="eyebrow text-[var(--c-electric-pink)] mb-4">
              Our Leaders
            </div>
            <h2 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)]">
              EXECUTIVE CONTACT LIST
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <CardContainer key={index} className="w-full h-full">
                <CardBody
                  className="group bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] border-2 w-full h-full flex flex-col"
                  borderColor={member.borderColor}
                >
                  {/* Content */}
                  <div className="pt-32 pb-8 px-10 space-y-4 flex flex-col items-center text-center flex-1">
                    {/* Circular Image */}
                    <CardItem translateZ="100px" className="group-hover:scale-110 transition-transform duration-300">
                      <div className="relative w-48 h-48 -mt-24 mb-4">
                        {member.image ? (
                          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-48 h-48 rounded-full bg-[var(--c-cloud)] border-4 border-white shadow-2xl flex items-center justify-center">
                            <span className="text-5xl font-bold text-[var(--c-mid-grey)]">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardItem>

                    <CardItem translateZ="30px">
                      <div className="space-y-2 w-full">
                        <h3 className="text-2xl font-bold text-[var(--c-ink)]">
                          {member.name}
                        </h3>
                        <div className="space-y-1">
                          <div className="eyebrow text-[var(--c-mid-grey)]">
                            {member.role}
                          </div>
                        </div>
                      </div>
                    </CardItem>

                    <CardItem translateZ="20px">
                      <div className="pt-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 text-sm text-[var(--c-steel)] hover:text-[var(--c-royal-purple)] transition-colors group"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {member.email}
                        </a>
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-br from-[var(--c-ink)] to-[var(--c-steel)]">
        <div className="container max-w-4xl">
          <div className="text-center space-y-8">
            <div className="eyebrow text-[var(--c-neon)]">
              Get in Touch
            </div>
            <h2 className="display-section text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--c-paper)]">
              CONNECT WITH
              THE TEAM
            </h2>
            <p className="text-xl text-[var(--c-cloud)] max-w-2xl mx-auto">
              Have questions? Want to get involved? Our executive team is here to help.
              Reach out and let's build something great together.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center pt-12">
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

