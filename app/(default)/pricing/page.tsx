import CtaPricingDark from "@/components/Pricing/Cta-Pricing";
import CtaPricing from "@/components/Pricing/CtaPricing";
import Faqs from "@/components/Pricing/Faqs";
import HeroPricing from "@/components/Pricing/HeroPricing";
import PricingFeatures from "@/components/Pricing/Pricing-Features";
import PricingTable from "@/components/Pricing/PricingTable";
import React from "react";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <>
      <HeroPricing />
      <CtaPricing />
      <PricingFeatures />
      <PricingTable />
      <Faqs />
      <CtaPricingDark />
    </>
  );
}
