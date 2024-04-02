import Image from "next/image";
import IMG1 from "./images/img1.jpeg";

const Section1 = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-yellow-50 p-42">
            <div className="container mx-auto flex items-center justify-center space-x-20">
                <div className="">
                    <Image src={IMG1} className="rounded-xl" />
                </div>
                <div className="flex flex-col justify-center w-[400px]">
                    <h1 className="text-[40px] pt-14 text-[#ac9c68] font-bold leading-tight ">Showcase your food with beautiful photos and videos</h1>
                    <div className=" space-y-20">
                    <p className="text-[22px] text-gray-800 mb-6 mt-6">This guarantees an increase in your sales because your guests are mesmerized by your food and will definitely get tempted to order more!</p>
                    
                    <button className="border border-[#ac9c68] bg-[#ac9c68] text-white rounded-lg hover:bg-transparent hover:text-[#ac9c68] transition duration-300 w-[134px] h-[43px]">Learn more</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
