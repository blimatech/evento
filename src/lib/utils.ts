import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(s: string) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: {
        equals: capitalize(city),
      },
    },
  });
  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  return event;
}
