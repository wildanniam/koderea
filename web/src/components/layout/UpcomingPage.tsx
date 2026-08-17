import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function UpcomingPage({ title }: { title: string }) {
  return (
    <>
      <Header />
      <main className="flex min-h-svh items-center bg-paper px-6 pb-20 pt-32 md:px-10">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-300">
            Coming soon
          </p>
          <h1 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-foreground">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.45] text-slate-500">
            We&apos;re preparing this page. The Koderea company profile remains available while this section is developed.
          </p>
          <Link
            href="/"
            className="brand-button mt-8 inline-flex rounded-xl px-5 py-3 text-base font-medium leading-[1.2] tracking-[-0.02em] text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
          >
            Back to homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
