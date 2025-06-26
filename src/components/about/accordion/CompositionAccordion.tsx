// CompositionAccordion.tsx
"use client";

import Link from "next/link";

import AccordionSection from "@/components/about/accordion/AccordionSection";

type Work = {
  title: string;
  url: string;
  label: string;
  released: string;
};

type YearGroup = {
  year: string;
  works: Work[];
};

export function CompositionAccordion({ yearGroup }: { yearGroup: YearGroup }) {
  return (
    <AccordionSection category="composition" year={yearGroup.year}>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {yearGroup.works.map((work) => (
          <li key={work.title}>
            <Link
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              {work.title}
            </Link>
            <span className="text-sm text-gray-400 block ml-4">
              {work.label} / {work.released}
            </span>
          </li>
        ))}
      </ul>
    </AccordionSection>
  );
}