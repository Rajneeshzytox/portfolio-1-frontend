import "../statics/styles/section3.css"



export default function Section3({Data}) {
  const skills = Data.skills
  const skillLenght = [...skills].length
    return (
      <>
      {/* skills */}
        <div
          className="row3-element-1 md:w-[40%] overflow-hidden flex flex-col justify-center max-md:col-span-2"
          >
            <h2>Skills {skillLenght}</h2>
            {/* slider bg */}
            <div className=" skills-container flex justify-start items-center">

              { skills.map((skill)=>(
                  <div className="skills inline-block min-w-20 h-20 bg-gray-400 m-2 aspect-square">
                    {skill}
                  </div>
              ))}
            </div>

        </div>
      {/* skills ends */}
  
        {/* row3-element-2 */}
        <div
          className="row3-element-2 md:w-[20%] md:flex md:justify-evenly 
          md:items-center bg-gray-700 text-gray-200"
        ></div>
  
        {/* row3-element-3 */}
        <div
          className="row3-element-3 md:w-[40%] flex md:items-center md:justify-start overflow-clip md:flex-row flex-col max-md:row-span-2 bg-gray-300"
          
        >
          <div className="md:w-[40%] h-[40%] md:h-full">l</div>
          <div className="md:w-[60%] h-[60%] md:h-full bg-gray-900">k</div>
        </div>
      </>
    );
  }