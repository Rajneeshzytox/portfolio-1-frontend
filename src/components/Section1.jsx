import SocialGrid from "./miniComponent/SocialGrid";

// Redux state 
import {useSelector} from "react-redux"
import { NavLink } from "react-router-dom";

import { serverURL } from "./Admin/Data/api";

export default function Section1({
  img,
  first_name,
  last_name,
  about,
  social_links,
}) {
    
  const project = useSelector(s=>s.projects.data)
  const ProjectCount = project.length
    return (
      <>
        
        

          <div className="row1-element-1 bg-opacity-70 md:w-[60%] flex md:justify-evenly md:items-center max-md:col-span-2 max-md:px-6 md:py-0  py-6 
          bg-gardient-box bg-gray-700">
              
                <img
                className="Rajneesh-Img md:w-24 max-w-20 aspect-square rounded-lg"
                src={serverURL + img}
                alt={`${first_name} ${last_name}`}

                title={`${first_name} ${last_name}`}
                />
                <div className="Rajneesh-Name w-[60%] text-gray-100 ">
                    <h1 className="lg:text-3xl text-xl font-semibold">
                      HI, I'm 
                      <NavLink className="px-2" to="/admin" title="WELCOME TO ADMIN">
                       {`${first_name}`}
                      </NavLink>
                      </h1>
                    <p className="text-gray-300 trucate line-clamp-2 text-ellipsis">
                        {about}
                    </p>
                </div>
          </div>
        
  
        {/* Rajneesh-Social-Link */}
        <div
          className="row1-element-2  md:w-[20%] text-gray-30
           bg-opacity-60 bg-gardient-box grid place-content-center relative overflow-hidden max-md:py-8 max-md:px-3
          "
          >
            <img src="/img/shape2.png" className="absolute top-0 left-0 w-full -translate-x-1/3 rotate-12 -translate-y-1/4 pointer-events-none opacity-35 -z-10" />
              
                
                <SocialGrid socialData={social_links}/>
              
              
          </div>
        
          {/* Rajneesh-Project */}
        <NavLink
          className="row1-element-3 md:w-[20%] flex justify-center items-center text-gray-300 bg-opacity-70
           bg-gardient-box relative overflow-hidden"
          to="/projects"
        > 
          <h3 className="flex flex-col items-center justify-center px-4  font-semibold text-white text-2xl">
              <span className="text-5xl">
                {ProjectCount}
              </span>
              Projects
            </h3>

          <img src="img/block1.png" className="absolute top-1/2 -translate-y-1/2 left-0 -z-10" />
  
        </NavLink>
      </>
    );
  }