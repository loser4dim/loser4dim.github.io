import Image from "next/image";
import CompositionAccordion from "@/components/profile/accordion/CompositionAccordion";
import DjAccordion from "@/components/profile/accordion/DjAccordion";
import OrganizationAccordion from "@/components/profile/accordion/OrganizationAccordion";
import StaffAccordion from "@/components/profile/accordion/StaffAccordion";
import SkillIcons from "@/components/profile/SkillIcons";
import TransitionLink from "@/components/transition/TransitionLink";

export const dynamic = "force-static";

export default function Profile() {
  return (
    <main className="flex flex-col items-center px-4 py-12 gap-12">
      <TransitionLink href="/" className="w-72 h-72 relative rounded-full overflow-hidden">
        <Image
          src="/loser4dim/ArtistPicture.avif"
          alt="loser4dim Artist Picture"
          fill
          //width={1920}
          //height={1080}
          priority
          className="object-cover"
        />
      </TransitionLink>

      <section className="max-w-2xl">
        <h1 className="text-2xl text-center font-bold mb-4">
          loser4dim
        </h1>
        <div className="text-left text-base">
          <p>
            2022年3月にVR-DJとして活動開始。
            &ldquo;今日のジャンルですか？DJがチルと言えばチルですね。&rdquo; 主宰。
            個性的アーティスト集団 &ldquo;BUG COLLECTIVE&rdquo;、VJ初心者メインイベント&ldquo;VJしたいっ&rdquo;、VRダンスクラブ &ldquo;CLUB SILHOUETTE&rdquo; にレギュラーDJとして所属。
            VRChatでのクラブイベントに誘われたのがきっかけでクラブミュージックと出会い、そのときの感動を伝えていこうと自身もDJを始める。
          </p>
          <p>
            &ldquo;<span className="text-xl font-love">Happy - Funny - Crazy - with LOVE</span>&rdquo; を信条に、ジャンルを問わず自由気ままなDJを展開する。
          </p>
        </div>
      </section>

      <div className="w-3/4 max-w-2xl">
        <h2 className="text-xl font-semibold text-center">
          出演
        </h2>
        <DjAccordion />
      </div>

      <div className="w-3/4 max-w-2xl">
        <h2 className="text-xl font-semibold text-center">
          主催
        </h2>
        <OrganizationAccordion />
      </div>

      <div className="w-3/4 max-w-2xl">
        <h2 className="text-xl font-semibold text-center">
          作曲
        </h2>
        <CompositionAccordion />
      </div>

      <div className="w-3/4 max-w-2xl">
        <h2 className="text-xl font-semibold text-center">
          技術協力
        </h2>
        <StaffAccordion />
      </div>

      <SkillIcons />
    </main>
  );
}