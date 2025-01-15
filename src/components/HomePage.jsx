import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";

import "../statics/styles/Home.css";

// frontend Data
import { frontendData } from "./Admin/Data/frontendData.js";


const Data = frontendData()


export default function HomePage() {

  const moveImgs = () => {
      const moveImg = document.getElementById('moveImg');
      window.addEventListener('mousemove', (e)=>{
        moveImg.style.left = e.clientX + 'px';
        moveImg.style.top = e.clientY + 'px';
      })
  }

  return (
    <>
      <main
        className="MainHomePage p-2 relative  bg-gray-950 text-gray-300 grid max-w-full lg:max-h-screen min-h-screen gap-3 
                 md:*:flex *:grid *:md:flex-row *:gap-3 *:md:justify-between
                 z-0 overflow-hidden
                 "
        onMouseMove={(e)=>moveImgs()}
      >

        <img src="/img/bg-1.png" className="absolute -z-10 object-center top-0 left-0 w-full h-full"/>
        <img id="moveImg" src="/img/bg-2.png"  className="absolute -z-10 object-center top-0 left-0 mix-blend-multiply -translate-x-1/2 -translate-y-1/2 scale-[2] w-full h-full"/>


        
        <section className="section1 max-md:grid-cols-2 *:md:h-auto *:min-h-20 *:gap-3 *:rounded-xl">
          <Section1 RajneeshInfo={Data}/>
        </section>

        <section className="section2 max-md:grid-cols-2 *:gap-3 *:rounded-xl *:md:h-auto *:min-h-20">
        
          <Section2 Data={Data}/>
        </section>

        <section className="section3 max-md:grid-cols-2 max-md:grid-rows-3 *:gap-3 *:rounded-xl *:md:h-auto *:min-h-20">
          <Section3 Data={Data}/>
        </section>

        <section className="section4 md:h-full lg:flex-col md:items-center md:justify-center md:*:h-full *:min-h-20 *:gap-3 *:rounded-2xl">
          <Section4 />
        </section>
      </main>
    </>
  );
}
