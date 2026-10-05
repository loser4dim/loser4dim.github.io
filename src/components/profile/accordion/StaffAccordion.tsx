import AccordionSection from "./AccordionSection";
import TransitionLink from "@/components/transition/TransitionLink";
import { StaffIndex } from "@/data/staff/EventIndex";
import type { EventYearGroup } from "@/types/AccordionIndex";

export default function StaffAccordion() {
  return (
    <section className="text-left space-y-6">
      {
        StaffIndex.map(
          (yearGroup: EventYearGroup) => (
            <AccordionSection key={yearGroup.year} category="staff" year={yearGroup.year}>
              {
                yearGroup.months.map(
                  (month) => (
                    <div key={month.month} className="mt-6">
                      <h4 className="text-base font-semibold border-l-4 border-highlight pl-2 mb-3">
                        {month.month}月
                      </h4>
                      <ul className="space-y-1">
                        {
                          month.events.map(
                            (event) => (
                              <li
                                key={event.day + event.title + event.slug}
                                className="flex group gap-3 text-sm ml-6"
                              >
                                <span className="w-14 text-right">
                                  {
                                    event.day ? `${event.day}日` : ""
                                  }
                                </span>
                                {
                                  event.slug ? (
                                    <TransitionLink
                                      href={`/staff/${event.slug}`}
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
                                      {event.title}
                                    </TransitionLink>
                                  ) : (
                                    <span>
                                      {event.title}
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
