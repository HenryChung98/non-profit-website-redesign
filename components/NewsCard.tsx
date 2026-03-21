import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  buttonLabel?: string;
  buttonColor?: "blue" | "gray" | "yellow" | "green";
  className?: string;
}

const buttonColorStyles = {
  blue: "bg-[#2C6BED] hover:bg-[#2C6BED]/80 text-white",
  gray: "bg-[#55555555] hover:bg-[#55555555]/8w0 text-white",
  yellow: "bg-[#EDD62C] hover:bg-[#EDD62C]/80 text-white",
  green: "bg-[#2FA36B] hover:bg-[#2FA36B]/80 text-white",
};

export function NewsCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  buttonLabel = "Read More",
  buttonColor = "blue",
  className,
}: NewsCardProps) {
  return (
    <Card className={cn("w-full rounded-[12px] p-0 ring-0 shadow-none gap-2.5", className)}>
      <img src={imageSrc} alt={imageAlt} className="h-55 w-full rounded-t-[12px] object-cover" />

      <CardHeader className="px-0 py-0">
        <CardTitle className="font-['Inter'] text-[32px] font-bold leading-tight tracking-normal">
          {title}
        </CardTitle>

        {description && (
          <CardDescription className="text-[20px] font-light leading-snug mt-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardFooter className="px-0 pb-4 pt-0">
        <Button
          size="default"
          className={cn(
            "font-['Inter'] text-[20px] font-normal italic leading-none tracking-normal",
            buttonColorStyles[buttonColor]
          )}
        >
          {buttonLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
