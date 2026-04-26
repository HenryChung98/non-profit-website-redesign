import { HeroSection } from "./_components/hero-section";
import { CommunityStrip } from "./_components/community-strip";
import { HowCanWeHelpSection } from "./_components/how-can-we-help-section";
import { LatestNewsSection } from "./_components/latest-news-section";
import { LegitimacySection } from "./_components/legitimacy-section";
import { WhatWeOfferSection } from "./_components/what-we-offer-section";
import { createMetadata } from "@/lib/dynamic-metadata";

export const metadata = createMetadata("/");

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeOfferSection />
      <HowCanWeHelpSection />
      <CommunityStrip />
      <LatestNewsSection />
      <LegitimacySection />
    </>
  );
}
