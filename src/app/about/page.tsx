// import Image from "next/image";
// import { Suspense } from "react";

// import { CompositionAccordion } from "@/components/about/accordion/CompositionAccordion";
// import DJ_Accordion from "@/components/about/accordion/DjAccordion";
// import OrganizeAccordion from "@/components/about/accordion/OrganizeAccordion";
// import StaffAccordion from "@/components/about/accordion/StaffAccordion";
// import SkillIcons from "@/components/about/SkillIcons";
// import TransitionLink from "@/components/transition/TransitionLink";
// import { compositionHistory } from "@/data/CompositionHistory";






// export default function About() {
  

//   return (
//     <main className="flex flex-col items-center px-4 py-12 gap-12">
//       <TransitionLink href="/" className="w-64 h-64 relative rounded-full overflow-hidden">
//       <Image
//           src="/loser4dim/ArtistPicture.webp"
//           alt="ArtistPicture"
//           fill
//           className="object-cover"
//           priority
//         />
//       </TransitionLink>

//       <section className="text-center max-w-2xl">
//         <h1 className="text-3xl font-bold mb-4">
//           loser4dim
//         </h1>
//         <div className="text-lg text-left">
//           <p>
//             2022年3月にVR-DJとして活動開始．
//             &quot;今日のジャンルですか？DJがチルと言えばチルですね。&quot; 主宰．
//             個性的アーティスト集団 &quot;BUG COLLECTIVE&quot;，VJ初心者メインイベント&quot;VJしたいっ&quot;，ダンスクラブ &quot;CLUB SILHOUETTE&quot; にレギュラーDJとして所属．
//             VRChatでのクラブイベントに誘われたのがきっかけでクラブミュージックと出会い，そのときの感動を伝えていこうと自身もDJを始める．
//           </p>
//           <p>
//             &quot; 𝓗𝓪𝓹𝓹𝔂 - 𝓕𝓾𝓷𝓷𝔂 - 𝓒𝓻𝓪𝔃𝔂 - 𝔀𝓲𝓽𝓱 𝓛𝓞𝓥𝓔 &quot; を信条に，ジャンルを問わず自由気ままなDJを展開する．
//           </p>
//         </div>
//       </section>

//       <Suspense fallback={<p>読み込み中にゃ……🐾</p>}>
//         <DJ_Accordion />
//       </Suspense>
      

//       <Suspense fallback={<p>読み込み中にゃ……🐾</p>}>
//   <OrganizeAccordion />
// </Suspense>

//       <section className="max-w-2xl w-4/5 mx-auto">
//         <h2 className="text-2xl font-semibold mb-4 text-center">
//           作曲参加履歴
//         </h2>
//         {compositionHistory.map((group) => (
//           <Suspense key={group.year} fallback={<p>読み込み中にゃ……🐾</p>}>
//           <CompositionAccordion yearGroup={group} />
//           </Suspense>
//         ))}
//       </section>

// <Suspense fallback={<p>読み込み中にゃ……🐾</p>}>
//       <StaffAccordion />
//       </Suspense>
//       <SkillIcons />
//     </main>
//   );
// }
// export const dynamic = "force-static";