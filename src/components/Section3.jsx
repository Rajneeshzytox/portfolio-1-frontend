import Skills from "./miniComponent/Skills"

// Redux state 
import {useSelector} from "react-redux"


export default function Section3() {
  const frontendData = useSelector((s)=>s.frontendData)

  if(frontendData.isLoading){
    return <p>Loading</p>
  }
  if(frontendData.error){
    return <p>Failed To load Data</p>
  }

  const skills = frontendData.data[0]?.skills
  const skillLenght = [...skills].length
  const resumes = frontendData.data[0]?.resumes
  const resume = resumes.filter((resume_obj)=>resume_obj.active == true)
  
    return (
      <>
      {/* skills */}
      {
        skills &&
        <div
          className="row3-element-1 md:w-[30%] overflow-x-scroll flex justify-start items-center pl-4 max-md:col-span-2 bg-gardient-box"
          >
            {/* SKills Lenght Heading */}
            <h3 className="flex flex-col items-center justify-center px-4 text-gray-400">
              <span className="text-5xl text-gray-300">
                {skillLenght}
              </span>
              skills
            </h3>
            
            {/* slider bg */}
            <Skills skills={skills}/>
        </div>
      }
        
      {/* skills ends */}
  
        {/* row3-element-2 */}
        <div
          className="row3-element-2 md:max-w-[20%] p-0 m-0 bg-gardient-box text-gray-200 rounded-xl overflow-hidden iniline"
        >
          <img src="/img/block3.png" className="w-full h-full"></img>
        </div>
  
        {/* row3-element-3 */}
        <div
          className="row3-element-3 md:w-[50%] flex md:items-center md:justify-start overflow-clip md:flex-row flex-col max-md:row-span-2 bg-gray-300 bg-gardient-box"
          
        >
          {/* Resume Container */}
            {
              resume[0] &&
              <div className="md:w-full h-[40%] md:h-full flex flex-col justify-center items-center px-5 py-2 gap-1 text-center bg-indigo-900 text-white">
                  <h5 className="text-lg">Too much clutter?</h5>
                  <p className="text-sm">Download Clean Resume</p>
                  <a className="inline-block duration-200 text-center rounded px-2 text-gray-300 hover:text-gray-100 hover:underline" href={resume[0].url} title={resume[0].category.name + " Resume Download"} download 
                  
                  >
                    My Resume
                  </a>
              </div>
            }

          {/* have a project ? */}
          <div className="md:w-full h-[60%] md:h-full flex flex-col justify-center items-center px-4 gap-2">
              <h5>
                have a project idea?
              </h5>
              <a className="inline-block hover:text-white"
               href="#">let's discuss</a>
          </div>
        </div>
      </>
    );
  }