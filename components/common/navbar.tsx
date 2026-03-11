"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const navItems = [
  { label: "Activities", href: "/activities" },
  { label: "Community Support", href: "/community-support" },
  { label: "Facilities", href: "/facilities" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "About", href: "/about" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 w-full border-b border-border bg-background/90">
      <div className="mx-auto flex h-16 max-w-7xl md:min-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src={SITE.image} alt={SITE.name + " logo"} width={50} height={50} />
          <span className="font-bold">{SITE.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/donate">Donate</Link>
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md cursor-pointer hover:text-muted-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-96 border-t border-border" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 bg-background">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-3 hover:text-muted-foreground hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div>
            <Button asChild className="w-full">
              <Link href="/donate" onClick={() => setMobileOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
