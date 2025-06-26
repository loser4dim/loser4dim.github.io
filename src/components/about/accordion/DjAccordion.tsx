"use client";

import AccordionSection from "@/components/about/accordion/AccordionSection";
import TransitionLink from "@/components/transition/TransitionLink";
//import { useState/*, useEffect*/ } from "react";
//import { useSearchParams, /*useRouter*/ } from "next/navigation";
import { DJ_History } from "@/data/dj/index";

export default function DJAccordion() {
  //const searchParams = useSearchParams();
  //const router = useRouter();

  //const initialYear = searchParams.get("openYear");
  //const [openYear, setOpenYear] = useState<string | null>(initialYear);

  /*const toggleYear = (year: string) => {
    const newYear = openYear === year ? null : year;

    // クエリパラメータを更新するにゃ！
    const params = new URLSearchParams(searchParams);
    if (newYear) {
      params.set("openYear", newYear);
    } else {
      params.delete("openYear");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
    setOpenYear(newYear);
  };*/

  return (
    <section className="max-w-2xl w-4/5 mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">出演履歴</h2>
      {DJ_History.map((group) => (
  <AccordionSection key={group.year} category="dj" year={group.year}>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      {group.events.map((event) => (
        <li key={`${event.title}-${event.date}`}>
          {event.slug ? (
            <TransitionLink
              href={`/dj/${event.slug}`}
              className="text-blue-400 hover:underline"
            >
              {event.title}
            </TransitionLink>
          ) : (
            <span className="font-semibold">{event.title}</span>
          )}
          <span className="text-sm text-gray-400 block ml-4">
            {event.platform} / {event.date}
          </span>
        </li>
      ))}
    </ul>
  </AccordionSection>
))}
    </section>
  );
}