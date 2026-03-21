import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonColor = "blue" | "gray" | "yellow" | "green";

const buttonColorStyles: Record<ButtonColor, string> = {
  blue: "bg-[#2C6BED] hover:bg-[#2C6BED]/80 text-white",
  gray: "bg-[#55555555] hover:bg-[#55555555]/80 text-white",
  yellow: "bg-[#EDD62C] hover:bg-[#EDD62C]/80 text-black",
  green: "bg-[#2FA36B] hover:bg-[#2FA36B]/80 text-white",
};

interface BaseCardProps {
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonColor?: ButtonColor;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function BaseCard({
  title,
  description,
  buttonLabel,
  buttonColor = "blue",
  imageSrc,
  imageAlt = "",
  className,
}: BaseCardProps) {
  return (
    <Card className={cn("w-full rounded-[12px] p-2.5 ring-0 shadow-none gap-7.5", className)}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-32 rounded-lg object-cover"
        />
      )}

      <CardHeader className="px-0 gap-7.5">
        <CardTitle className="font-['Inter'] text-[32px]! font-bold leading-none tracking-normal">
          {title}
        </CardTitle>

        {description && (
          <CardDescription className="text-[20px]! font-light leading-snug">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      {buttonLabel && (
        <CardFooter className="px-0">
          <Button
            className={cn(
              "font-['Inter'] text-[20px] font-normal italic leading-none tracking-normal",
              buttonColorStyles[buttonColor]
            )}
          >
            {buttonLabel}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
