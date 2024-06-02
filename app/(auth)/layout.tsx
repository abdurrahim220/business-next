"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

type Props = {};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return <div className="flex">{children}</div>;
}
