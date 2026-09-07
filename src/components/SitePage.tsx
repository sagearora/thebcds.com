import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeMotion from "@/components/HomeMotion";

export default function SitePage({ children }: { children: ReactNode }) {
  return (
    <div className="homepage site-page">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <HomeMotion />
    </div>
  );
}
