import Image from "next/image";
import IMG1 from "./images/img1.jpeg";

const Section1 = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-yellow-50 py-16 px-4 sm:px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-20">
                <div className="w-full md:w-[400px] max-w-md">
                    <Image src={IMG1} alt="image1" className="rounded-xl" width={400} height={400} />
                </div>
                <div className="flex flex-col justify-center w-full md:w-[400px]">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#ac9c68] font-bold leading-tight mb-4">Showcase your food with beautiful photos and videos</h1>
                    <p className="text-lg sm:text-xl text-gray-800 mb-6 mt-4">This guarantees an increase in your sales because your guests are mesmerized by your food and will definitely get tempted to order more!</p>
                    <button className="border border-[#ac9c68] bg-[#ac9c68] text-white rounded-lg hover:bg-transparent hover:text-[#ac9c68] transition duration-300 w-[134px] h-[43px]">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Section1;
