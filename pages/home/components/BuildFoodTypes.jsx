import { useState } from "react";
import Image from "next/image";
import FINE from './images/finedine.svg';
import BAR from './images/bar.svg';
import CAFE from './images/cafe.svg';
import FOOD from './images/foodcourt.svg';
import QSR from './images/qsr.svg';

const foodTypes = [
    { id: 1, name: "Fine Dine", image: FINE },
    { id: 2, name: "Bar", image: BAR },
    { id: 3, name: "Cafe", image: CAFE },
    { id: 4, name: "Food", image: FOOD },
    { id: 5, name: "QSR", image: QSR },
    { id: 6, name: "QSR", image: QSR },
    { id: 7, name: "QSR", image: QSR },
    { id: 8, name: "QSR", image: QSR },
    { id: 9, name: "QSR", image: QSR },
    { id: 10, name: "QSR", image: QSR },
];

const backgroundColors = [
    "bg-pink-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-red-200",
    "bg-purple-200",
    "bg-teal-200",
    "bg-orange-200",
    "bg-gray-200",
];

const BuildFoodTypes = () => {
    const [currentImage, setCurrentImage] = useState(null);

    const handleButtonClick = (image) => {
        setCurrentImage(image);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
            <h1 className="text-4xl font-bold mb-8">Choose Your Food Type</h1>
            <div className="grid grid-cols-5 gap-x-0">
                {foodTypes.map((food, index) => (
                    <div key={food.id} className={`flex flex-col items-center justify-center ${backgroundColors[index]} p-4 `}>
                        <button onClick={() => handleButtonClick(food.image)} className="flex flex-col items-center justify-center h-[200px] w-[300px]">
                            <Image src={food.image} width={120} height={120} alt={food.name} />
                            <p className="text-center mt-2 text-xl">{food.name}</p>
                        </button>
                    </div>
                ))}
            </div>
           {/*  <div className="flex justify-center items-center mt-8">
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
