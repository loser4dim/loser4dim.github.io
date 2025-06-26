"use client";

import {
  useRouter,
  usePathname,
} from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type TransitionPhase = "idle" | "entering" | "loading" | "exiting";

type PageTransitionContextType = {
  phase            : TransitionPhase;
  triggerTransition: (href: string) => void;
  completeLoading  : ()             => void;
};

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within PageTransition");
  }
  return context;
};

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router       = useRouter();
  const pathname     = usePathname();

  const [phase,             setPhase]             = useState<TransitionPhase>("idle");
  const [nextHref,          setNextHref]          = useState<string | null>(null);
  const [prevPath, setPrevPath] = useState(pathname);

  const [pendingCompletion, setPendingCompletion] = useState(false);

  const fadeTimeMilliSec = 200;
  
  const triggerTransition = (href: string) => {
  if (phase !== "idle") return;

  const currentPath = pathname;
  const nextPath = href.split("?")[0]; // クエリを除去して比較！

  if (nextPath === currentPath) return;

  setNextHref(href);
  setPrevPath(currentPath);
  setPhase("entering");
};


  useEffect(
    () => {
      if (phase === "entering" && nextHref) {
        const timeout = setTimeout(
          () => {
            router.push(nextHref);
          },
          fadeTimeMilliSec
        );
        return (
          () => clearTimeout(timeout)
        );
      }
    },
    [phase, nextHref, router]
  );

  useEffect(() => {
  if (phase !== "entering") return;

  const currentPath = pathname;

  if (currentPath !== prevPath) {
    if (pendingCompletion) {
      setPhase("exiting");
      setPendingCompletion(false);
    } else {
      setPhase("loading");
    }
  }
}, [pathname, phase, prevPath, pendingCompletion]);


  const completeLoading = () => {
    if (phase === "loading") {
      setPhase("exiting");
      setPendingCompletion(false);
    } else if (phase === "entering") {
      setPendingCompletion(true);
    }
    return;
  };

  useEffect(
    () => {
      if (phase === "exiting") {
        const timeout = setTimeout(
          () => {
            setPhase("idle");
          },
          fadeTimeMilliSec
        );
        return () => { 
          clearTimeout(timeout)
        };
      }
    },
    [phase]
  );

  return (
    <PageTransitionContext.Provider
      value={{ phase, triggerTransition, completeLoading }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};
