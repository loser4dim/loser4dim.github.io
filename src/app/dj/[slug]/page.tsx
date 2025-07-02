import { notFound } from 'next/navigation';
import {AllPlayEvents} from '@/data/dj/AllEvents';

export async function generateStaticParams() {
  return AllPlayEvents.map((event) => ({
    slug: event.slug,
  }));
}

type Props = {
  params: { slug: string };
};

export default function PlayEvent({ params }: Props) {
  const event = AllPlayEvents.find((e) => e.slug === params.slug);
  if (!event) {
    notFound();
  }

  return (
    <div>
      <h1>{event.title}</h1>
      お！！
    </div>
  );
}
export const dynamic = "force-static";