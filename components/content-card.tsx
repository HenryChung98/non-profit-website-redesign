import Link from "next/link";
import Image from "next/image";
import {
  Card as CardBase,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type LinkVariant = "primary" | "yellow" | "green" | "gray";

const linkVariantStyles: Record<LinkVariant, string> = {
  primary: "bg-primary hover:bg-primary/80 text-primary-foreground",
  yellow: "bg-[#EDD62C] hover:bg-[#EDD62C]/80 text-white",
  green: "bg-[#2FA36B] hover:bg-[#2FA36B]/80 text-white",
  gray: "bg-[#c1c2c4] hover:bg-[#c1c2c4]/80 text-white",
};

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  link?: {
    href: string;
    label: string;
    variant?: LinkVariant;
  };
  className?: string;
}

export function Card({ title, description, imageSrc, imageAlt = "", link, className }: CardProps) {
  return (
    <CardBase className={cn("w-full rounded-lg ring-0 shadow-none gap-2.5 p-4", className)}>
      {imageSrc && (
        <div className="relative w-full aspect-video">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      )}

      <CardHeader className="px-0 py-0 gap-2 flex-1">
        <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">{title}</CardTitle>

        {description && (
          <CardDescription className="text-sm md:text-base font-light">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      {link && (
        <CardFooter className="px-0 py-0">
          <Link
            href={link.href}
            className={cn(
              "px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base italic",
              linkVariantStyles[link.variant ?? "primary"]
            )}
          >
            {link.label}
          </Link>
        </CardFooter>
      )}
    </CardBase>
  );
}
