// "use client";

// import Link from "next/link";

// import { usePageTransition } from "@/components/transition/PageTransitionProvider";

// type Props = {
//   href      : string;
//   className?: string;
//   children  : React.ReactNode;
// };

// export default function TransitionLink({ href, className, children }: Props) {
//   const {triggerTransition} = usePageTransition();

//   const handleClick = (event: React.MouseEvent) => {
//     event.preventDefault();
//     triggerTransition(href);
//   };

//   return (
//     <Link href={href} onClick={handleClick} className={className}>
//       {children}
//     </Link>
//   );
// }