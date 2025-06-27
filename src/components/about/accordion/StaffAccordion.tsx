// // StaffAccordion.tsx
// "use client";

// import AccordionSection from "@/components/about/accordion/AccordionSection";
// //import Link from "next/link";
// import { staffHistory } from "@/data/StaffHistory";

// type StaffEvents = {
//   title: string;
//   content: string;
//   url: string;
//   date: string;
// };

// type StaffYearGroup = {
//   year: string;
//   events: StaffEvents[];
// };

// export default function StaffAccordion() {
//   return (
//     <section className="max-w-2xl w-4/5 mx-auto">
//       <h2 className="text-2xl font-semibold mb-4 text-center">サポート履歴</h2>
//       <div className="space-y-4">
//         {staffHistory.map((group: StaffYearGroup) => (
//   <AccordionSection key={group.year} category="staff" year={group.year}>
//     <ul>
//       {group.events.map((e) => (
//         <li key={e.title}>
//           {/* ... */}
//         </li>
//       ))}
//     </ul>
//   </AccordionSection>
// ))}
//       </div>
//     </section>
//   );
// }
