import SectionWrapper from "../../SectionWrapper";

const Features = () => {
  const features = [
    {
      icon: <span>Logo</span>,
      title: "Realisitc mock tests",
      desc: "Prepare for the real GMAT with our full-length mock tests, designed to simulate the actual exam. Experience the same timing and conditions as the real test, so you can build your confidence and improve your time management skills.",
    },
    {
      icon: <span>Logo</span>,
      title: "Unlimited preperation tasks",
      desc: "With Quaplu you never run out of study material! Our advanced AI technology continuously generates an unlimited amount of GMAT preparation tasks, tailored to your specific needs.",
    },
    {
      icon: <span>Logo</span>,
      title: "Personalized Study Plans",
      desc: "We know that no two students are the same. That’s why Quaplu creates a tailored study plan based on your strengths, weaknesses, and schedule. Whether you're a math whiz or need extra help with verbal, we’ve got you covered.",
    },
  ];

  return (
    <SectionWrapper>
      <div id="features" className="custom-screen text-gray-600">
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li key={idx} className="space-y-3">
              <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg text-gray-800 font-semibold">
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Features;
