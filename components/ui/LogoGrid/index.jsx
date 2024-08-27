import Image from "next/image";
import campusfounders from "../../../public/logos/CampusFounders.svg";

const logos = [
  {
    src: campusfounders,
    alt: "campus founders",
  },
];

const LogoGrid = () => (
  <div>
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-gray-600 text-center">
        BACKED BY
      </h2>
      <div className="mt-6">
        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
          {logos.map((item, idx) => (
            <li key={idx}>
              <Image height={200} width={200} src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LogoGrid;
