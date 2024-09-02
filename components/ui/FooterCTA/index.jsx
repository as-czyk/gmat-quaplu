import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-4xl font-semibold sm:text-4xl">
          Start practicing with AI-generated GMAT questions today
        </h2>
        <p className="text-xl mt-3 text-gray-600">
          Sign up to our waitlist or complete our quick survey and get{" "}
          <span className="font-bold">
            20 GMAT exercises with solutions for free!
          </span>
        </p>
        <div className={"flex row gap-4 justify-center items-center"}>
          <NavLink
            href="/get-started"
            className="mt-4 inline-block font-medium text-sm text-white bg-primary-600 hover:bg-primary-800"
          >
            Start practicing today
          </NavLink>
          <NavLink
            target="_blank"
            href="https://form.typeform.com/to/TFlwT9Fc?utm_source=lp"
            className="mt-4 inline-block font-medium text-sm text-gray-700 border hover:bg-gray-50"
          >
            Tell us more
          </NavLink>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
