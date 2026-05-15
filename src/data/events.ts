export interface Event {
  id: number;
  title: string;
  date: string;
  dateValue: Date;
  time: string;
  location: string;
  type: string;
  description: string;
  accent: string;
  registrationUrl?: string;
  learnMoreUrl?: string;
  ceCredits?: string;
  isTBC?: boolean;
  slug: string;
  primarySpeakerName?: string;
  primarySpeakerImage?: string;
  /** Optional venue photo (e.g. exterior) shown on event cards */
  venueImage?: string;
}

export const allEvents: Event[] = [
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
    slug: 'practice-matters',
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
    slug: 'meet-oda-president',
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
    slug: 'digital-workflow',
    registrationUrl: 'https://ontariodentalassociation.formstack.com/forms/brant_business_meeting_nov_25_2025',
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
    slug: 'practical-orthodontics',
    registrationUrl: 'https://ontariodentalassociation.formstack.com/forms/brant_business_meeting_jan_27_2026',
  },
  {
    id: 5,
    title: 'RCDSO Update: Up Close and Personal with District 7 RCDSO Councillor Dr. Erin Walker',
    date: 'February 24, 2026',
    dateValue: new Date('2026-02-24'),
    time: '6:30 PM',
    location: 'Olde School Restaurant, 687 Powerline Rd, Brantford, ON',
    type: 'Lecture',
    description: 'Join Dr. Walker for an informative session and Q&A regarding updates from the College. Free for PAID Brant County/Haldimand–Norfolk Dental Society members. This meeting is open to members of Brant County Dental Society and Haldimand–Norfolk Dental Society. Sponsored by Nobel Biocare.',
    accent: 'var(--c-electric-pink)',
    slug: 'rcdso-update',
    ceCredits: 'Category 2 CE Credits',
    registrationUrl: 'https://ontariodentalassociation.formstack.com/forms/brant_business_meeting_feb_24_2026',
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
    registrationUrl: 'https://forms.gle/6d7CUtMENrTMSDaK9',
    slug: 'plp-changing-times',
    primarySpeakerName: 'Dr. Peter Hong',
    primarySpeakerImage: '/images/events/peter-hong.jpg',
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
    slug: 'oral-health-month-outreach',
    isTBC: true,
  },
  {
    id: 8,
    title: 'Dentists Unplugged:Essential Practice Pearls/Social Evening',
    date: 'May 26, 2026',
    dateValue: new Date('2026-05-26'),
    time: '6:30 PM',
    location: 'The Rope Factory',
    type: 'Networking',
    description:
      'Come for a fun social night with games, great food, drinks, and real conversations with colleagues. This is an improvised Q&A-style evening with practical pearls from four specialists: Dr. Sheikh (Oral Surgery), Dr. Calzonetti (Endo), Dr. Phuong (Ortho), and Dr. Nemeth (Perio). Bring your questions, jump into the discussion, and head home with ideas you can use in practice the very next day.',
    accent: 'var(--c-electric-pink)',
    slug: 'unplugged',
    registrationUrl: 'https://forms.gle/prSwRSGBCrTqQCX76',
    learnMoreUrl: '/images/events/May%2026th%20-%20Dentists%20Unplugged.pdf',
    venueImage: '/images/events/the-rope-factory.webp',
  },
  {
    id: 9,
    title: 'Wine Mixer at Pillitteri Estates',
    date: 'Saturday, June 6, 2026',
    dateValue: new Date('2026-06-06'),
    time: '5:30 PM',
    location: 'Pillitteri Estates Winery',
    type: 'Social Event',
    description:
      'Join us for a wine mixer at Pillitteri Estates. 5:30 PM wine tour and tasting (complimentary), followed by a 6:30 PM buffet dinner. Partners are welcome to join. Cost is $50 per person. Limited spots available.',
    accent: 'var(--c-royal-purple)',
    slug: 'winery',
    registrationUrl: 'https://forms.gle/59jbFVs4a2yWeDzN9',
    learnMoreUrl: '/plp/no_plaque_more_pinot_june_6.pdf',
    venueImage: '/images/events/pillitteriestateswinery-niagaraonthelake.png',
  },
];

