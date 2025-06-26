import { notFound } from "next/navigation";

import { PlayEvents } from "@/components/PlayEventDisplay";
import { AllPlayEvents } from "@/data/dj/AllDetails";
import { EventDetail } from "@/types/dj/EventDetail";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return AllPlayEvents.map((event) => ({
    slug: event.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const event: EventDetail | undefined = AllPlayEvents.find(
    (e) => e.slug === slug
  );

  if (!event) return notFound();

  return <PlayEvents event={event} />;
}

export const dynamic = "force-static";
