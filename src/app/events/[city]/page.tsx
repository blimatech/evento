import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = async ({ params }: EventsPageProps) => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin",
  );
  const events: EventoEvent[] = await response.json();
  const city = params.city;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1>
        {city === "all" && "All events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Eventlist events={events} />

      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
};

export default EventsPage;
