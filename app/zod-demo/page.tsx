import { createMetadata } from "@/lib/dynamic-metadata";

export const metadata = createMetadata(
  "/zod-demo",
  "Zod Demo",
  "Form validation with Zod and React Hook Form"
);

import ZodDemoClient from "./zod-client";

export default function ZodDemoPage() {
  return <ZodDemoClient />;
}
