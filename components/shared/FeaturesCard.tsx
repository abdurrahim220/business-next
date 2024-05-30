import React, { ReactNode } from "react";

type Props = {
  dTime: number;
  title: string;
  description: string;
  icon: ReactNode;
};

export default function FeaturesCard({
  dTime,
  title,
  description,
  icon,
}: Props) {
  return (
    <div
      className="relative"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
      data-aos-delay={dTime}
    >
      <div className="mb-4 ">{icon}</div>
      <h3 className="h4 font-playfair-display mb-2">{title}</h3>
      <p className="text-lg text-slate-500">{description}</p>
    </div>
  );
}
