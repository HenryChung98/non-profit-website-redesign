import Link from "next/link";
import { ContentCard } from "@/components/content-card";

const newsItems = [
  {
    title: "Dogwood Honour Roll Nominations",
    description: "Nomination period: March 2 - March 22, 2026 by 2pm.",
    href: "/news/dogwood-honour-roll-nominations",
  },
  {
    title: "Notices for the 2026 AGM",
    description:
      "Important announcements and information for our annual general meeting.",
    href: "/news/2026-agm-notices",
  },
  {
    title: "Dogwood Pavilion Seniors' Society Agenda",
    description: "Read the latest agenda for the annual general meeting.",
    href: "/news/annual-general-meeting-agenda",
  },
];

export function LatestNewsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Latest News</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Stay up to date with announcements, meetings, and community news.
            </p>
          </div>

          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-lg font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:text-primary/80"
          >
            <span>View All News</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              {"->"}
            </span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <ContentCard
              key={item.title}
              title={item.title}
              description={item.description}
              className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              link={{
                href: item.href,
                label: "Read More",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
