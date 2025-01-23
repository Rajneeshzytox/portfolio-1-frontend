import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";

import "../statics/styles/Home.css";

// frontend Data
import { frontendData } from "./Admin/Data/frontendData.js";

// bg elements
import BgShape from "./bg-elements/bg-shape.jsx" 

const Data = frontendData()


export default function HomePage() {

  return (
    <>
      <main
        className="MainHomePage p-2 relative bg-gray-950 text-gray-300 grid w-full lg:max-h-screen min-h-screen gap-3 overflow-x-hidden 
        md:*:flex *:grid *:md:flex-row *:gap-3 *:md:justify-between *:z-10 lg:*:max-h-none md:*:max-h-52
        z-0 max-w-[1536px] 2xl:my-10 2xl:mx-auto 2xl:rounded-2xl 2xl:shadow-lg 2xl:shadow-gray-800"
        >
        
        <BgShape/>
        

        <section className="section1 max-md:grid-cols-2 *:md:h-auto *:min-h-20 *:gap-3 *:rounded-xl">
          
          <Section1/>
        </section>

        <section className="section2 max-md:grid-cols-2 *:gap-3 *:rounded-xl *:md:h-auto *:min-h-20 lg:max-h-52">
        
          <Section2/>
        </section>

        <section className="section4 md:h-full lg:flex-col-reverse md:items-center md:justify-center md:*:h-full *:min-h-20 *:gap-3 *:rounded-2xl">
          <Section4 />
        </section>
        
        <section className="section3 max-md:grid-cols-2 max-md:grid-rows-3 *:gap-3 *:rounded-xl *:md:h-auto *:min-h-20">
          <Section3/>
        </section>

      </main>
    </>
  );
}
