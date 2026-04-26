import { ContentCard } from "@/components/content-card";

const helpOptions = [
  {
    title: "Get Support",
    description: "Looking for help or resources?",
    href: "/community-support",
    label: "Get Support",
    variant: "primary" as const,
  },
  {
    title: "Volunteer",
    description: "Share your time and skills.",
    href: "/get-involved",
    label: "Volunteer",
    variant: "yellow" as const,
  },
  {
    title: "Donate",
    description: "Support programs that help seniors stay connected.",
    href: "/donate",
    label: "Donate",
    variant: "green" as const,
  },
];

export function HowCanWeHelpSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold">How can we help today?</h2>
          <p className="mt-3 text-muted-foreground">
            Find support, share your time, or contribute to programs that keep
            seniors connected.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {helpOptions.map((option) => (
            <ContentCard
              key={option.title}
              title={option.title}
              description={option.description}
              className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              link={{
                href: option.href,
                label: option.label,
                variant: option.variant,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
