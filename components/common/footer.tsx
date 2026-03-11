import Link from "next/link";
import { SITE } from "@/lib/constants";

const quickLinks = [
  { label: "Activities", href: "/activities" },
  { label: "Community Support", href: "/community-support" },
  { label: "Facilities", href: "/facilities" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate" },
];

const legalLinks = [
  { label: "Accessibility", href: "/accessibility" },
  { label: "Privacy", href: "/privacy" },
  { label: "Code of Conduct", href: "/code-of-conduct" },
  { label: "By laws", href: "/by-laws" },
  { label: "Insurance", href: "/insurance" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="flex justify-center md:justify-center px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:gap-32">
          <div className="flex-1 space-y-3">
            <h2 className="font-bold">{SITE.name}</h2>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.city}, {SITE.address.province}, {SITE.address.postalCode}
              </p>
            </address>
            <p className="text-sm text-muted-foreground">
              City main desk for program registration:
              <br />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-foreground transition-colors">
                {SITE.phone}
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Email:{" "}
              <a href={`mailto:${SITE.email}`} className="hover:text-foreground transition-colors">
                {SITE.email}
              </a>
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href="/hours-location"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Hours &amp; Location →
              </Link>
              <Link
                href="/news"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                News &amp; Events →
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 space-y-3">
            <h2 className="font-bold">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-1 space-y-3">
            <h2 className="font-bold">Legal</h2>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-4 text-center">
        <p className="text-sm text-muted-foreground">© Dogwood Seniors Society</p>
      </div>
    </footer>
  );
};
