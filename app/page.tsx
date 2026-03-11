import HomeClient from "./_components/home-client";
import { createMetadata } from "@/lib/dynamic-metadata";

export const metadata = createMetadata("/");

export default function Home() {
  return <HomeClient />;
}
