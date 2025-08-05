"use client";

import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

interface WavePlayerProps {
  src: string;
}

export default function WavePlayer({ src }: WavePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null); // ✅ これが必要にゃ！

  const waveRef = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#ccc",
      progressColor: "#fff",
      height: 80,
      barWidth: 2,
      barGap: 1,
      barAlign: "bottom",
      drawBars: true,
      backend: "MediaElement",
      mediaControls: false,
      normalize: true,
    } as any); // ← ★これで型チェックバイパスにゃ！

    ws.load(src);
    waveRef.current = ws;

    const resizeObserver = new ResizeObserver(() => {
      if ((waveRef.current as any)?.drawBuffer) {
        (waveRef.current as any).drawBuffer();
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      ws.destroy();
      resizeObserver.disconnect();
    };
  }, [src]);

  return (
    <div className="relative h-[100px] overflow-hidden rounded-xl border border-neutral-700 shadow-lg bg-neutral-900">
  <div
    ref={containerRef}
    className="absolute bottom-0 left-0 right-0 bg-neutral-800"
    style={{ height: "100px" }}
  />
</div>
  );
}
