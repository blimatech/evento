import EventList from "@/components/eventList";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = async ({ params }: EventsPageProps) => {
  const city = params.city;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-28">
        {city === "all" && "All events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventList events={events} />

      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
};

export default EventsPage;
