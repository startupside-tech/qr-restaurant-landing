import Image from "next/image"
import FOUNDER from "./images/Founder.webp"
const Founder = () =>{
    return(
        <div className=" flex items-center justify-center h-screen space-x-11 bg-yellow-50">
            <div>
                <Image src={FOUNDER} width={313} height={313} className="rounded-xl"/>

            </div>
            <div className=" w-[645px] space-y-16"> 
            <p className=" text-[17px]">
                "I've been a Ciferon user for two years, and it has transformed how we manage all our Kamat Restaurants locations, automating operations from top to bottom. The comprehensive integrations and the dedicated support team have been game-changers. I highly recommend Ciferon to any restaurant looking to upgrade their operations."
                </p>
                <div className="">
                <h3 className=" text-[20px] font-bold">Dr. Vikram Kamat</h3>
                <h3 className=" text-[20px] font-bold">Founder & Chairman, VITS Kamat Group</h3>
                </div>
            </div>

        </div>
    )
}

export default Founder