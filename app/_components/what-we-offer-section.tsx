import { ContentCard } from "@/components/content-card";

const offers = [
  {
    title: "Activities",
    description: "Activities at Dogwood Pavilion",
    href: "/activities",
    label: "View Activities",
  },
  {
    title: "Community Support",
    description: "Access support services and resources for seniors.",
    href: "/community-support",
    label: "Get Support",
  },
  {
    title: "Facilities & Amenities",
    description: "Enjoy our cafe, library, and welcoming spaces.",
    href: "/facilities",
    label: "View Facilities",
  },
  {
    title: "Get Involved",
    description: "Volunteer your time and support our community.",
    href: "/get-involved",
    label: "Get Involved",
  },
];

export function WhatWeOfferSection() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold">What We Offer</h2>
          <p className="mt-3 text-muted-foreground">
            Explore activities, services, and welcoming spaces at Dogwood Pavilion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <ContentCard
              key={offer.title}
              title={offer.title}
              description={offer.description}
              className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              link={{
                href: offer.href,
                label: offer.label,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
