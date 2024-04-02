import Image from "next/image";
import ICON1 from "./images/icon.webp";

const Features = () => {
    return (
        <div className="bg-yellow-50 min-h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl p-10">Features</h1>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                {/* Feature Card */}
                <div className="bg-white border shadow-xl border-black w-full md:w-[272px] rounded-3xl flex flex-col justify-center items-center space-y-5 p-6">
                    <div className="h-24 w-24 relative">
                        <Image src={ICON1} layout="fill" objectFit="contain" alt="Feature Icon" />
                    </div>
                    <h3 className="font-bold text-[#ac9c68] text-lg text-center">Payment Gateway</h3>
                    <p className="text-gray-800 text-sm text-center pb-4">Your guests can now pay their bills through the tablet menu or through their mobile phones without needing to call your staff for checks.</p>
                    <button className="bg-[#ac9c68] text-white py-2 px-4 rounded-lg hover:bg-transparent hover:text-[#ac9c68] transition duration-300">Learn more</button>
                </div>
                <div className="bg-white border shadow-xl border-black w-full md:w-[272px] rounded-3xl flex flex-col justify-center items-center space-y-5 p-6">
                    <div className="h-24 w-24 relative">
                        <Image src={ICON1} layout="fill" objectFit="contain" alt="Feature Icon" />
                    </div>
                    <h3 className="font-bold text-[#ac9c68] text-lg text-center">Payment Gateway</h3>
                    <p className="text-gray-800 text-sm text-center pb-4">Your guests can now pay their bills through the tablet menu or through their mobile phones without needing to call your staff for checks.</p>
                    <button className="bg-[#ac9c68] text-white py-2 px-4 rounded-lg hover:bg-transparent hover:text-[#ac9c68] transition duration-300">Learn more</button>
                </div>
                <div className="bg-white border shadow-xl border-black w-full md:w-[272px] rounded-3xl flex flex-col justify-center items-center space-y-5 p-6">
                    <div className="h-24 w-24 relative">
                        <Image src={ICON1} layout="fill" objectFit="contain" alt="Feature Icon" />
                    </div>
                    <h3 className="font-bold text-[#ac9c68] text-lg text-center">Payment Gateway</h3>
                    <p className="text-gray-800 text-sm text-center pb-4">Your guests can now pay their bills through the tablet menu or through their mobile phones without needing to call your staff for checks.</p>
                    <button className="bg-[#ac9c68] text-white py-2 px-4 rounded-lg hover:bg-transparent hover:text-[#ac9c68] transition duration-300">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Features;
