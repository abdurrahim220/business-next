import Header from "@/components/ui/header";
import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      {children}
    </div>
  );
}
