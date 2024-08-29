import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Calendly from "../components/ui/calendly";
import CalendlyEmbed from "../components/ui/calendly";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        <CTA />
      </GradientWrapper>
      <GradientWrapper>
        <div className={"flex-col"}>
          <CalendlyEmbed
            url={"https://calendly.com/aron-quaplu/gmat?hide_gdpr_banner=1"}
          />
        </div>
      </GradientWrapper>

      <FooterCTA />
    </>
  );
}
