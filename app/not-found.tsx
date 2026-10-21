import Link from "next/link";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="grow">
        <section className="relative mx-auto max-w-3xl px-4 pb-16 pt-36 text-center sm:px-6 md:pt-44">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[26rem] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(226,84,26,0.16),transparent_70%)]"
          />
          <p className="eyebrow justify-center">Error 404</p>
          <h1 className="mb-4 mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Page not found
          </h1>
          <p className="mb-9 text-lg text-white/60">
            This page doesn&rsquo;t exist, or it has moved.
          </p>
          <Link className="btn btn-primary" href="/">
            Back to home
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <Footer border={true} />
    </>
  );
}
