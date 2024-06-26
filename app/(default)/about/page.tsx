import AboutHero from "@/components/About/AboutHero";
import Clients from "@/components/About/Clients";
import Content from "@/components/About/Content";
import CtaAbout from "@/components/About/CtaAbout";
import Starts from "@/components/About/AboutStats";
import Team from "@/components/About/Team";
import TeamMembers from "@/components/About/TeamMembers";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - Business",
  description: "Generated by create next app",
};

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <AboutHero />
      <Starts />
      <Content />
      <Team />
      <TeamMembers />
      <Clients />
      <CtaAbout />
    </>
  );
}
