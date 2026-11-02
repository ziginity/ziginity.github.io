export const metadata = {
  title: "Every game, one twist nobody saw coming",
  alternates: { canonical: "/" },
  description:
    "Ziginity is an independent game studio. Every game is built around one twist nobody saw coming, like a chess puzzle where every piece is a bomb.",
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
