import EventList from "@/components/eventList";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";

type PropsType = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: PropsType): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All events" : `Events in ${capitalize(city)}`,
  };
}

const EventsPage = async ({ params }: PropsType) => {
  const city = params.city;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-28">
        {city === "all" && "All events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
