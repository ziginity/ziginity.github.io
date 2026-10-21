export const metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Chess Bang and Chess Bang: The Mystical East by Ziginity.",
  alternates: { canonical: "/term-of-use/" },
};

const H2 = "mt-10 mb-3 text-xl font-bold text-white";
const P = "mb-4 text-[15px] leading-relaxed text-white/55";
const A = "text-ember-300 underline underline-offset-2 hover:text-ember-200";

export default function TermOfUse() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-36 sm:px-6 md:pt-44">
      <p className="eyebrow">Legal</p>
      <h1 className="mb-4 mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
        Terms of Use
      </h1>
      <p className="mb-10 text-sm text-white/55">
        Version 1.0 · Effective date: September 25, 2026
      </p>

      <h2 className={H2}>1. Agreement</h2>
      <p className={P}>
        These Terms of Use govern your use of the games{" "}
        <strong>Chess Bang</strong> and{" "}
        <strong>Chess Bang: The Mystical East</strong> and this website,
        provided by Ziginity (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By
        downloading or using the game, you agree to these Terms. If you do not
        agree, please do not use the game.
      </p>

      <h2 className={H2}>2. License</h2>
      <p className={P}>
        We grant you a personal, non-exclusive, non-transferable and revocable
        license to use the game for your own personal, non-commercial
        entertainment. You may not copy, sell, rent, lease, distribute,
        sublicense, reverse engineer, decompile or modify the game, in whole or
        in part, except to the extent permitted by applicable law.
      </p>

      <h2 className={H2}>3. In-app purchases</h2>
      <p className={P}>
        The game offers in-app purchases, including consumable hint packs and a
        non-consumable &ldquo;Remove Ads&rdquo; option. Purchases are billed by
        the app store you use (Apple or Google) under their terms and payment
        policies. Refunds are handled by that store and are subject to its
        rules. Where a purchase is restorable, you can restore it using the
        option provided in the game. We may add, change or remove products and
        prices.
      </p>

      <h2 className={H2}>4. Advertising</h2>
      <p className={P}>
        Versions of the game may display ads, including rewarded video that you
        choose to watch and interstitial ads shown between levels. The
        availability, format and frequency of ads may change. Your privacy
        choices for ads are described in our{" "}
        <a className={A} href="/privacy-policy/">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className={H2}>5. Acceptable use</h2>
      <p className={P}>
        You agree not to use the game unlawfully, to interfere with its normal
        operation, or to attempt to bypass purchases, ad consent, or other
        technical measures.
      </p>

      <h2 className={H2}>6. Intellectual property</h2>
      <p className={P}>
        The game and its content, including art, audio, text and code, are owned
        by Ziginity or its licensors and are protected by intellectual property
        laws. These Terms do not grant you any ownership of that content.
      </p>

      <h2 className={H2}>7. Disclaimer</h2>
      <p className={P}>
        The game is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;,
        without warranties of any kind, whether express or implied, including
        fitness for a particular purpose and non-infringement, to the maximum
        extent permitted by law.
      </p>

      <h2 className={H2}>8. Limitation of liability</h2>
      <p className={P}>
        To the maximum extent permitted by law, we are not liable for indirect,
        incidental, special or consequential damages arising from your use of
        the game. Where liability cannot be excluded, our total liability is
        limited to the amount you paid us (if any) in the twelve months before
        the event giving rise to the claim.
      </p>

      <h2 className={H2}>9. Changes to these Terms</h2>
      <p className={P}>
        We may update these Terms from time to time. Changes are posted on this
        page with a new effective date, and continued use of the game means you
        accept them.
      </p>

      <h2 className={H2}>10. Governing law</h2>
      <p className={P}>
        These Terms are governed by the laws of the country in which Ziginity is
        established, without regard to its conflict-of-law rules, and without
        limiting any consumer protections you have where you live.
      </p>

      <h2 className={H2}>11. Contact</h2>
      <p className={P}>
        Ziginity —{" "}
        <a className={A} href="mailto:ziginity@gmail.com">
          ziginity@gmail.com
        </a>
      </p>
    </section>
  );
}
