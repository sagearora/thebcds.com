import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const missionCards = [
  {
    icon: '🎓',
    title: 'Education',
    description: 'Cutting-edge CE courses and workshops',
    borderColor: 'var(--c-royal-purple)',
  },
  {
    icon: '🤝',
    title: 'Networking',
    description: 'Connect with peers and leaders',
    borderColor: 'var(--c-electric-pink)',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Explore new technologies and techniques',
    borderColor: '#8FB800',
  },
  {
    icon: '🌟',
    title: 'Excellence',
    description: 'Advancing standards of care',
    borderColor: 'var(--c-royal-purple)',
  },
];

export default function MissionSection() {
  return (
    <section className="py-24 bg-[var(--c-cloud)] relative overflow-hidden">
      {/* Blue Wave Decorative Element */}
      <div className="absolute top-10 right-10 opacity-10">
        <svg
          width="200"
          height="100"
          viewBox="0 0 300 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 75 Q75 15, 150 45 T300 40"
            stroke="var(--c-blue)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="eyebrow text-[var(--c-royal-purple)]">
              Our Mission
            </div>
            <h2 className="display-section text-[clamp(2rem,6vw,4rem)] text-[var(--c-ink)]">
              BUILDING A
              STRONGER
              COMMUNITY
            </h2>
            <div className="space-y-6 text-lg text-[var(--c-steel)]">
              <p>
                The BCDS is committed to fostering excellence in dentistry through continuous education,
                collaboration, and community building.
              </p>
              <p>
                We bring together dental professionals from across the region to share knowledge,
                tackle modern challenges, and shape the future of oral healthcare in Ontario.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {missionCards.map((card, index) => (
              <CardContainer key={index} className="w-full h-full">
                <CardBody
                  className="group bg-[var(--c-paper)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] border-2 w-full h-full flex flex-col"
                  borderColor={card.borderColor}
                >
                  <div className="p-8 space-y-4 flex flex-col items-center text-center flex-1">
                    <CardItem translateZ="60px" className="group-hover:scale-110 transition-transform duration-300">
                      <div className="text-5xl mb-2">{card.icon}</div>
                    </CardItem>
                    <CardItem translateZ="30px">
                      <h3 className="text-xl font-bold text-[var(--c-ink)]">{card.title}</h3>
                    </CardItem>
                    <CardItem translateZ="20px">
                      <p className="text-sm text-[var(--c-mid-grey)]">{card.description}</p>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

