
import { EventHeader } from "@/components/PlayEventHeaderDisplay";
import { EventDetail } from "@/types/dj/EventDetail";

export function PlayEvents({ event }: { event: EventDetail }) {
  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto">
      {/* タイトル・日付・会場 */}
      <EventHeader event={event} />

      {/* タイムテーブル */}
      {event.timetable && event.timetable.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">Timetable</h2>

          {(() => {
            const allVJs = event.timetable.map((slot) => slot.vj).filter(Boolean);
            const showVJColumn = allVJs.length > 0;

            const rows = [];
            //let lastVJ: string | undefined = undefined;
            //let vjRowSpan = 1;

            for (let i = 0; i < event.timetable.length; i++) {
              const slot = event.timetable[i];
              //const nextSlot = event.timetable[i + 1];
              //const isSameVJ = slot.vj && nextSlot?.vj === slot.vj;
              //const renderVJCell = slot.vj && (!isSameVJ || i === event.timetable.length - 1);

              rows.push(
                <tr key={i} className="text-gray-100 hover:bg-gray-700 transition border-b border-gray-600">
                  <td className="px-4 py-2 border-r border-dashed border-gray-600">{slot.time}</td>
                  <td className="px-4 py-2 border-r border-dashed border-gray-600">
                    {slot.djUrl ? (
                      <a href={slot.djUrl} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                        {slot.dj}
                      </a>
                    ) : (
                      slot.dj
                    )}
                  </td>
                  {showVJColumn &&
                    (slot.vj &&
                    (i === 0 || slot.vj !== event.timetable[i - 1]?.vj) ? (
                      <td
                        className="px-4 py-2 border-r border-dashed border-gray-600"
                        rowSpan={(() => {
                          let span = 1;
                          for (let j = i + 1; j < event.timetable.length; j++) {
                            if (event.timetable[j].vj === slot.vj) {
                              span++;
                            } else {
                              break;
                            }
                          }
                          return span;
                        })()}
                      >
                        {slot.vjUrl ? (
                          <a href={slot.vjUrl} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                            {slot.vj}
                          </a>
                        ) : (
                          slot.vj
                        )}
                      </td>
                    ) : null)}
                </tr>
              );
            }

            return (
              <table className="w-full table-auto bg-gray-800 rounded-lg overflow-hidden mb-8">
                <thead className="bg-gray-700 text-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left">Time</th>
                    <th className="px-4 py-2 text-left">DJ</th>
                    {showVJColumn && <th className="px-4 py-2 text-left">VJ</th>}
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            );
          })()}
        </section>
      )}


      {/* セットリスト */}
      {event.setlist && event.setlist.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-center mb-2 text-white">Setlist</h2>

          {event.mix && (
            <section className="w-full">
              <div className="w-full">
                {event.mix.type === "mixcloud" && (
                  <iframe
                    title="MixCloudPlayer"
                    width="100%"
                    height="120"
                    src={`${event.mix.embedUrl}&hide_cover=1&light=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    className="rounded-md"
                  />
                )}

                {event.mix.type === "soundcloud" && (
                  <iframe
                    title="SoundCLoudPlayer"
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={event.mix.embedUrl}
                    className="rounded-md"
                  />
                )}

                {event.mix.type === "youtube" && (
                  <iframe
                    width="100%"
                    height="315"
                    src={event.mix.embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-md"
                  />
                )}
              </div>
              <div className="mt-4" />
            </section>
          )}

          <table className="w-full table-auto bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th className="px-4 py-2 text-right">#</th>
                <th className="px-4 py-2 text-left">Artist</th>
                <th className="px-4 py-2 text-left">Track</th>
                <th className="px-4 py-2 text-left">Link</th>
              </tr>
            </thead>
            <tbody>
              {event.setlist.map((track, index) => (
                <tr key={index} className="text-gray-100 hover:bg-gray-700 transition">
                  <td className="px-4 py-2 text-right border-r border-dashed border-gray-600">{track.index}</td>
                  <td className="px-4 py-2 border-r border-dashed border-gray-600">{track.artist}</td>
                  <td className="px-4 py-2 border-r border-dashed border-gray-600">{track.track}</td>
                  <td className="px-4 py-2">
                    {track.url ? (
                      <a
                        href={track.url}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

    </div>
  );
}
