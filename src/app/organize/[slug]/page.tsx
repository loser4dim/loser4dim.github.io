// import { notFound } from "next/navigation";

// import { OrganizeEventDisplay } from "@/components/organize/OrganizeEventDisplay";
// import { allOrganizeEvents } from "@/data/organize/AllDetails";
// import { OrganizeEventDetail } from "@/types/organize/EventDetail"; 

// type Props = {
//   params: {
//     slug: string;
//   };
// };

// export async function generateStaticParams() {
//   return allOrganizeEvents.map((event) => ({
//     slug: event.slug,
//   }));
// }

// export default async function Page({ params }: Props) {
//   const { slug } = await params;

//   const event: OrganizeEventDetail | undefined = allOrganizeEvents.find(
//     (e) => e.slug === slug
//   );

//   if (!event) return notFound();

//   return <OrganizeEventDisplay event={event} />;
// }
// export const dynamic = "force-static";