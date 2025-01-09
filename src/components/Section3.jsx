import "../statics/styles/section3.css"



export default function Section3({Data}) {
  const skills = Data.skills
  const skillLenght = [...skills].length
    return (
      <>
      {/* skills */}
        <div
          className="row3-element-1 bg-gray-700 md:w-[40%] md:flex flex-col md:justify-evenly md:items-center max-md:col-span-2"
          >
            <h2>Skills {skillLenght}</h2>
            {/* slider bg */}
            <div className=" Slider max-w-full w-full border border-red-400 h-10 overflow-hidden">
              {/* Slider track */}
              <div className={`slider-track relative flex h-full w-full min-w-[calc(80px*${skillLenght})]`}>
                {skills.map((skill, index) => (
                  <div className={`w-20 left-[100%] bg-indigo-300 h-full absolute`} key={index}
                  style={{animationDelay: `0s`}}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
        </div>
      {/* skills ends */}
  
        <div
          className="row3-element-2 md:w-[20%] md:flex md:justify-evenly 
                              md:items-center"
          style={{ background: "var(--primary-gradient-light)" }}
        ></div>
  
        <div
          className="row3-element-3 md:w-[40%] flex md:items-center md:justify-start overflow-clip md:flex-row flex-col max-md:row-span-2 "
          style={{ background: "var(--accent-gradient)" }}
        >
          <div className="md:w-[40%] h-[40%] md:h-full"></div>
          <div className="md:w-[60%] h-[60%] md:h-full bg-gray-800">k</div>
        </div>
      </>
    );
  }