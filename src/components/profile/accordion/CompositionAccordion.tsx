import AccordionSection from "./AccordionSection";
import { CompositionIndex } from "@/data/composition/CompositionIndex";
import type { CompositionYearGroup } from "@/types/AccordionIndex";

export default function CompositionAccordion() {
  return (
    <section className="text-left space-y-6">
      {
        CompositionIndex.map(
          (yearGroup: CompositionYearGroup) => (
            <AccordionSection key={yearGroup.year} category="composition" year={yearGroup.year}>
              {
                yearGroup.months.map(
                  (month) => (
                    <div key={month.month} className="mt-6">
                      <h4 className="text-base font-semibold border-l-4 border-highlight pl-2 mb-3">
                        {month.month}月
                      </h4>
                      <ul className="space-y-1">
                        {
                          month.tracks.map(
                            (track) => (
                              <li
                                key={track.day + track.title + track.album + track.label}
                                className="flex group gap-3 text-sm ml-6"
                              >
                                <span className="w-14 text-right">
                                  {
                                    track.day ? `${track.day}日` : ""
                                  }
                                </span>
                                {
                                  track.url ? (
                                    <a
                                      key={track.title}
                                      href={track.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="
                                        text-sm
                                        relative
                                        after:block
                                        after:absolute
                                        after:bottom-0
                                        after:left-0 
                                        after:w-0
                                        group-hover:after:w-full
                                        after:h-[1px]
                                        after:bg-highlight
                                        after:transition-all
                                        after:duration-400
                                      "
                                    >
                                      {track.title} / &ldquo;{track.album}&rdquo; by &ldquo;{track.label}&rdquo;
                                    </a>
                                  ) : (
                                    <span>
                                      {track.title} in &ldquo;{track.album}&rdquo; by &ldquo;{track.label}&rdquo;
                                    </span>
                                  )
                                }
                              </li>
                            )
                          )
                        }
                      </ul>
                    </div>
                  )
                )
              }
            </AccordionSection>
          )
        )
      }
    </section>
  );
}
