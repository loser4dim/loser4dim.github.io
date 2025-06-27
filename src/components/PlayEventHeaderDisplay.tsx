// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// import { EventDetail } from "@/types/dj/EventDetail";

// export function EventHeader({ event }: { event: EventDetail }) {
//   const [layoutType, setLayoutType] = useState<"horizontal" | "vertical" | null>(null);

//   useEffect(() => {
//     const img = new window.Image();
//     img.src = event.flyerImage!;
//     img.onload = () => {
//       const { naturalWidth: w, naturalHeight: h } = img;
//       setLayoutType(w > h ? "horizontal" : "vertical");
//     };
//   }, [event.flyerImage]);

//   if (layoutType === null) {
//     return (
//       <div className="mb-8 px-2 text-gray-400 text-center text-sm animate-pulse">
//         loading flyer info...
//       </div>
//     );
//   }

//   const InfoBlock = (
//     <div className="text-gray-200 text-sm space-y-2 max-w-full break-words flex-1">
//       <h1 className="text-2xl font-bold text-white">{event.title}</h1>
//       <p><span className="text-gray-400">on</span> {event.date}</p>

//       {event.location?.name && (
//         <p>
//           <span className="text-gray-400">in</span>{" "}
//           {event.location.url ? (
//             <a href={event.location.url} className="text-blue-400 underline" target="_blank">{event.location.name}</a>
//           ) : (
//             event.location.name
//           )}
//           {event.location.platform && (
//             <span className="text-gray-400"> – {event.location.platform}</span>
//           )}
//         </p>
//       )}

//       {event.hashtag && <p>{event.hashtag}</p>}
//       {event.noticeUrl && (
//         <p><a href={event.noticeUrl} className="text-blue-400 underline" target="_blank">Announcement</a></p>
//       )}
//       {event.organizer && (
//         <p>
//           <span className="text-gray-400">organized by</span>{" "}
//           {event.organizer.url ? (
//             <a href={event.organizer.url} className="text-blue-400 underline" target="_blank">{event.organizer.name}</a>
//           ) : (
//             event.organizer.name
//           )}
//         </p>
//       )}
//     </div>
//   );

//   return layoutType === "vertical" ? (
//     <div className="flex flex-col md:flex-row gap-6 items-start mb-8 flex-wrap">
//       {InfoBlock}
//       <div className="flex-shrink-0">
//         <Image
//           src={event.flyerImage!}
//           alt="flyer"
//           width={400}
//           height={600}
//           className="rounded-lg shadow-md object-contain"
//         />
//       </div>
//     </div>
//   ) : (
//     <div className="flex flex-col items-start gap-4 mb-8 px-2">
//       {InfoBlock}
//       <div>
//         <Image
//           src={event.flyerImage!}
//           alt="flyer"
//           width={800}
//           height={500}
//           className="rounded-lg shadow-md object-contain"
//         />
//       </div>
//     </div>
//   );
// }
