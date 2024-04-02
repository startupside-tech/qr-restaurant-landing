import Image from "next/image"
import FOUNDER from "./images/Founder.webp"

const Founder = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-yellow-50 px-4">
            <div className="mb-8 md:mb-0 md:mr-11">
                <Image src={FOUNDER} width={313} height={313} className="rounded-xl" />
            </div>
            <div className="max-w-md md:w-[645px] space-y-8 md:space-y-16">
                <p className="text-base md:text-lg">
                    "I've been a Ciferon user for two years, and it has transformed how we manage all our Kamat Restaurants locations, automating operations from top to bottom. The comprehensive integrations and the dedicated support team have been game-changers. I highly recommend Ciferon to any restaurant looking to upgrade their operations."
                </p>
                <div>
                    <h3 className="text-lg md:text-xl font-bold">Dr. Vikram Kamat</h3>
                    <h3 className="text-lg md:text-xl font-bold">Founder & Chairman, VITS Kamat Group</h3>
                </div>
            </div>
        </div>
    )
}

export default Founder
