import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";

import "../statics/styles/Home.css";
import {PersonalInfo} from "../myData.js"


const Data = PersonalInfo()


export default function HomePage() {
  return (
    <>
      <main
        className="MainHomePage p-2 bg-black rounded-3xl grid max-w-full lg:max-h-screen min-h-screen gap-3 
                 md:*:flex *:grid *:md:flex-row *:gap-3 *:md:justify-between
                 "
      >
        <section className="section1 max-md:grid-cols-2 *:md:h-auto *:min-h-20 *:gap-3 *:rounded-2xl">
          <Section1 RajneeshInfo={Data}/>
        </section>

        <section className="section2 max-md:grid-cols-2 *:gap-3 *:rounded-2xl *:md:h-auto *:min-h-20">
          <Section2 Data={Data}/>
        </section>

        <section className="section3 max-md:grid-cols-2 max-md:grid-rows-3 *:gap-3 *:rounded-2xl *:md:h-auto *:min-h-20">
          <Section3 Data={Data}/>
        </section>

        <section className="section4 md:h-full lg:flex-col md:items-center md:justify-center md:*:h-full *:min-h-20 *:gap-3 *:rounded-2xl">
          <Section4 />
        </section>
      </main>
    </>
  );
}
