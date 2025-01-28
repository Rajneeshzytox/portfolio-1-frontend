const ProjectCard = ({project, active}) => {
   
  return (
    <>
        {/* // Project Card */}
        <div
         
          className={`project-card border border-gray-600 transition-all 
                        md:overflow-x-clip md:overflow-y-hidden overflow-y-clip overflow-x-hidden
                        flex flex-col md:flex-row 
                        md:max-w-none max-w-52 w-52 
                        md:max-h-52 max-h-none h-52  
                        ${project.id == active.state ? "md:w-96 max-md:h-96 " : ""}`}
            onClick={()=>active.set((prev)=>(prev==project.id? 0 : project.id))}
        >
          {/* project card sec 1 */}
          <div className="min-w-52 min-h-52 flex justify-between pb-5 flex-col items-center">
            {/* project Card Image */}
            <div className="bg-gray-600 w-full h-1/2 aspect-square"></div>

            {/* projects Card Title */}
            <h3 className="capitalize">{project.title}</h3>

            {/* project card buttons/links */}
            <div
              className="project-card-links-container flex justify-evenly w-full
                                *:w- *:flex *:gap-2 *:items-center *:bg-gray-600  *:rounded *:flex-nowrap
                                "
            >
              {project.source && (
                <a href={project.source}>
                  <span>g</span>
                  <span>code</span>
                </a>
              )}
              {project.demo && (
                <a href={project.demo}>
                  <span>g</span>
                  <span>demo</span>
                </a>
              )}
              {project.site && (
                <a href={project.site}>
                  <span>g</span>
                  <span>live</span>
                </a>
              )}
            </div>
          </div>
          {/* project card sec 2 */}
          <div className="min-w-52 min-h-52">
            {/* project card description */}
            <div className="h-1/2 overflow-y-scroll px-2 text-pretty">
              {project.description}
            </div>
          </div>
        </div>
    </>
  );
};


export default ProjectCard;