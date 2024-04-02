import Link from "next/link";
import Image from "next/image";
import IMG1 from "./images/introimg.webp";

const Intro = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col md:flex-row items-center justify-center">
      <div className="order-2 md:order-1 text-center md:text-left w-full md:w-[350px] space-y-20 md:mr-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Designed to increase your sales by 30%
        </h1>
        <div className="mt-4 space-y-6 flex flex-col ">
          <Link
            href=""
            className="block md:w-[200px] px-6 py-3 rounded-lg bg-black text-white text-center font-semibold hover:bg-gray-600 transition duration-300"
          >
            Start 15 Days Trial
          </Link>
          <Link
            href=""
            className="block md:w-[150px] px-6 py-3 rounded-lg border border-black text-black text-center font-semibold hover:bg-gray-100 transition duration-300"
          >
            Join Webinar
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-[400px] mb-10 md:mb-0">
        <Image src={IMG1} alt="Intro Image" width={350} height={300} className="rounded-xl" />
      </div>
    </div>
  );
};

export default Intro;
