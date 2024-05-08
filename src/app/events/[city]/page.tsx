import EventList from "@/components/eventList";
import H1 from "../../../components/h1";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { z } from "zod";

type PropsType = {
  params: {
    city: string;
  };
};

type EventsPageProps = PropsType & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: PropsType): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

const EventsPage = async ({ params, searchParams }: EventsPageProps) => {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-28">
        {city === "all" && "All events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
