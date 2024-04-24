import EventList from "@/components/eventList";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = async ({ params }: EventsPageProps) => {
  const city = params.city;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-28">
        {city === "all" && "All events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
