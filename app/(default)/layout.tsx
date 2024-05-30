"use client";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
