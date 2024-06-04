import HeroWolSingle from "@/components/ware/HeroWale";
import WolContent from "@/components/ware/WaleContent";
import RelatedStories from "@/components/ware/relatedstores";
import Stats from "@/components/ware/stats";

export const metadata = {
  title: "Wall of Love (Single Post) - Tidy",
  description: "Page description",
};

export default function WallOfLoveSingle() {
  return (
    <>
      <HeroWolSingle />
      <Stats />
      <WolContent />
      <RelatedStories />
    </>
  );
}
