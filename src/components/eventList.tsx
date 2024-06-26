import { getEvents } from "@/lib/server-utils";
import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventList({ city, page = 1 }: EventListProps) {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex max-w-[1100px] flex-wrap justify-center gap-10 px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
