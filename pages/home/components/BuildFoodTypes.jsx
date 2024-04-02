import { useState } from "react";
import Image from "next/image";
import FINE from './images/finedine.svg';
import BAR from './images/bar.svg';
import CAFE from './images/cafe.svg';
import FOOD from './images/foodcourt.svg';
import QSR from './images/qsr.svg';
import BAKERY from './images/bakery.svg'
import ICE from './images/ice-cream.svg'
import CLOUD from './images/cloud.svg'
import PIZZA from './images/pizzeria.svg'
import LARGE from './images/large-chain.svg'

const foodTypes = [
    { id: 1, name: "Fine Dine", image: FINE },
    { id: 2, name: "Bar", image: BAR },
    { id: 3, name: "Cafe", image: CAFE },
    { id: 4, name: "Food", image: FOOD },
    { id: 5, name: "QSR", image: QSR },
    { id: 6, name: "Bakery", image: BAKERY },
    { id: 7, name: "IceCream", image: ICE },
    { id: 8, name: "Cloud Kitchen", image: CLOUD },
    { id: 9, name: "Pizzeria", image: PIZZA },
    { id: 10, name: "Large-Chain", image: LARGE },

];

const backgroundColors = [
    "bg-pink-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-blue-400",
    "bg-indigo-200",
    "bg-indigo-100",
    "bg-green-100",
    "bg-pink-100",
    "bg-blue-100",
    "bg-yellow-100",
];

const BuildFoodTypes = () => {
    const [currentImage, setCurrentImage] = useState(null);

    const handleButtonClick = (image) => {
        setCurrentImage(image);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
            <h1 className="text-4xl font-bold mb-8">Choose Your Food Type</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 ">
                {foodTypes.map((food, index) => (
                    <div key={food.id} className={`flex flex-col items-center justify-center ${backgroundColors[index]} p-4 `}>
                        <button onClick={() => handleButtonClick(food.image)} className="flex flex-col items-center justify-center h-32 md:h-[200px] w-full md:w-[300px]">
                            <Image src={food.image} width={120} height={120} alt={food.name} />
                            <p className="text-center mt-2 text-lg md:text-xl">{food.name}</p>
                        </button>
                    </div>
                ))}
            </div>
            {/* <div className="flex justify-center items-center mt-8">
                {currentImage && (
                    <div>
                        <Image src={currentImage} width={200} height={200} alt="Selected Food" />
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default BuildFoodTypes;
