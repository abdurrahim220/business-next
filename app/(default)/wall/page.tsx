import CtaPricingDark from "@/components/Pricing/Cta-Pricing";
import ClientsWale from "@/components/ware/Clients-wale";
import Customers from "@/components/ware/Customers";
import HeroWol from "@/components/ware/hero-wol";
import Testimonials from "@/components/ware/testominal";
import React from "react";

export const metadata = {
  title: "Wall of Love - Tidy",
  description: "Page description",
};

const Wall = () => {
  return (
    <>
      <HeroWol />
      <ClientsWale />
      <Customers />
      <Testimonials />
      <CtaPricingDark/>
    </>
  );
};

export default Wall;
