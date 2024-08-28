import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          Taking your{" "}
          <span className="inline-block bg-red text-primary-600">
            GMAT Preperation
          </span>{" "}
          into the AI Century
        </h1>
        <p className="max-w-xl mx-auto">
          Take your prep to the next level with unlimited exercises and detailed
          progress tracking.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="/get-started"
            className="text-white bg-primary-600 hover:bg-primary-800 "
          >
            Join the waitlist
          </NavLink>
          <NavLink
            href="#cta"
            className="text-gray-700 border hover:bg-gray-50"
            scroll={false}
          >
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
