import type { Event } from '@/data/events';

/** Community outreach / similar — excluded from /upcoming spotlight and main /events lists. */
export function isCommunityEvent(event: Event): boolean {
  return event.type === 'Community Event';
}

/**
 * Milliseconds for when the event begins (local browser time from date + time strings).
 * After this instant, the event is treated as past for listings and the /upcoming spotlight.
 */
export function parseEventStartMs(event: Event): number {
  if (event.isTBC) return Number.MAX_SAFE_INTEGER;
  if (event.time === 'TBC') {
    return event.dateValue.getTime();
  }
  const combined = `${event.date} ${event.time}`;
  const ms = Date.parse(combined);
  if (!Number.isNaN(ms)) return ms;
  return event.dateValue.getTime();
}

/** First non–TBC event whose start is still in the future; otherwise first TBC; otherwise null. Skips community events. */
export function getNextFeaturedEvent(events: Event[], now: Date): Event | null {
  const sorted = [...events]
    .filter((e) => !isCommunityEvent(e))
    .sort((a, b) => a.dateValue.getTime() - b.dateValue.getTime());
  for (const e of sorted) {
    if (e.isTBC) continue;
    if (now.getTime() < parseEventStartMs(e)) return e;
  }
  for (const e of sorted) {
    if (e.isTBC) return e;
  }
  return null;
}

export function getUpcomingPastEvents(events: Event[], now: Date): { upcoming: Event[]; past: Event[] } {
  const upcoming: Event[] = [];
  const past: Event[] = [];
  for (const e of events) {
    if (isCommunityEvent(e)) continue;
    if (e.isTBC) {
      upcoming.push(e);
      continue;
    }
    if (now.getTime() < parseEventStartMs(e)) upcoming.push(e);
    else past.push(e);
  }
  upcoming.sort((a, b) => a.dateValue.getTime() - b.dateValue.getTime());
  past.sort((a, b) => b.dateValue.getTime() - a.dateValue.getTime());
  return { upcoming, past };
}
