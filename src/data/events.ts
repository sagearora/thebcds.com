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
  ceCredits?: string;
  isTBC?: boolean;
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

