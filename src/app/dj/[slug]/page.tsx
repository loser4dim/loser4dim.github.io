import Image from "next/image";
import { notFound } from "next/navigation";
import TransitionLink from "@/components/transition/TransitionLink";
import TweetList from "@/components/twitter/TweetList"
import { allPlayEvents } from "@/data/dj/AllEvents";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return Object.keys(allPlayEvents).map((slug) => ({ slug }));
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function timeToPosition(time: string, start: string): number {
  const startMin = timeToMinutes(start);
  return (timeToMinutes(time) - startMin) * 2;
}

function timeDiffToHeight(start: string, end: string): number {
  return (timeToMinutes(end) - timeToMinutes(start)) * 2;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(params);
  const event = allPlayEvents[slug as keyof typeof allPlayEvents];
  if (!event) {
    return notFound();
  }

  const hourSteps = Array.from(
    { length: (timeToMinutes(event.time.end) - timeToMinutes(event.time.start)) / 60 + 1 },
    (_, i) => {
      const m = timeToMinutes(event.time.start) + i * 60;
      const h = String(Math.floor(m / 60)).padStart(2, "0");
      const mm = String(m % 60).padStart(2, "0");
      return `${h}:${mm}`;
    }
  );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-1">
          {event.title}
        </h1>
        <p className="text-sm">
          {`${event.date.year}年${event.date.month}月${event.date.day}日`}
          {" "} {`${event.time.start} - ${event.time.end}`}
          {event.place.name && (
            <>
              {" / "}
              {event.place.url ? (
                <a
                  href={event.place.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight"
                >
                  {event.place.name}
                </a>
              ) : (
                event.place.name
              )}
            </>
          )}
          {event.place.platform && (
            <>
              {" in "}
              {event.place.platform.name && (
                <>
                  {event.place.platform.name} {" "}
                </>
              )}
              {event.place.platform.instance && (
                <>
                  {"("}{event.place.platform.instance}{")"}
                </>
              )}
            </>
          )}
        </p>
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
        { /*Flyer*/
          event.flyer && (
            <Image
              src={event.flyer.image}
              alt="flyer"
              width={event.flyer.width}
              height={event.flyer.height}
              className="rounded object-contain w-full h-auto"
            />
          )
        }
        {
          /*Info*/
          <div className="space-y-3 text-sm">
            <h2 className="text-xl border-b">
              Infomation
            </h2>
            {
              event.organizers.length > 0 && (
                <p>
                  Organizer:{" "} {
                    event.organizers.map(
                      (o, i) => {
                        const name = o.url ? (
                          <a
                            key={i}
                            href={o.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-highlight"
                          >
                            {o.name}
                          </a>
                        ): (
                          <span key = {i}>
                            {o.name}
                          </span>
                        );
                        return (
                          <span key={i}>
                            {name}
                            {i < event.organizers.length - 1 ? ", " : ""}
                          </span>
                        );
                      }
                    )
                  }
                </p>
              )
            }
            {
              event.group?.name && 
                <p>
                  Group:{" "}
                  <a href={event.group.url} target="_blank" rel="noopener noreferrer" className="text-highlight">
                    {event.group.name}
                  </a>
                </p>
            }
            {
              event.support && (event.support.length > 0) && (
                <div>
                  <ul className="space-y-3">
                    {
                      event.support.map(
                        (s, i) => (
                          <li key={i}>
                            <span>
                              {s.role}
                            </span>
                            {": "}
                            {
                              s.staffs.map(
                                (person, j) => {
                                  const content = person.url ? (
                                    <a
                                      key={j}
                                      href={person.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-highlight"
                                    >
                                      {person.name}
                                    </a>
                                  ) : (
                                    <span key={j}>{person.name}</span>
                                  );
                                  return (
                                    <span key={j}>
                                      {content}
                                      {j < s.staffs.length - 1 ? ", " : ""}
                                    </span>
                                  );
                                }
                              )
                            }
                          </li>
                        )
                      )
                    }
                  </ul>
                </div>
              )
            }
            {
              event.announcements.length > 0 && (
                <div>
                  {
                    event.announcements.map(
                      (a, i) => (
                        <span key={i}>
                          <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-highlight">
                            {a.sns}
                          </a>
                          {
                            (i < event.announcements.length - 1) && ", "
                          }
                        </span>
                      )
                    )
                  }
                </div>
              )
            }
            {
              event.hashtags && event.hashtags.length > 0 && 
              (
                <p>
                  {
                    event.hashtags.map(
                      (tag) => `#${tag}`).join(" ")
                    }
                </p>
              )
            }
          </div>
        

        }
      </div>
        

      <div>
        {
          (event.timetable || event.timeSlot) && (
            <h2 className="text-xl text-center mb-2">
              Timetable
            </h2>
          )
        }
        {
          event.timetable ? (
            <div className="flex justify-center">
              <Image
                src={event.timetable.image}
                alt="timetable"
                width={event.timetable.width}
                height={event.timetable.height}
                className="rounded object-contain h-auto max-w-full md:max-w-2/3"
              />
            </div>
          ) : (
            event.timeSlot && (
              <div
                className="relative mt-2"
                style={{
                  height: timeDiffToHeight(event.time.start, event.time.end) + 40,
                }}
              >
                {
                  hourSteps.map(
                    (time, i) => (
                      <div key={i} className="relative" style={{ height: 120 }}>
                        <div
                          className="absolute top-0 left-0 w-[64px] text-right pr-2 text-sm"
                          style={{
                            lineHeight: "1",
                            transform : "translateY(-0.45em)",
                          }}
                        >
                          {time}
                        </div>

                      <div
                        className="absolute top-0 border-t border-highlight border-dashed"
                        style={{
                          left : "72px",
                          right: "72px"
                        }}
                      />
                      </div>
                    )
                  )
                }
                <div
                  className="absolute top-0 left-[72px] right-[72px] px-2 sm:px-4 md:px-6"
                >
                  {
                    event.timeSlot.map(
                      (slot, i) => (
                        <div
                          key={i}
                          className="absolute bg-neutral-600 rounded-md px-4 mx-auto"
                          style={{
                            top: timeToPosition(slot.start, event.time.start)+5,
                            height: timeDiffToHeight(slot.start, slot.end)-10,
                            left: "0",
                            right: "0",
                            maxWidth: "640px"
                          }}
                        >
                          <div className="flex items-center justify-center h-full text-center text-neutral-200 px-2 py-1">
                            {slot.start} – {slot.end}
                            <br />
                              {slot.dj.join(" × ")}
                            {
                              slot.vj && (slot.vj.length > 0) && (
                                <>
                                  {" / "}
                                    {slot.vj.join(" × ")}
                                </>
                              )
                            }
                          </div>
                        </div>
                      )
                    )
                  }
                </div>
              </div>
            )
          )
        }
      </div>

      {
        event.mixArchives && (event.mixArchives.length > 0) && (
          <div>
            <h2 className="text-center text-xl mb-2">
              Mix
            </h2>
            {/*<ul className="space-y-2">
              {event.mixArchives.map((mix, i) => (
                <li key={i}>
                  <a href={mix.url} className="text-highlight underline" target="_blank" rel="noopener noreferrer">
                    {mix.type.toUpperCase()}で聴く
                  </a>
                </li>
              ))}
            </ul>*/}
          </div>
        )
      }
      {
        event.setlist && (event.setlist.length > 0) && (
          <div className="overflow-x-auto mt-6">
            <h2 className="text-center text-xl mb-2">
              Setlist
            </h2>
            <table className="min-w-full text-sm border-t border-b">
              <thead>
                <tr className="bg-neutral-600 text-neutral-200 text-center">
                  <th className="px-4 py-2 border-dashed border-r">
                    #
                  </th>
                  <th className="px-4 py-2 border-dashed border-r">
                    Artist
                  </th>
                  <th className="px-4 py-2 border-dashed border-r">
                    Track
                  </th>
                  <th className="px-4 py-2 border-dashed">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  event.setlist.map(
                    (track, i) => (
                      <tr key={i} className="border-t hover:bg-neutral-700 ">
                        <td className="px-4 py-2 text-right border-dashed border-r">
                          {track.index}
                        </td>
                        <td className="px-4 py-2 border-dashed border-r">
                          {track.artist}
                        </td>
                        <td className="px-4 py-2 border-dashed border-r">
                          {track.track}
                        </td>
                        <td className="px-4 py-2 text-center">
                          {track.url && (
                            <a
                              href={track.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-highlight"
                            >
                              {"[LINK]"}
                            </a>
                          )}
                        </td>
                      </tr>
                    )
                  )
                }
              </tbody>
            </table>
          </div>
        )
      }
      {
        event.galleryTwitter && (event.galleryTwitter.length > 0) && (
          <div className="text-center">
            <h2 className="text-xl mb-2">
              Gallery
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 ml:grid-cols-3 justify-items-center">
              <TweetList ids={event.galleryTwitter} />
            </div>
          </div>
        )
      }
      <footer className="w-full mt-16 border-t text-sm px-4 py-6">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <p>
            © {new Date().getFullYear()} loser4dim
          </p>
          <TransitionLink
            href="/profile"
            className="relativeafter:block after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[1px] after:bg-highlight after:transition-all after:duration-400"
          >
            ← return
          </TransitionLink>
        </div>
      </footer>
    </div>
  );
}