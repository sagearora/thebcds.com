import Link from "next/link";
import Image from "next/image";
import type { Event } from "@/data/events";

export default function EventCard({
  event,
  past = false,
}: {
  event: Event;
  past?: boolean;
}) {
  // Calendar labels use the authored date; older dateValue entries are UTC midnight.
  const displayDate = event.isTBC ? event.dateValue : new Date(event.date);

  return (
    <article
      className={`home-event-card site-event-card ${past ? "site-event-past" : ""}`}
    >
      <div className="home-event-date">
        <span className="home-label">
          {past ? "From our calendar" : "Save the date"}
        </span>
        <strong>{event.isTBC ? "TBC" : displayDate.getDate()}</strong>
        <span>
          {displayDate.toLocaleDateString("en-CA", {
            month: "long",
            ...(event.isTBC ? { timeZone: "UTC" } : {}),
            year: "numeric",
          })}
        </span>
        <div className="home-event-date-art" aria-hidden="true">
          ✦
        </div>
        <small>{event.type}</small>
      </div>
      <div className="home-event-content">
        <span className="home-event-type">{event.type}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        {(event.venueImage || event.primarySpeakerImage) && (
          <div className="site-event-media">
            {event.primarySpeakerImage && event.primarySpeakerName && (
              <div>
                <Image
                  src={event.primarySpeakerImage}
                  alt={event.primarySpeakerName}
                  width={64}
                  height={64}
                  className="site-speaker-thumb"
                />
                <span>{event.primarySpeakerName}</span>
              </div>
            )}
            {event.venueImage && (
              <Image
                src={event.venueImage}
                alt={event.location}
                width={140}
                height={80}
                className="site-venue-thumb"
              />
            )}
          </div>
        )}
        <dl className="home-event-details">
          <div>
            <dt>Time</dt>
            <dd>{event.time}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{event.location}</dd>
          </div>
          {event.ceCredits && (
            <div>
              <dt>CE credits</dt>
              <dd>{event.ceCredits}</dd>
            </div>
          )}
        </dl>
        <div className="home-actions">
          {!past && event.registrationUrl && (
            <Link
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="home-button"
            >
              Reserve your place <span aria-hidden="true">↗</span>
            </Link>
          )}
          {event.slug && (
            <Link
              href={
                event.slug === "plp-changing-times"
                  ? "/events/plp-changing-times"
                  : `/e/${event.slug}`
              }
              className="home-text-link"
            >
              Event details <span aria-hidden="true">↗</span>
            </Link>
          )}
          {event.learnMoreUrl && (
            <Link
              href={event.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="home-text-link"
            >
              View flyer <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
