
import { useState } from "react";


const TotalCard = ({title, total}) => {
    const [color, setColor] = useState(240)
    // const title = "Title";
    // const url = "/admin/projects";
    // const total = 17;

    const randomColor = () => {
        const randomNum =  Math.round(Math.random() * 100) 
                + Math.round(Math.random() * 300) 
                + Math.round(Math.random() * 200) ;
        setColor(randomNum) 
    }

    setTimeout(() => {
        randomColor()
    }, 5000);

  return (
    <>
    {/* dashboard card */}
    
        <div 
            className={`
                CardDashboard aspect-square max-w-40 w-32 rounded-lg flex flex-col justify-between 
                border-2 transition-all duration-[2s]
                *:text-gray-500 *:hover:text-gray-300 *:transition *:duration-200
            `} 
            style={{borderColor: `hsl(${color}, 50%, 70%)`}}
        >
            {/* dashboard card Number */}
            <div className="border-red-300 md:text-5xl text-4xl h-[70%] grid place-content-center font-semibold">
                {total}
            </div>


            {/* dashboard card title/link */}
            <div className="h-[30%] border-green-400 flex justify-between items-center px-4  
            ">
            {/* title */}
            <span className="inline-block capitalize font-semibold ">{title}</span>
            </div>
        </div>

   
    </>
  );
};

export default TotalCard;
