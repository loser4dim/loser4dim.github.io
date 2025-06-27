// "use client";

// import {
//   useSearchParams,
//   useRouter
// } from "next/navigation";

// type Props = {
//   category: "dj" | "organize" | "composition" | "staff";
//   year    : string;
//   children: React.ReactNode;
// };

// export default function AccordionSection({category, year, children}: Props) {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const openValue = searchParams?.get("open") ?? null;
//   const openKey = `${category}-${year}`;
//   const isOpen = openValue === openKey;

//   const handleToggle = () => {
//   const safeParams = searchParams ? new URLSearchParams(searchParams.toString()) : new URLSearchParams();

//   if (isOpen) {
//     safeParams.delete("open");
//   } else {
//     safeParams.set("open", openKey);
//   }

//   router.replace(`?${safeParams.toString()}`, { scroll: false });
// };

//   return (
//     <div className="mb-4 border-b border-gray-600 pb-2">
//       <button
//         onClick={handleToggle}
//         className="text-left w-full text-xl font-bold text-gray-300 hover:text-[rgb(57,197,187)] transition"
//       >
//         {isOpen ? "↓" : "→"} {year}年
//       </button>
//       {isOpen && <div className="mt-2">{children}</div>}
//     </div>
//   );
// }
