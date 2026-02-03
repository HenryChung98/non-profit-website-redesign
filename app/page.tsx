import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="bg-background text-foreground">
        <Link href="/zod-demo" className="text-blue-500 hover:underline">Go to Zod Demo</Link>
      </div>
    </div>
  );
}
