// "use client";

// import Link from "next/link";

// import AccordionSection from "@/components/about/accordion/AccordionSection";
// import {
//   organizeHistory
// } from "@/data/organize/HistoryIndex";

// export default function OrganizeAccordion() {
//   return (
//     <section className="max-w-2xl w-4/5 mx-auto">
//       <h2 className="text-2xl font-semibold mb-4 text-center">
//         主催履歴
//       </h2>
//       <div className="space-y-4">
//         {
//           organizeHistory.map(
//             (group) => (
//               <AccordionSection key={group.year} category="organize" year={group.year}>
//                 <div className="space-y-4">
//                   {
//                     group.months.map(
//                       (monthGroup) => (
//                         <div key={monthGroup.month} className="flex items-start gap-4">
//                           <div className="w-16 shrink-0 text-lg font-semibold">
//                             {parseInt(monthGroup.month, 10)}月
//                           </div>
//                           <div className="flex flex-col gap-3">
//                             {
//                               monthGroup.events.map(
//                                 (event) => {
//                                   const date = new Date(
//                                     `${group.year}-${monthGroup.month}-${event.day}`
//                                   );
//                                   const formattedDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
//                                   return (
//                                     <div key={`${event.title}-${event.day}`}>
//                                       {
//                                         event.slug ? (
//                                           <Link
//                                             href={`/organize/${event.slug}`}
//                                             className="relative font-semibold after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#39C5BB] after:transition-all after:duration-300 hover:after:w-full"
//                                           >
//                                             {event.title}
//                                           </Link>
//                                         ) : (
//                                           <span className="font-semibold">
//                                             {event.title}
//                                           </span>
//                                         )
//                                       }
//                                       <div className="text-sm text-neutral-400 ml-1">
//                                         {formattedDate}
//                                       </div>
//                                     </div>
//                                   );
//                                 }
//                               )
//                             }
//                           </div>
//                         </div>
//                       )
//                     )
//                   }
//                 </div>
//               </AccordionSection>
//             )
//           )
//         }
//       </div>
//     </section>
//   );
// }
