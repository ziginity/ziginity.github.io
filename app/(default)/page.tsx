export const metadata = {
  title: "Independent games, made simple",
  alternates: { canonical: "/" },
  description:
    "Ziginity is a small independent game studio. We build thoughtful, focused games around one idea: keep it simple, make it fun.",
};

import Hero from "@/components/hero-home";
import Games from "@/components/games";

export default function Home() {
  return (
    <>
      <Hero />
      <Games />
    </>
  );
}
