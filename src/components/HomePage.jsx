import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import { Loading } from "./frontend/Loading.jsx";
import { Error } from "./frontend/Error.jsx";
import "../statics/styles/Home.css";

// bg elements
import BgShape from "./bg-elements/bg-shape.jsx" 

// data fetch
import {useSelector} from "react-redux"

export default function HomePage() {
  const frontendData = useSelector((s)=>s.frontendData)

  if(frontendData.isLoading){
    return <Loading title="Please wait while server is starting"/>
  }
  if(frontendData.error){
    return <Error title="Failed to load data"/>
  }


  return (
    <>
    <p className="bg-gray-950 text-gray-50 text-center">🚧 Site is in under construction 👷‍♂️</p>
      <main
        className="MainHomePage p-2 relative bg-gray-950 text-gray-300 grid w-full gap-3 overflow-x-hidden 
        md:*:flex *:grid *:md:flex-row *:gap-3 *:md:justify-between *:z-10  md:*:max-h-52
        z-0 max-w-[1536px] 2xl:my-10 2xl:mx-auto 2xl:rounded-2xl 2xl:shadow-lg 2xl:shadow-gray-800"
        >
        
        <BgShape/>
        

        <section className="section1 max-md:grid-cols-2 *:md:h-auto *:min-h-20 *:gap-3 *:rounded-xl lg:max-h-[300px]">
          {
            frontendData.data[0] &&
            <Section1 
              img={frontendData.data[0].img}
              first_name={frontendData.data[0].first_name}
              last_name={frontendData.data[0].last_name}
              about={frontendData.data[0].about}
              social_links={frontendData.data[0].social_links}
            />
          }
        </section>

        <section className="section2 max-md:grid-cols-2 *:gap-3 *:rounded-xl *:md:h-auto *:min-h-20 lg:max-h-[300px]">
        {
            frontendData.data[0] &&
          <Section2/>
        }
        </section>

        <section className="section4 min-h-full lg:flex-col md:items-center md:justify-start md:*:h-full *:min-h-20 max-lg:max-h-none *:rounded-2xl">
        {
            frontendData.data[0] &&
          <Section4/>
        }
        </section>
        
        <section className="section3  *:gap-3 *:rounded-xl *:md:h-auto *:min-h-20
        lg:max-h-[300px] max-md:flex max-md:flex-col justify-evenly ">
          {
            frontendData.data[0] &&
            <Section3/>
        }
        </section>

      </main>
    </>
  );
}
