import Head from "next/head";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function GetStarted() {
  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
  ];

  return (
    <>
      <Head>
        <title>Contact us - Blinder</title>
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
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 font-medium"
              >
                <div>
                  <label>Email *</label>
                  <Input
                    aria-label="Email"
                    type="email"
                    required
                    className="mt-2 focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    aria-label="Message"
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  ></textarea>
                </div>

                <div className="pt-1">
                  <Button className="w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
