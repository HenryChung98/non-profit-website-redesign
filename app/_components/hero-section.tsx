import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">Dogwood Pavilion</h1>
        <p className="text-xl">
          Stay connected. Be active. <span className="font-semibold italic">Join the fun.</span>
        </p>
        <p className="max-w-md text-muted-foreground">
          A welcoming community space for adults aged 50+.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/activities"
            className="rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/80"
          >
            View Activities
          </Link>
          <Link
            href="/community-support"
            className="rounded-lg border border-border px-4 py-2 transition-colors hover:bg-muted"
          >
            Get Support
          </Link>
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
        <Image src="/logo.webp" alt="Dogwood Pavilion" fill className="object-contain p-8" priority />
      </div>
    </section>
  );
}
