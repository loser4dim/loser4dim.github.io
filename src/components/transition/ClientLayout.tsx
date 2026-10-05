"use client";

import Mask from "@/components/transition/Mask";
import { PageLoadWatcher } from "@/components/transition/PageLoadWatcher";
import { PageTransitionProvider } from "@/components/transition/PageTransitionProvider";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PageTransitionProvider>
      <PageLoadWatcher />
      <Mask />
      {children}
    </PageTransitionProvider>
  );
}
