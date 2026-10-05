"use client";

import { faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";


type Props = {
  category: "dj" | "organization" | "composition" | "staff";
  year    : string;
  children: React.ReactNode;
};

export default function AccordionSection({ category, year, children }: Props) {
  const searchParams            = useSearchParams();
  const router                  = useRouter();
  const [hydrated, setHydrated] = useState(false);

  const openValue = searchParams?.get("open") ?? null;
  const openKey   = `${category}-${year}`;
  const isOpen    = (openValue === openKey);

  useEffect(
    () => {
      setHydrated(true);
    },
    []
  );

  const handleToggle = () => {
    const safeParams = searchParams ? new URLSearchParams(searchParams.toString()) : new URLSearchParams();
    if (isOpen) {
      safeParams.delete("open");
    } else {
      safeParams.set("open", openKey);
    }
    router.replace(`?${safeParams.toString()}`, { scroll: false });
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="border-b pb-2">
      <button
        onClick={handleToggle}
        className="w-full text-lg font-bold hover:text-highlight transition flex items-center gap-2"
      >
        {
          mounted && (
            <FontAwesomeIcon
              icon={isOpen ? faFolderOpen : faFolder}
              className="transition-transform duration-300 text-gray-300"
            />
          )
        }
        <h3>
          {year}年
        </h3>
      </button>
    
      <AnimatePresence initial={false}>
        {
          hydrated && isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden mt-2 mb-6"
            >
              {children}
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
}
