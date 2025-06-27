// "use client";
// import Link from "next/link";

// import { OrganizeEventHeader } from "./OrganizeEventHeader";
// import { OrganizeEventDetail } from "@/types/organize/EventDetail";

// export function OrganizeEventDisplay({ event }: { event: OrganizeEventDetail }) {
//   const toMinutes = (str: string) => {
//     const [h, m] = str.split(":" ).map(Number);
//     return h * 60 + (m || 0);
//   };

//   const pxPerMinute = 2;
//   const allEntries = event.timetables.flatMap(t => t.entries);
//   const timetableStart = Math.min(...allEntries.map(e => toMinutes(e.time.split("-")[0])));
//   const timetableEnd = Math.max(...allEntries.map(e => toMinutes(e.time.split("-")[1])));
//   const totalDuration = timetableEnd - timetableStart;
//   const timetableHeight = totalDuration * pxPerMinute;

//   const generateHourMarks = () => {
//   const startHour = Math.floor(timetableStart / 60);
//   const endHour = Math.ceil(timetableEnd / 60);
//   const marks = [];

//   const headerOffset = 48; // pt-12 の分

//   for (let h = startHour; h <= endHour; h++) {
//     const label = `${h.toString().padStart(2, "0")}:00`;
//     const top = (h * 60 - timetableStart) * pxPerMinute + headerOffset;

//     marks.push(
//       <div key={h} className="absolute left-0 right-0" style={{ top: `${top}px` }}>
//   <div className="absolute inset-x-0 border-t border-dashed border-gray-500 h-px" />
//   <div className="absolute left-0 w-16 text-right pr-2 text-sm text-gray-400 -translate-y-4 z-10">
//     {label}
//   </div>
// </div>

//     );
//   }

//   return marks;
// };




//   /*const roleColors: Record<string, string> = {
//     dj: "bg-blue-600",
//     vj: "bg-purple-600",
//     pj: "bg-amber-600",
//     lj: "bg-green-600",
//     other: "bg-gray-500",
//   };*/

//   const combinedRoleFloorColors: Record<string, string[]> = {
//   dj:    ["bg-blue-600 border-blue-300",  "bg-blue-500 border-blue-200"],
//   vj:    ["bg-green-600 border-green-300","bg-green-500 border-green-200"],
//   lj:    ["bg-pink-600 border-pink-300",  "bg-pink-500 border-pink-200"],
//   pj:    ["bg-yellow-600 border-yellow-300","bg-yellow-500 border-yellow-200"],
//   other: ["bg-purple-600 border-purple-300", "bg-purple-500 border-purple-200"]
// };


//   /*const uniqueRoles = Array.from(
//     new Set(allEntries.map((e) => e.role))
//   );*/

  

//   return (
//     <div className="p-6 space-y-8 max-w-6xl mx-auto">
//       <OrganizeEventHeader event={event} />

//       {event.timetables.length > 0 && (
//         <section>
//           <h2 className="text-2xl font-semibold text-center mb-4 text-white">Timetable</h2>
//           <div className="relative bg-gray-800 rounded-lg px-4 pt-12 pb-8 overflow-x-auto">
//             {/* 時間ラベル列 */}
//             <div className="absolute inset-0 pointer-events-none">
//               {generateHourMarks()}
//             </div>

//             <div className="ml-20 relative flex" style={{ height: `${timetableHeight}px` }}>
              
//               {event.timetables.map((floor, floorIdx) => {
//                 const floorEntries = floor.entries;
//                 const roles = Array.from(
//                   new Set(floorEntries.map((e) => e.role))
//                 );

//                 return (
//                   <div
//                     key={floor.floor}
//                     className="relative border-l-4 border-gray-600 px-2"
//                     style={{ width: `${100 / event.timetables.length}%` }}
//                   >
//                     {/* フロア名とロール名ヘッダ */}
//                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-white font-bold whitespace-nowrap">
//                       {floor.floor}
//                     </div>
//                     <div className="flex justify-around absolute -top-5 left-0 w-full">
//                       {roles.map((role) => (
//                         <div
//                           key={role}
//                           className="text-xs text-gray-300 text-center w-full"
//                           style={{ width: `${100 / roles.length}%` }}
//                         >
//                           {role.toUpperCase()}
//                         </div>
//                       ))}
//                     </div>

//                     {/* 各ブロック */}
//                     {floorEntries.map((entry, i) => {
//                       const [startStr, endStr] = entry.time.split("-");
// const start = toMinutes(startStr);
// const end = toMinutes(endStr);

// const margin = 5; // 上下合計のマージンにゃ（例：4px）

// const topOffset = (start - timetableStart) * pxPerMinute + margin / 2;
// const height = (end - start) * pxPerMinute - margin;

// const roleIndex = roles.indexOf(entry.role);
// //const color = roleColors[entry.role] || roleColors.other;
// const color =
//   (combinedRoleFloorColors[entry.role]?.[floorIdx % combinedRoleFloorColors[entry.role].length]) ??
//   combinedRoleFloorColors.other[floorIdx % combinedRoleFloorColors.other.length];

// const marginX = 20; // 左右のマージン（px）
// const totalWidth = 100; // 全体の幅（%）

// const columnWidth = totalWidth / roles.length;
// const adjustedWidth = `calc(${columnWidth}% - ${marginX * 2}px)`;
// const adjustedLeft = `calc(${columnWidth * roleIndex}% + ${marginX}px)`;

//                       return entry.url ? (
//   <a
//     key={i}
//     href={entry.url}
//     target="_blank"
//     rel="noopener noreferrer"
//     className={`absolute rounded-md px-2 py-1 text-sm text-center flex items-center justify-center border border-white transition-transform duration-200 hover:scale-105 ${color}`}
//     style={{
//       top: `${topOffset}px`,
//       height: `${height}px`,
//       width: adjustedWidth,
//       left: adjustedLeft,
//     }}
//   >
//     {entry.name}
//   </a>
// ) : (
//   <div
//     key={i}
//     className={`absolute rounded-md px-2 py-1 text-sm text-center flex items-center justify-center border border-white ${color}`}
//     style={{
//       top: `${topOffset}px`,
//       height: `${height}px`,
//       width: adjustedWidth,
//       left: adjustedLeft,
//     }}
//   >
//     {entry.name}
//   </div>
// );
//                     })}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       )}

//       <div className="pt-8 border-t border-gray-700 text-right">
//         <Link
//     href="/about"
//     className="inline-block text-sm text-gray-400 group relative"
//   >
//     <span className="transition-all duration-300">
//       ← プロフィールに戻る
//     </span>
//     <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#39C5BB] transition-all duration-300 group-hover:w-full"></span>
//   </Link>

//       </div>
//     </div>
//   );
// }
