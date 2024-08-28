import Head from "next/head";

import SignupForm from "../components/ui/Signupform";

export default function GetStarted() {
  return (
    <>
      <Head>
        <title>Contact us - Quaplu</title>
      </Head>
      <div className="pt-28 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg sm:text-center lg:text-left">
              <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Join the Waitlist today!
              </h1>
              <p className="mt-3">
                First on is on us. Signup for the waiting list today and recieve
                <span className="font-bold"> 20 GMAT Exam questions </span>with
                solutionsteps from our pretrained LLM. If there is anything
                you'd like to share, please reach out to{" "}
                <a
                  href="mailto:info@quaplu.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:text-indigo-400 font-medium duration-150"
                >
                  info@quaplu.com
                </a>
              </p>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
