import HeroSupport from "@/components/Support/HeroSupport";
import SupportContent from "@/components/Support/SupportContent";

export const metadata = {
  title: "Business - Support",
  description: "Page description",
};

export default function Support() {
  return (
    <>
      <HeroSupport />
      <SupportContent />
    </>
  );
}
