import Image from "next/image";
import visualOne from "../../../public/Visual_One.png";
import visualTwo from "../../../public/Visual_Two.png";
import NavLink from "../NavLink";

const CTA = () => {
  return (
    <div id="cta" className={"py-16 flex-col"}>
      <div className="custom-screen">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Image
              src={visualOne}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Realisitc mock tests
            </h2>
            <p className="mt-3 text-gray-600">
              Prepare for the real GMAT with our full-length mock tests,
              designed to simulate the actual exam. Experience the same timing
              and conditions as the real test, so you can build your confidence
              and improve your time management skills.
            </p>
            <NavLink
              href="/get-started"
              className="inline-block mt-4 font-medium text-sm text-white bg-primary-600 hover:bg-primary-800 active:bg-indigo-800"
            >
              Join the waitlist
            </NavLink>
          </div>
        </div>
        <div className="items-center gap-x-12 lg:flex">
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Unlimited preperation tasks
            </h2>
            <p className="mt-3 text-gray-600">
              With Quaplu you never run out of study material! Our advanced AI
              technology continuously generates an unlimited amount of GMAT
              preparation tasks, tailored to your specific needs.
            </p>
            <NavLink
              href="/get-started"
              className="inline-block mt-4 font-medium text-sm text-white bg-primary-600 hover:bg-primary-800"
            >
              Join the waitlist
            </NavLink>
          </div>
          <div className="flex-1 sm:hidden lg:block">
            <Image
              src={visualTwo}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
        </div>
        <div className="custom-screen">
          <div className="items-center gap-x-12 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <Image
                src={visualOne}
                className="rounded-lg md:max-w-lg"
                alt="Create Successful Business Models with Our IT Solutions"
              />
            </div>
            <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Personalized Study Plans
              </h2>
              <p className="mt-3 text-gray-600">
                We know that no two students are the same. That’s why Quaplu
                creates a tailored study plan based on your strengths,
                weaknesses, and schedule. Whether you're a math whiz or need
                extra help with verbal, we’ve got you covered.
              </p>
              <NavLink
                href="/get-started"
                className="inline-block mt-4 font-medium text-sm text-white bg-primary-600 hover:bg-primary-800"
              >
                Join the waitlist
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
