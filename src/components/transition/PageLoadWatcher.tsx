// "use client";

// import { useEffect }         from "react";

// import { usePageTransition } from "./PageTransitionProvider";

// export const PageLoadWatcher = () => {
//   const { completeLoading } = usePageTransition();

//   useEffect(
//     () => {
//       const onLoad = () => {
//         completeLoading();
//       };
//       if (document.readyState === "complete") {
//         onLoad();
//       } else {
//         window.addEventListener("load", onLoad);
//       }
//       return () => {
//         window.removeEventListener("load", onLoad);
//       };
//     },
//     [completeLoading]
//   );

//   return null;
// };
