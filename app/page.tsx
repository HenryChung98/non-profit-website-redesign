import Link from "next/link";
import { createMetadata } from "@/lib/dynamic-metadata";

export const metadata = createMetadata("/");

export default function Home() {
  return (
    <div className="">
      <Link href="/zod-demo" className="text-blue-500 hover:underline">
        Go to Zod Demo
      </Link>
    </div>
  );
}
