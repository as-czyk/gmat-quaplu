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
        <div className={"flex-col text-center"}>
          <div className={"mt-16"}>
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Lets talk about your GMAT prep
            </h2>
            <p className={"mt-4"}>
              Help us identify your needs and goals, in exchange we support you
              with{" "}
              <span className={"font-bold"}>20 gmat practice questions.</span>
            </p>
          </div>
          <CalendlyEmbed
            url={"https://calendly.com/aron-quaplu/gmat?hide_gdpr_banner=1"}
          />
        </div>
      </GradientWrapper>

      <FooterCTA />
    </>
  );
}
