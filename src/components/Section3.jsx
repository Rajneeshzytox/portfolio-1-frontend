

// Redux state 
import {useSelector} from "react-redux"


export default function Section3() {
  const skills = useSelector((s)=>s.frontendData.skills)
  const skillLenght = [...skills].length
    return (
      <>
      {/* skills */}
        <div
          className="row3-element-1 md:w-[40%] overflow-x-scroll flex flex-col justify-center max-md:col-span-2 bg-gardient-box"
          >
            
            {/* slider bg */}
            <div className=" skills-container grid-flow-col grid-rows-2 gap-2"
            style={{display: "grid"}}>

              { skills.map((skill)=>(
                  <div key={`${skill.id}${skill.text}`} className="skills inline-block min-w-10 h-10  m-2 aspect-square
                  p-1">
                    {skill.icon? (
                      <img src={`/icons/${skill.icon}`} />
                    ):(
                      <p>{skill.text}</p>
                    )}
                  </div>
              ))}
            </div>

        </div>
      {/* skills ends */}
  
        {/* row3-element-2 */}
        <div
          className="row3-element-2 md:max-w-[20%] p-0 m-0 bg-gardient-box text-gray-200 rounded-xl overflow-hidden iniline"
        >
          <img src="/img/block3.png" className="w-full h-full"></img>
        </div>
  
        {/* row3-element-3 */}
        <div
          className="row3-element-3 md:w-[40%] flex md:items-center md:justify-start overflow-clip md:flex-row flex-col max-md:row-span-2 bg-gray-300 bg-gardient-box"
          
        >
          <div className="md:w-[40%] h-[40%] md:h-full">l</div>
          <div className="md:w-[60%] h-[60%] md:h-full bg-gardient-box">k</div>
        </div>
      </>
    );
  }