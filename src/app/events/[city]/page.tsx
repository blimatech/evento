import H1 from "@/components/H1";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = ({ params }: EventsPageProps) => {
  const city = params.city;
  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1>
        {city === "all" && "All events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  );
};

export default EventsPage;
