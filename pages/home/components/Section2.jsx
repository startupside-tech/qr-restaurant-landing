import Image from "next/image"
import IMG1 from "./images/img1.jpeg"
const Section2 = () =>{
    return(
        <div className="flex items-center justify-center h-screen bg-yellow-50 p-42">
            <div className="container mx-auto flex items-center justify-center space-x-20">
                
                <div className="flex flex-col justify-center w-[400px]">
                    <h1 className="text-[40px] pt-14 text-[#ac9c68] font-bold leading-tight ">Direct QR & tablet ordering and takeaways</h1>
                    <div className=" space-y-20">
                    <p className="text-[22px] text-gray-800 mb-6 mt-6">Our platform creates unique QR codes by table number, room number for hotels, or by sunbed number for poolside/beachside venues. So when the guest scans the QR code, the system already knows where the order is coming from.</p>
                    
                    <button className="border border-[#ac9c68] bg-[#ac9c68] text-white rounded-lg hover:bg-transparent hover:text-[#ac9c68] transition duration-300 w-[134px] h-[43px]">Learn more</button>

                    </div>
                </div>
                <div className="">
                    <Image src={IMG1} className="rounded-xl" />
                </div>
            </div>
        </div>
    )
}

export default Section2